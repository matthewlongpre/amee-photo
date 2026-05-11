import Image from 'next/image'
import Link from 'next/link'

import Footer from '../../components/Footer'
import { Logo } from '../../components/logo'
import { urlForImage } from '../../lib/sanity'
import { storiesQuery } from '../../lib/queries'
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import { PostProps } from '../../types'

const frameColors = ['#A68F83', '#2D2E2D', '#2D2E2D']

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1L10 6H15L11 9L13 15L8 12L3 15L5 9L1 6H6L8 1Z" fill="#A68F83" />
  </svg>
)

export default async function Page() {
  const client = getClient()
  const allPosts = overlayDrafts<PostProps>(
    await client.fetch<PostProps[]>(storiesQuery)
  )

  return (
    <main className="w-full">
      {/* Site header */}
      <div className="bg-warm-50 px-6 py-5 flex items-center justify-between lg:justify-center lg:gap-16">
        <nav className="hidden lg:flex gap-10">
          <Link href="/#welcome" className="font-quincy text-overline text-cool-900 border-b border-cool-900 pb-1">Welcome</Link>
          <Link href="/stories" className="font-quincy text-overline text-cool-900 border-b border-cool-900 pb-1">Stories</Link>
        </nav>
        <Link href="/" className="h-10 w-10 flex-shrink-0">
          <Logo className="h-full w-full" />
        </Link>
        <nav className="hidden lg:flex gap-10">
          <Link href="/#info" className="font-quincy text-overline text-cool-900 border-b border-cool-900 pb-1">Info</Link>
          <Link href="/#contact" className="font-quincy text-overline text-cool-900 border-b border-cool-900 pb-1">Contact</Link>
        </nav>
        {/* Mobile: placeholder to balance logo */}
        <div className="w-10 lg:hidden" />
      </div>

      {/* Page title */}
      <div className="bg-warm-50 px-4 pb-16 flex flex-col items-center gap-4">
        <div className="flex items-center gap-8">
          <StarIcon />
          <h1 className="font-quincy text-h2 text-cool-900">Stories</h1>
          <StarIcon />
        </div>
        <div className="h-px w-full max-w-5xl bg-warm-600 opacity-30" />
      </div>

      {/* Posts grid */}
      <div className="bg-white px-4 py-12 sm:px-8 lg:px-16 lg:py-[72px]">
        {allPosts.length === 0 ? (
          <p className="font-karla text-body-md text-warm-600 text-center">No stories yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {allPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/stories/${post.slug}`}
                className="flex flex-col items-center gap-6"
              >
                {/* Offset frame image */}
                <div className="relative w-full overflow-clip" style={{ paddingBottom: 'calc(100% + 24px)' }}>
                  <div
                    className="absolute left-0 top-0 h-[calc(100%-24px)] w-[calc(100%-24px)]"
                    style={{ border: `1px solid ${frameColors[index % frameColors.length]}`, opacity: 0.92 }}
                  />
                  <div className="absolute left-6 top-6 h-[calc(100%-24px)] w-[calc(100%-24px)]">
                    {post.coverImage && (post.coverImage.asset.url || post.coverImage.asset._ref) ? (
                      <Image
                        src={
                          post.coverImage.asset.url ??
                          urlForImage(post.coverImage.asset._ref!).width(600).height(600).url()
                        }
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="h-full w-full bg-warm-100" />
                    )}
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col items-center gap-2 text-center">
                  {post.date && (
                    <p className="font-quincy text-overline text-warm-700">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  )}
                  <h2 className="font-quincy text-h4 text-cool-900">{post.title}</h2>
                  {post.subTitle && (
                    <p className="font-karla text-subheading-sm text-warm-700">{post.subTitle}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
