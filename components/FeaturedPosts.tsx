'use client'

import { useEffect, useState } from 'react'

import { PostProps } from '../types'
import { merge } from '../utils/merge'
import { FeaturedPost } from './FeaturedPost'

interface FeaturedPostsProps {
  posts: PostProps[]
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentPost = posts[currentIndex]

  const hasScrolled = useHasScrolled()

  return (
    <>
      {posts.map((post, index) => (
        <FeaturedPost
          key={post.slug}
          post={post}
          priority={index === 0}
          isVisible={index === currentIndex}
        />
      ))}

      <div
        className={merge(
          'absolute left-0 right-0 mx-auto w-full max-w-4xl bg-white px-10 py-6 text-center',
          { 'bottom-6': !hasScrolled, '-bottom-16': hasScrolled }
        )}
      >
        <div className="flex flex-1 justify-between">
          <button
            onClick={() =>
              setCurrentIndex((currentIndex - 1 + posts.length) % posts.length)
            }
          >
            Previous
          </button>

          <div className="flex flex-col">
            <div>Featured Work</div>
            <h3>{currentPost.title}</h3>
            <h4>{currentPost.subTitle}</h4>
          </div>

          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % posts.length)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

function getHasScrolled() {
  if (typeof window === 'undefined') return false
  return window.scrollY > 24
}

function useHasScrolled() {
  const [hasScrolled, setHasScrolled] = useState(getHasScrolled())

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(getHasScrolled())
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return hasScrolled
}
