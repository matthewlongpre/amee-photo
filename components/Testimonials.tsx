'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

import { urlForImage } from '../lib/sanity'

interface Testimonial {
  _id: string
  title: string
  image?: { asset: { _ref: string } }
  content?: any[]
}

interface TestimonialsProps {
  data?: {
    heading?: string
    testimonials?: Testimonial[]
  }
}

export default function Testimonials({ data }: TestimonialsProps) {
  const testimonials = data?.testimonials ?? []
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

  const current = testimonials[currentIndex]

  if (!current) return null

  const imageSrc = current.image
    ? urlForImage(current.image.asset._ref).width(640).height(640).url()
    : null

  return (
    <div className="overflow-hidden bg-warm-50 py-12 lg:py-20">
      {/* Title */}
      <div className="mb-12 flex items-center justify-center gap-8 lg:mb-16">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L10 6H15L11 9L13 15L8 12L3 15L5 9L1 6H6L8 1Z" fill="#A68F83" />
        </svg>
        <h2 className="font-quincy text-h2 text-cool-900 whitespace-nowrap">
          {data?.heading ?? 'Kind Words'}
        </h2>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L10 6H15L11 9L13 15L8 12L3 15L5 9L1 6H6L8 1Z" fill="#A68F83" />
        </svg>
      </div>

      {/* Desktop: overlapping layout */}
      <div className="hidden lg:block">
        <div className="relative mx-auto h-[768px] max-w-[1216px]">
          {/* Decorative border rectangle */}
          <div className="absolute left-[63px] top-16 h-[640px] w-[1090px] border border-cool-900 opacity-[0.92]" />
          {/* Image */}
          <div className="absolute left-0 top-0 h-[640px] w-[640px] overflow-hidden">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={current.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            )}
          </div>
          {/* Content box */}
          <div className="absolute right-0 top-[128px] flex h-[640px] w-[640px] flex-col items-start justify-center gap-8 bg-warm-600 p-16">
            <h3 className="font-quincy text-h3 text-warm-50">{current.title}</h3>

            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M8 16C4.14 16 2 18.14 2 22s2.14 6 6 6 6-2.14 6-6-2.14-6-6-6zm16 0c-3.86 0-6 2.14-6 6s2.14 6 6 6 6-2.14 6-6-2.14-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-16 0c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                fill="white"
              />
            </svg>

            {current.content && (
              <div className="font-karla text-body-md text-white">
                <PortableText value={current.content} />
              </div>
            )}

            <div className="flex gap-6">
              <button
                onClick={goToPrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 hover:opacity-70"
                aria-label="Previous testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                  <path d="M25 12L15 22L25 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 hover:opacity-70"
                aria-label="Next testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                  <path d="M15 12L25 22L15 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/tablet: stacked layout */}
      <div className="lg:hidden px-4 sm:px-8">
        <div className="flex flex-col">
          <div className="relative h-64 w-full overflow-hidden sm:h-80">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={current.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            )}
          </div>
          <div className="flex flex-col gap-6 bg-warm-600 px-8 py-10">
            <h3 className="font-quincy text-h3 text-warm-50">{current.title}</h3>

            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M8 16C4.14 16 2 18.14 2 22s2.14 6 6 6 6-2.14 6-6-2.14-6-6-6zm16 0c-3.86 0-6 2.14-6 6s2.14 6 6 6 6-2.14 6-6-2.14-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-16 0c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                fill="white"
              />
            </svg>

            {current.content && (
              <div className="font-karla text-body-md text-white">
                <PortableText value={current.content} />
              </div>
            )}

            <div className="flex gap-6">
              <button
                onClick={goToPrevious}
                className="flex h-10 w-10 items-center justify-center hover:opacity-70"
                aria-label="Previous testimonial"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M25 12L15 22L25 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="flex h-10 w-10 items-center justify-center hover:opacity-70"
                aria-label="Next testimonial"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M15 12L25 22L15 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center lg:mt-16">
        <button className="bg-cool-900 px-6 py-4 font-karla text-button text-white uppercase hover:opacity-90">
          See More Testimonials
        </button>
      </div>
    </div>
  )
}
