#!/usr/bin/env node
/**
 * Fetch all content from the old WordPress site and cache locally.
 * Run: node scripts/migration/1-fetch-wordpress.js
 */

const fs = require('fs')
const path = require('path')

const WP_BASE = 'https://amee.photo/wp-json/wp/v2'
const CACHE_DIR = path.join(__dirname, 'wp-data')

async function fetchPaginated(endpoint) {
  const results = []
  let page = 1
  let hasMore = true

  while (hasMore) {
    const url = `${WP_BASE}${endpoint}?per_page=100&page=${page}`
    console.log(`  Fetching page ${page}...`)

    try {
      const res = await fetch(url)
      if (!res.ok) {
        if (res.status === 404) break
        throw new Error(`${res.status} ${res.statusText}`)
      }

      const data = await res.json()
      if (!Array.isArray(data) || data.length === 0) {
        hasMore = false
        break
      }

      results.push(...data)
      page++

      const totalPages = res.headers.get('x-wp-totalpages')
      if (totalPages && page > parseInt(totalPages)) {
        hasMore = false
      }
    } catch (err) {
      console.error(`  Error fetching page ${page}:`, err.message)
      hasMore = false
    }
  }

  return results
}

async function main() {
  fs.mkdirSync(CACHE_DIR, { recursive: true })

  console.log('Fetching posts...')
  const posts = await fetchPaginated('/posts')
  fs.writeFileSync(path.join(CACHE_DIR, 'posts.json'), JSON.stringify(posts, null, 2))
  console.log(`  ✓ Saved ${posts.length} posts`)

  console.log('Fetching pages...')
  const pages = await fetchPaginated('/pages')
  fs.writeFileSync(path.join(CACHE_DIR, 'pages.json'), JSON.stringify(pages, null, 2))
  console.log(`  ✓ Saved ${pages.length} pages`)

  console.log('Fetching media...')
  const media = await fetchPaginated('/media')
  fs.writeFileSync(path.join(CACHE_DIR, 'media.json'), JSON.stringify(media, null, 2))
  console.log(`  ✓ Saved ${media.length} media items`)

  console.log('Fetching categories...')
  const categories = await fetchPaginated('/categories')
  fs.writeFileSync(path.join(CACHE_DIR, 'categories.json'), JSON.stringify(categories, null, 2))
  console.log(`  ✓ Saved ${categories.length} categories`)

  console.log('\n✅ Done! Cache saved to', CACHE_DIR)
}

main().catch(console.error)
