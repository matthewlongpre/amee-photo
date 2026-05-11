'use client'

import Image from 'next/image'
import Link from 'next/link'

import { urlForImage } from '../lib/sanity'
import { PostProps } from '../types'

interface LatestStoriesProps {
  posts: PostProps[]
}

const frameColors = ['#A68F83', '#2D2E2D', '#2D2E2D']

export default function LatestStories({ posts }: LatestStoriesProps) {
  return (
    <div className="bg-white px-4 py-12 sm:px-8 lg:px-16 lg:py-[72px]">
      {/* Title */}
      <div className="mb-12 flex items-center justify-center gap-8 lg:mb-16">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L10 6H15L11 9L13 15L8 12L3 15L5 9L1 6H6L8 1Z" fill="#A68F83" />
        </svg>
        <h2 className="font-quincy text-h2 text-cool-900 whitespace-nowrap">Latest Stories</h2>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L10 6H15L11 9L13 15L8 12L3 15L5 9L1 6H6L8 1Z" fill="#A68F83" />
        </svg>
      </div>

      {/* Stories Grid */}
      <div className="mb-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:mb-16 lg:grid-cols-3 lg:gap-8">
        {posts.map((post, index) => (
          <Link key={post.slug} href={`/stories/${post.slug}`} className="flex flex-col items-center gap-6">
            {/* Offset frame image */}
            <div className="relative w-full overflow-clip" style={{ paddingBottom: 'calc(100% + 24px)' }}>
              {/* Border frame at top-left */}
              <div
                className="absolute left-0 top-0 h-[calc(100%-24px)] w-[calc(100%-24px)]"
                style={{ border: `1px solid ${frameColors[index % frameColors.length]}`, opacity: 0.92 }}
              />
              {/* Image offset 24px right and down */}
              <div className="absolute left-6 top-6 h-[calc(100%-24px)] w-[calc(100%-24px)]">
                {post.coverImage && (post.coverImage.asset.url || post.coverImage.asset._ref) && (
                  <Image
                    src={post.coverImage.asset.url ?? urlForImage(post.coverImage.asset._ref!).width(600).height(600).url()}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              {post.date && (
                <p className="font-quincy text-overline text-warm-700">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              )}
              <h3 className="font-quincy text-h4 text-cool-900">{post.title}</h3>
              {post.subTitle && (
                <p className="font-karla text-subheading-sm text-warm-700">{post.subTitle}</p>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/stories"
          className="bg-cool-900 px-6 py-4 font-karla text-button text-white uppercase hover:opacity-90"
        >
          See more stories
        </Link>
      </div>
    </div>
  )
}
