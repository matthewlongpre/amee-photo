import Footer from '../../components/Footer'
import SiteNav from '../../components/SiteNav'

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1L10 6H15L11 9L13 15L8 12L3 15L5 9L1 6H6L8 1Z" fill="#A68F83" />
  </svg>
)

export default function ContactPage() {
  return (
    <main className="w-full">
      <SiteNav />

      <div className="bg-warm-50 px-4 py-20 lg:px-16">
        {/* Title */}
        <div className="mb-16 flex items-center justify-center gap-8">
          <StarIcon />
          <h1 className="font-quincy text-h1 text-cool-900">Contact</h1>
          <StarIcon />
        </div>

        {/* Content */}
        <div className="mx-auto flex max-w-xl flex-col items-center gap-10 text-center">
          <h2 className="font-quincy text-h2 text-cool-900">hi, friends!</h2>

          <p className="font-karla text-body-md text-cool-900">
            2025 bookings are now closed. I&rsquo;ll be on maternity leave for most of 2026,
            with the possibility of a few fall sessions. Please check back in summer 2026
            for updates on availability, including 2027 weddings.
          </p>

          <div className="h-px w-16 bg-warm-600" />

          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:info@amee.photo"
              className="font-quincy text-h3 text-cool-900 hover:text-warm-600 transition-colors"
            >
              info@amee.photo
            </a>
            <div className="flex items-center gap-6 font-karla text-body-sm text-warm-600">
              <a
                href="https://instagram.com/amee.photo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-700 transition-colors"
              >
                @amee.photo
              </a>
              <span>·</span>
              <a
                href="https://facebook.com/ameee.photo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-700 transition-colors"
              >
                facebook.com/ameee.photo
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
