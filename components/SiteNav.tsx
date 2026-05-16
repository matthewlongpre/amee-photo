'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Logo } from './logo'

export default function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="relative bg-white h-36">
        {/* Mobile header — logo centered, hamburger right */}
        <div className="absolute inset-x-0 top-0 flex items-center px-6 py-5 lg:hidden">
          <div className="flex-1" />
          <Link href="/" className="h-10 w-10">
            <Logo className="h-full w-full" />
          </Link>
          <div className="flex flex-1 justify-end">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="flex flex-col gap-[5px] p-1"
            >
              <span className="block h-px w-6 bg-cool-900" />
              <span className="block h-px w-6 bg-cool-900" />
              <span className="block h-px w-6 bg-cool-900" />
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="absolute left-1/2 top-10 -translate-x-1/2 hidden lg:flex items-center gap-10 z-10">
          <nav className="flex gap-10">
            <Link
              href="/#welcome"
              className="font-quincy text-overline text-[#656665] border-b border-[#b9bebc] pb-px uppercase tracking-[2.4px] whitespace-nowrap"
            >
              Welcome
            </Link>
            <Link
              href="/stories"
              className="font-quincy text-overline text-[#656665] border-b border-[#b9bebc] pb-px uppercase tracking-[2.4px] whitespace-nowrap"
            >
              Stories
            </Link>
          </nav>
          <Link href="/" className="h-16 w-16 shrink-0">
            <Logo className="h-full w-full" />
          </Link>
          <nav className="flex gap-10">
            <div className="group relative">
              <Link
                href="/investment"
                className="font-quincy text-overline text-[#656665] border-b border-[#b9bebc] pb-px uppercase tracking-[2.4px] whitespace-nowrap"
              >
                Info
              </Link>
              <div className="absolute -bottom-3 left-0 h-3 w-full" />
              <div className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 flex flex-col items-center bg-white opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 shadow-sm">
                <Link
                  href="/investment"
                  className="w-full border-b border-warm-100 px-8 py-3 text-center font-quincy text-[14px] font-normal text-cool-900 whitespace-nowrap hover:text-warm-600"
                >
                  Investment
                </Link>
                <Link
                  href="/testimonials"
                  className="w-full px-8 py-3 text-center font-quincy text-[14px] font-normal text-cool-900 whitespace-nowrap hover:text-warm-600"
                >
                  Testimonials
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="font-quincy text-overline text-[#656665] border-b border-[#b9bebc] pb-px uppercase tracking-[2.4px] whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <div className={`fixed inset-0 z-50 flex flex-col bg-cool-900 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex items-center px-6 py-5">
          <div className="flex-1" />
          <Link href="/" className="h-10 w-10" onClick={() => setMobileMenuOpen(false)}>
            <Logo variant="light" className="h-full w-full" />
          </Link>
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
          <Link href="/#welcome" className="font-quincy text-h2 text-warm-100" onClick={() => setMobileMenuOpen(false)}>Welcome</Link>
          <Link href="/stories" className="font-quincy text-h2 text-warm-100" onClick={() => setMobileMenuOpen(false)}>Stories</Link>
          <div className="flex flex-col items-center gap-4">
            <span className="font-quincy text-h2 text-warm-100">Info</span>
            <div className="flex flex-col items-center gap-3">
              <Link href="/investment" className="font-quincy text-overline text-warm-600 border-b border-warm-700 pb-1" onClick={() => setMobileMenuOpen(false)}>Investment</Link>
              <Link href="/testimonials" className="font-quincy text-overline text-warm-600 border-b border-warm-700 pb-1" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
            </div>
          </div>
          <Link href="/contact" className="font-quincy text-h2 text-warm-100" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </>
  )
}
