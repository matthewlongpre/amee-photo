import Image from 'next/image'
import Link from 'next/link'

import Footer from '../../components/Footer'
import Instagram from '../../components/Instagram'
import { Logo } from '../../components/logo'
import { urlForImage } from '../../lib/sanity'
import { storiesQuery } from '../../lib/queries'
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import { PostProps } from '../../types'
import { decodeHtml } from '../../utils/decodeHtml'

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1L10 6H15L11 9L13 15L8 12L3 15L5 9L1 6H6L8 1Z" fill="#A68F83" />
  </svg>
)

interface StoryThumbnailProps {
  post: PostProps
  imageRight: boolean
}

function StoryThumbnail({ post, imageRight }: StoryThumbnailProps) {
  const hasImage = post.coverImage && (post.coverImage.asset?.url || post.coverImage.asset?._ref)
  const imgSrc = hasImage
    ? post.coverImage!.asset.url ??
      urlForImage(post.coverImage!.asset._ref!).width(800).height(800).url()
    : null

  const imageEl = (
    <div className="relative overflow-hidden shrink-0 w-full aspect-square lg:w-[416px] lg:h-[416px] lg:aspect-auto">
      {/* Border frame — top-left for image-left, top-right for image-right */}
      <div
        className={`absolute border border-cool-900 w-[calc(100%-24px)] h-[calc(100%-24px)] lg:w-[392px] lg:h-[392px] top-0 ${
          imageRight ? 'right-0' : 'left-0'
        }`}
      />
      {/* Image offset 24px down (and 24px right for left-image variant) */}
      <div
        className={`absolute w-[calc(100%-24px)] h-[calc(100%-24px)] lg:w-[392px] lg:h-[392px] top-6 ${
          imageRight ? 'left-0' : 'left-6'
        }`}
      >
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1024px) 100vw, 416px"
          />
        ) : (
          <div className="h-full w-full bg-warm-100" />
        )}
      </div>
    </div>
  )

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  const textEl = (
    <div className="bg-white flex-1 p-8 flex flex-col gap-6 items-start justify-center lg:h-[392px] overflow-hidden">
      <div className="flex flex-col gap-2">
        {formattedDate && (
          <p className="font-quincy text-overline text-warm-700 uppercase">{formattedDate}</p>
        )}
        <h2 className="font-quincy text-h3 text-cool-900">{decodeHtml(post.title)}</h2>
        {post.subTitle && (
          <p className="font-karla text-subheading-md text-warm-700">{decodeHtml(post.subTitle)}</p>
        )}
      </div>
      {post.excerpt && (
        <p className="font-karla text-body-sm text-[#656665] line-clamp-3">{decodeHtml(post.excerpt)}</p>
      )}
    </div>
  )

  return (
    <Link
      href={`/stories/${post.slug}`}
      className="flex flex-col lg:flex-row lg:items-end w-full hover:opacity-90 transition-opacity"
    >
      {imageRight ? (
        <>
          {textEl}
          {imageEl}
        </>
      ) : (
        <>
          {imageEl}
          {textEl}
        </>
      )}
    </Link>
  )
}

export default async function Page() {
  const client = getClient()
  const allPosts = overlayDrafts<PostProps>(
    await client.fetch<PostProps[]>(storiesQuery)
  )

  return (
    <main className="w-full">
      {/* White hero with floating nav */}
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
            <Link
              href="/#info"
              className="font-quincy text-overline text-[#656665] border-b border-[#b9bebc] pb-px uppercase tracking-[2.4px] whitespace-nowrap"
            >
              Info
            </Link>
            <Link
              href="/#contact"
              className="font-quincy text-overline text-[#656665] border-b border-[#b9bebc] pb-px uppercase tracking-[2.4px] whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>
          {/* Mobile: just the logo is visible, centred via the translate */}
        </div>
      </div>

      {/* Main content */}
      <div className="bg-warm-50 px-4 py-20 lg:px-16 flex flex-col items-center gap-16">
        {/* Title + category tabs */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-8">
            <StarIcon />
            <h1 className="font-quincy text-h1 text-cool-900">Stories</h1>
            <StarIcon />
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {/* Active tab */}
            <div className="flex flex-col items-center">
              <span className="font-quincy text-overline text-cool-900 uppercase tracking-[2.4px]">All</span>
              <div className="h-px w-full bg-cool-900 opacity-0 rounded-sm" />
            </div>
            {/* Inactive tabs */}
            {['Wedding', 'Couples', 'Family', 'Portraits'].map((label) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-quincy text-overline text-[#656665] uppercase tracking-[2.4px]">{label}</span>
                <div className="h-px w-full bg-[#b9bebc] rounded-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Story list */}
        {allPosts.length === 0 ? (
          <p className="font-karla text-body-sm text-warm-600">No stories yet.</p>
        ) : (
          <div className="flex flex-col gap-16 items-center w-full max-w-[862px]">
            {allPosts.map((post, index) => (
              <StoryThumbnail
                key={post.slug}
                post={post}
                imageRight={index % 2 === 1}
              />
            ))}
          </div>
        )}
      </div>

      <Instagram />
      <Footer />
    </main>
  )
}
