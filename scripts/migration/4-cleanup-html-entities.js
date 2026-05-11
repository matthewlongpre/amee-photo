#!/usr/bin/env node
/**
 * Clean up HTML entities in post titles and subtitles.
 * Run: source .env && node scripts/migration/4-cleanup-html-entities.js
 */

const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

// Decode HTML entities
function decodeHtmlEntities(text) {
  const entities = {
    '&amp;': '&',
    '&#038;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#8217;': "'",
    '&#8211;': '–',
    '&#8212;': '—',
    '&apos;': "'",
    '&#39;': "'",
  }

  let decoded = text
  Object.entries(entities).forEach(([entity, char]) => {
    decoded = decoded.replace(new RegExp(entity, 'g'), char)
  })

  return decoded
}

async function main() {
  console.log('\n📥 Fetching posts...')
  const posts = await client.fetch('*[_type == "post"]')

  console.log(`\n🧹 Cleaning ${posts.length} posts...\n`)

  let updated = 0

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    const decodedTitle = decodeHtmlEntities(post.title)
    const decodedSubtitle = decodeHtmlEntities(post.subTitle || '')

    if (decodedTitle !== post.title || decodedSubtitle !== post.subTitle) {
      try {
        await client
          .patch(post._id)
          .set({
            title: decodedTitle,
            subTitle: decodedSubtitle,
          })
          .commit()

        console.log(`  ✓ [${i + 1}/${posts.length}] ${decodedTitle}`)
        updated++
      } catch (err) {
        console.error(`  ✗ [${i + 1}/${posts.length}] Error:`, err.message)
      }
    } else {
      console.log(`  - [${i + 1}/${posts.length}] No changes needed`)
    }
  }

  console.log(`\n✅ Complete! Updated ${updated} posts.`)
}

main().catch(console.error)
