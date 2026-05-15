import Link from 'next/link'

import { Logo } from './logo'

export default function SiteNav() {
  return (
    <div className="relative bg-white h-36">
      <div className="absolute left-1/2 top-10 -translate-x-1/2 flex items-center gap-10 z-10">
        <nav className="hidden lg:flex gap-10">
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
        <nav className="hidden lg:flex gap-10">
          <div className="group relative">
            <Link
              href="/investment"
              className="font-quincy text-overline text-[#656665] border-b border-[#b9bebc] pb-px uppercase tracking-[2.4px] whitespace-nowrap"
            >
              Info
            </Link>
            {/* Invisible bridge keeps hover active as mouse moves into dropdown */}
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
  )
}
