#!/usr/bin/env node
/**
 * Upload featured images to posts.
 * Run: source .env && node scripts/migration/3-upload-images.js
 */

const fs = require('fs')
const path = require('path')
const https = require('https')
const http = require('http')

const CACHE_DIR = path.join(__dirname, 'wp-data')
const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

async function downloadImage(imageUrl) {
  return new Promise((resolve, reject) => {
    const protocol = imageUrl.startsWith('https') ? https : http
    protocol
      .get(imageUrl, { timeout: 10000 }, async (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const newUrl = new URL(res.headers.location, imageUrl).toString()
          const newProtocol = newUrl.startsWith('https') ? https : http
          newProtocol
            .get(newUrl, (redirectRes) => {
              const chunks = []
              redirectRes.on('data', (chunk) => chunks.push(chunk))
              redirectRes.on('end', () => resolve(Buffer.concat(chunks)))
              redirectRes.on('error', reject)
            })
            .on('error', reject)
          return
        }
        const chunks = []
        res.on('data', (chunk) => chunks.push(chunk))
        res.on('end', () => resolve(Buffer.concat(chunks)))
        res.on('error', reject)
      })
      .on('error', reject)
  })
}

async function uploadImageToSanity(imageUrl, filename) {
  try {
    const buffer = await downloadImage(imageUrl)
    const asset = await client.assets.upload('image', buffer, { filename })
    return asset
  } catch (err) {
    console.error(`    Error:`, err.message)
    return null
  }
}

async function main() {
  console.log('\n📥 Loading data...')
  const posts = JSON.parse(fs.readFileSync(path.join(CACHE_DIR, 'posts.json'), 'utf-8'))
  const media = JSON.parse(fs.readFileSync(path.join(CACHE_DIR, 'media.json'), 'utf-8'))

  const mediaMap = {}
  media.forEach((item) => {
    mediaMap[item.id] = item
  })

  console.log(`\n📤 Uploading ${posts.length} cover images...`)

  let uploaded = 0
  let skipped = 0

  for (let i = 0; i < posts.length; i++) {
    const wpPost = posts[i]
    const mediaId = wpPost.featured_media

    if (!mediaId || !mediaMap[mediaId]) {
      process.stdout.write(`\r  [${i + 1}/${posts.length}] Skipped (no image)`)
      skipped++
      continue
    }

    const mediaItem = mediaMap[mediaId]
    const imageUrl = mediaItem.source_url
    const filename = path.basename(new URL(imageUrl).pathname) || `image-${mediaId}.jpg`

    process.stdout.write(`\r  [${i + 1}/${posts.length}] Uploading: ${filename.substring(0, 40)}...`)

    const asset = await uploadImageToSanity(imageUrl, filename)

    if (asset) {
      try {
        await client
          .patch(`post-${wpPost.id}`)
          .set({
            coverImage: {
              _type: 'image',
              asset: { _type: 'reference', _ref: asset._id },
            },
          })
          .commit()

        uploaded++
      } catch (err) {
        console.error(`\n    Error updating post:`, err.message)
      }
    }
  }

  console.log(`\n\n✅ Complete!`)
  console.log(`  Uploaded: ${uploaded}`)
  console.log(`  Skipped: ${skipped}`)
  console.log(`\n📋 Next: Manually add PicTime gallery snippets to posts`)
}

main().catch(console.error)
