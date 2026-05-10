'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Logo } from './logo'

const sliderData = [
  {
    id: 1,
    image: 'http://localhost:3845/assets/20b3b09e53b43c1b81b38055300abe7cb67d87df.png',
    title: 'Emily & Indigo',
    subtitle: 'Intimate Backyard Wedding',
  },
  {
    id: 2,
    image: 'http://localhost:3845/assets/4dd89717d10f03f4644e57c29f5c573c44b8da54.png',
    title: 'Saige & Dylan',
    subtitle: 'Downtown Victoria Engagement',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1))
  }

  const current = sliderData[currentSlide]

  return (
    <div className="relative bg-warm-50">
      {/* Slider */}
      <div className="relative h-[800px] w-full overflow-hidden">
        <img
          src={current.image}
          alt={current.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(34,34,34,0.5)] via-transparent to-transparent" />

        {/* Navigation Box */}
        <div className="absolute left-1/2 top-[624px] w-[864px] -translate-x-1/2 transform bg-white px-10 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={goToPrevious}
              className="flex h-10 w-10 items-center justify-center hover:opacity-70"
              aria-label="Previous slide"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M25 12L15 22L25 32"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-2">
              <p className="font-quincy text-overline text-warm-600">
                Featured Work
              </p>
              <p className="font-quincy text-h3 text-cool-900">{current.title}</p>
              <p className="font-karla text-subheading-sm text-warm-600">
                {current.subtitle}
              </p>
            </div>

            <button
              onClick={goToNext}
              className="flex h-10 w-10 items-center justify-center hover:opacity-70"
              aria-label="Next slide"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M15 12L25 22L15 32"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Header Navigation */}
        <div className="absolute left-1/2 top-10 flex -translate-x-1/2 items-center gap-10">
          <nav className="flex gap-10">
            <a
              href="#welcome"
              className="font-quincy text-overline text-warm-100 border-b border-warm-100 pb-1"
            >
              Welcome
            </a>
            <a
              href="#stories"
              className="font-quincy text-overline text-warm-100 border-b border-warm-100 pb-1"
            >
              Stories
            </a>
          </nav>

          <div className="h-16 w-16 flex-shrink-0">
            <Logo variant="light" className="h-full w-full" />
          </div>

          <nav className="flex gap-10">
            <a
              href="#info"
              className="font-quincy text-overline text-warm-100 border-b border-warm-100 pb-1"
            >
              Info
            </a>
            <a
              href="#contact"
              className="font-quincy text-overline text-warm-100 border-b border-warm-100 pb-1"
            >
              Contact
            </a>
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
