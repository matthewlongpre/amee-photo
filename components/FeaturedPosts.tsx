'use client'

import { useState } from 'react'

import { PostProps } from '../types'
import { Logo } from './logo'
import { FeaturedPost } from './FeaturedPost'

interface FeaturedPostsProps {
  posts: PostProps[]
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!posts.length) return null

  const currentPost = posts[currentIndex]

  const goToPrevious = () =>
    setCurrentIndex((currentIndex - 1 + posts.length) % posts.length)
  const goToNext = () =>
    setCurrentIndex((currentIndex + 1) % posts.length)

  return (
    <div className="relative bg-warm-50">
      {/* Border frame that peeks above the nav box, overlaid on the hero image */}
      <div className="pointer-events-none absolute left-1/2 top-[624px] h-24 w-[896px] -translate-x-1/2 border-l border-r border-t border-warm-50" />
      {/* Slider */}
      <div className="relative h-[800px] w-full overflow-hidden">
        {posts.map((post, index) => (
          <FeaturedPost
            key={post.slug}
            post={post}
            priority={index === 0}
            isVisible={index === currentIndex}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(34,34,34,0.5)] via-transparent to-transparent" />

        {/* Navigation Box — overlaps bottom 20% of image */}
        <div className="absolute left-1/2 top-[640px] w-[864px] -translate-x-1/2 transform bg-white px-10 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={goToPrevious}
              className="flex h-10 w-10 items-center justify-center hover:opacity-70"
              aria-label="Previous slide"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M25 12L15 22L25 32" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-2">
              <p className="font-quincy text-overline text-warm-600">Featured Work</p>
              <p className="font-quincy text-h3 text-cool-900">{currentPost.title}</p>
              <p className="font-karla text-subheading-sm text-warm-600">{currentPost.subTitle}</p>
            </div>

            <button
              onClick={goToNext}
              className="flex h-10 w-10 items-center justify-center hover:opacity-70"
              aria-label="Next slide"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M15 12L25 22L15 32" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Header Navigation */}
        <div className="absolute left-1/2 top-10 flex -translate-x-1/2 items-center gap-10">
          <nav className="flex gap-10">
            <a href="#welcome" className="font-quincy text-overline text-warm-100 border-b border-warm-100 pb-1">Welcome</a>
            <a href="#stories" className="font-quincy text-overline text-warm-100 border-b border-warm-100 pb-1">Stories</a>
          </nav>
          <div className="h-16 w-16 flex-shrink-0">
            <Logo variant="light" className="h-full w-full" />
          </div>
          <nav className="flex gap-10">
            <a href="#info" className="font-quincy text-overline text-warm-100 border-b border-warm-100 pb-1">Info</a>
            <a href="#contact" className="font-quincy text-overline text-warm-100 border-b border-warm-100 pb-1">Contact</a>
          </nav>
        </div>
      </div>

      {/* Tagline Section */}
      <div className="flex items-center justify-center gap-8 px-16 py-20">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L10 6H15L11 9L13 15L8 12L3 15L5 9L1 6H6L8 1Z" fill="#A68F83" />
        </svg>
        <div className="text-center font-quincy text-h1 text-cool-900">
          <p>Something cute and</p>
          <p>clever goes here</p>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L10 6H15L11 9L13 15L8 12L3 15L5 9L1 6H6L8 1Z" fill="#A68F83" />
        </svg>
      </div>
    </div>
  )
}
