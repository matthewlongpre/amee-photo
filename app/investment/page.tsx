import Link from 'next/link'

import Footer from '../../components/Footer'
import SiteNav from '../../components/SiteNav'

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1L10 6H15L11 9L13 15L8 12L3 15L5 9L1 6H6L8 1Z" fill="#A68F83" />
  </svg>
)

const packages = [
  {
    name: 'Wedding',
    price: '$2,500',
    priceNote: 'starting at (4 hours)',
    includes: [
      '4–8 hours of coverage',
      'Complimentary engagement session',
      'Pre-wedding consultation',
      'Professional image processing',
      'Online gallery',
      'Print release',
    ],
  },
  {
    name: 'Elopements & Intimate Weddings',
    price: '$1,200+',
    priceNote: 'starting at',
    includes: [
      'Minimum 2 hours coverage',
      'Pre-wedding consultation',
      'Professional image processing',
      'Online gallery',
      'Print release',
    ],
  },
  {
    name: 'Portrait Sessions',
    price: '$400',
    priceNote: 'starting at (30 minutes)',
    includes: [
      '30-minute mini or 1-hour session',
      'Professional image processing',
      'Online gallery',
      'Print release',
    ],
  },
]

export default function InvestmentPage() {
  return (
    <main className="w-full">
      <SiteNav />

      <div className="bg-warm-50 px-4 py-20 lg:px-16">
        {/* Title */}
        <div className="mb-16 flex items-center justify-center gap-8">
          <StarIcon />
          <h1 className="font-quincy text-h1 text-cool-900">Investment</h1>
          <StarIcon />
        </div>

        {/* Packages */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="flex flex-col gap-6 border border-warm-100 bg-white p-10"
            >
              <div className="flex flex-col gap-2">
                <p className="font-quincy text-overline uppercase tracking-[2.4px] text-warm-700">
                  {pkg.name}
                </p>
                <p className="font-quincy text-h2 text-cool-900">{pkg.price}</p>
                <p className="font-karla text-body-sm text-warm-600">{pkg.priceNote}</p>
              </div>

              <div className="h-px bg-warm-100" />

              <ul className="flex flex-col gap-3">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-warm-600" />
                    <span className="font-karla text-body-sm text-cool-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="bg-cool-900 px-8 py-4 font-karla text-button uppercase tracking-widest text-white hover:opacity-90"
          >
            Book Now
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
