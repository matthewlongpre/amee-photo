#!/usr/bin/env node
/**
 * Transform WordPress content and upload to Sanity.
 * Run: source .env && node scripts/migration/2-transform-and-upload.js
 */

const fs = require('fs')
const path = require('path')

const CACHE_DIR = path.join(__dirname, 'wp-data')
const { createClient } = require('@sanity/client')

// Sanity client setup
const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

// Simple HTML to Portable Text converter
function htmlToPortableText(html) {
  if (!html) return [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: '' }] }]

  const blocks = []
  const paragraphs = html.split(/<\/p>/).filter((p) => p.trim())

  paragraphs.forEach((para) => {
    let text = para.replace(/<p[^>]*>/, '').trim()
    text = text
      .replace(/<br\s*\/?>/g, '\n')
      .replace(/<strong>|<b>/g, '')
      .replace(/<\/strong>|<\/b>/g, '')
      .replace(/<em>|<i>/g, '')
      .replace(/<\/em>|<\/i>/g, '')
      .replace(/<[^>]+>/g, '')
      .trim()

    if (text) {
      blocks.push({
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text }],
      })
    }
  })

  return blocks.length > 0 ? blocks : [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: '' }] }]
}

async function transformPost(wpPost) {
  return {
    _type: 'post',
    title: wpPost.title?.rendered || 'Untitled',
    subTitle: (wpPost.excerpt?.rendered || '').replace(/<[^>]+>/g, '').substring(0, 200) || 'Wedding & Engagement',
    seoTitle: wpPost.title?.rendered || 'Untitled',
    slug: {
      _type: 'slug',
      current: wpPost.slug,
    },
    isFeatured: false,
    content: htmlToPortableText(wpPost.content?.rendered || ''),
    excerpt: (wpPost.excerpt?.rendered || '').replace(/<[^>]+>/g, '').substring(0, 300),
    date: wpPost.date,
    gallery: {
      _type: 'gallery',
      snippet: '',
    },
    vendors: [],
  }
}

async function transformPage(wpPage) {
  return {
    _type: 'page',
    title: wpPage.title?.rendered || 'Untitled',
    content: htmlToPortableText(wpPage.content?.rendered || ''),
  }
}

async function main() {
  console.log('\n📥 Loading cached WordPress data...')
  const posts = JSON.parse(fs.readFileSync(path.join(CACHE_DIR, 'posts.json'), 'utf-8'))
  const pages = JSON.parse(fs.readFileSync(path.join(CACHE_DIR, 'pages.json'), 'utf-8'))

  console.log(`  Posts: ${posts.length}`)
  console.log(`  Pages: ${pages.length}`)

  console.log('\n✓ Sanity client ready')

  console.log('\n📝 Uploading posts...')
  for (let i = 0; i < posts.length; i++) {
    const wpPost = posts[i]
    try {
      const doc = await transformPost(wpPost)
      const result = await client.createOrReplace({
        ...doc,
        _id: `post-${wpPost.id}`,
      })
      console.log(`  ✓ [${i + 1}/${posts.length}] ${result.title}`)
    } catch (err) {
      console.error(`  ✗ [${i + 1}/${posts.length}] ${wpPost.title?.rendered || wpPost.id}:`, err.message.substring(0, 80))
    }
  }

  console.log('\n📄 Uploading pages...')
  for (let i = 0; i < pages.length; i++) {
    const wpPage = pages[i]
    try {
      const doc = await transformPage(wpPage)
      const result = await client.createOrReplace({
        ...doc,
        _id: `page-${wpPage.id}`,
      })
      console.log(`  ✓ [${i + 1}/${pages.length}] ${result.title}`)
    } catch (err) {
      console.error(`  ✗ [${i + 1}/${pages.length}] ${wpPage.title?.rendered || wpPage.id}:`, err.message.substring(0, 80))
    }
  }

  console.log('\n✅ Migration complete!')
  console.log('\n📋 Next steps:')
  console.log('  1. Visit Sanity Studio to review posts')
  console.log('  2. Run: node scripts/migration/3-upload-images.js (to add cover images)')
  console.log('  3. Manually set up PicTime gallery snippets for posts')
}

main().catch(console.error)
