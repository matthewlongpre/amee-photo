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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  if (!posts.length) return null

  const currentPost = posts[currentIndex]

  const goToPrevious = () =>
    setCurrentIndex((currentIndex - 1 + posts.length) % posts.length)
  const goToNext = () =>
    setCurrentIndex((currentIndex + 1) % posts.length)

  return (
    <div className="relative bg-warm-50">
      {/* Decorative border frame — desktop only */}
      <div className="pointer-events-none absolute left-1/2 top-[624px] hidden h-24 w-[896px] -translate-x-1/2 border-l border-r border-t border-warm-50 lg:block" />

      {/* Mobile header — logo centered, hamburger right */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center px-6 py-5 lg:hidden">
        <div className="flex-1" />
        <a href="/" className="h-10 w-10">
          <Logo variant="light" className="h-full w-full" />
        </a>
        <div className="flex flex-1 justify-end">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-[5px] p-1"
          >
            <span className="block h-px w-6 bg-warm-100" />
            <span className="block h-px w-6 bg-warm-100" />
            <span className="block h-px w-6 bg-warm-100" />
          </button>
        </div>
      </div>

      {/* Desktop header navigation — outside overflow-hidden so dropdown isn't clipped */}
      <div className="absolute left-1/2 top-10 z-20 hidden -translate-x-1/2 items-center gap-10 lg:flex">
        <nav className="flex gap-10">
          <a href="#welcome" className="font-quincy text-overline text-warm-100 border-b border-warm-100 pb-1">Welcome</a>
          <a href="#stories" className="font-quincy text-overline text-warm-100 border-b border-warm-100 pb-1">Stories</a>
        </nav>
        <div className="h-16 w-16 flex-shrink-0">
          <Logo variant="light" className="h-full w-full" />
        </div>
        <nav className="flex gap-10">
          {/* Info with dropdown */}
          <div className="group relative">
            <a href="/investment" className="font-quincy text-overline text-warm-100 border-b border-warm-100 pb-1">Info</a>
            {/* Invisible bridge keeps hover active as mouse moves into dropdown */}
            <div className="absolute -bottom-3 left-0 h-3 w-full" />
            <div className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 flex flex-col items-center bg-white opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
              <a href="/investment" className="w-full border-b border-warm-100 px-8 py-3 text-center font-quincy text-[14px] font-normal text-cool-900 whitespace-nowrap hover:text-warm-600">Investment</a>
              <a href="/testimonials" className="w-full px-8 py-3 text-center font-quincy text-[14px] font-normal text-cool-900 whitespace-nowrap hover:text-warm-600">Testimonials</a>
            </div>
          </div>
          <a href="/contact" className="font-quincy text-overline text-warm-100 border-b border-warm-100 pb-1">Contact</a>
        </nav>
      </div>

      {/* Mobile fullscreen overlay */}
      <div className={`fixed inset-0 z-50 flex flex-col bg-cool-900 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex items-center px-6 py-5">
          <div className="flex-1" />
          <a href="/" className="h-10 w-10" onClick={() => setMobileMenuOpen(false)}>
            <Logo variant="light" className="h-full w-full" />
          </a>
          <div className="flex flex-1 justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="relative h-6 w-6"
            >
              <span className="absolute top-1/2 left-0 block h-px w-6 -translate-y-px rotate-45 bg-warm-100" />
              <span className="absolute top-1/2 left-0 block h-px w-6 -translate-y-px -rotate-45 bg-warm-100" />
            </button>
          </div>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          <a href="#welcome" className="font-quincy text-h2 text-warm-100" onClick={() => setMobileMenuOpen(false)}>Welcome</a>
          <a href="#stories" className="font-quincy text-h2 text-warm-100" onClick={() => setMobileMenuOpen(false)}>Stories</a>
          <div className="flex flex-col items-center gap-4">
            <span className="font-quincy text-h2 text-warm-100">Info</span>
            <div className="flex flex-col items-center gap-3">
              <a href="/investment" className="font-quincy text-overline text-warm-600 border-b border-warm-700 pb-1" onClick={() => setMobileMenuOpen(false)}>Investment</a>
              <a href="/testimonials" className="font-quincy text-overline text-warm-600 border-b border-warm-700 pb-1" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            </div>
          </div>
          <a href="/contact" className="font-quincy text-h2 text-warm-100" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
      </div>

      {/* Slider */}
      <div className="relative h-[560px] w-full overflow-hidden lg:h-[800px]">
        {posts.map((post, index) => (
          <FeaturedPost
            key={post.slug}
            post={post}
            priority={index === 0}
            isVisible={index === currentIndex}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(34,34,34,0.5)] via-transparent to-transparent" />

        {/* Desktop nav box — overlaps bottom of image */}
        <div className="absolute left-1/2 top-[640px] hidden w-[864px] -translate-x-1/2 bg-white px-10 py-6 lg:block">
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
      </div>

      {/* Mobile nav box — sits below the image */}
      <div className="bg-white px-6 py-5 lg:hidden">
        <div className="flex items-center justify-between">
          <button
            onClick={goToPrevious}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center hover:opacity-70"
            aria-label="Previous slide"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M25 12L15 22L25 32" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex flex-col items-center gap-1 px-4 text-center">
            <p className="font-quincy text-overline text-warm-600">Featured Work</p>
            <p className="font-quincy text-h3 text-cool-900">{currentPost.title}</p>
            {currentPost.subTitle && (
              <p className="font-karla text-subheading-sm text-warm-600">{currentPost.subTitle}</p>
            )}
          </div>
          <button
            onClick={goToNext}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center hover:opacity-70"
            aria-label="Next slide"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M15 12L25 22L15 32" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tagline Section */}
      <div className="flex items-center justify-center gap-6 px-8 py-12 lg:gap-8 lg:px-16 lg:py-20">
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
