import Image from 'next/image'
import { notFound } from 'next/navigation'

import Footer from '../../../components/Footer'
import { FormattedDate } from '../../../components/FormattedDate'
import Pictime from '../../../components/pictime'
import PostBody from '../../../components/post-body'
import SiteNav from '../../../components/SiteNav'
import Vendors from '../../../components/Vendors'
import { urlForImage } from '../../../lib/sanity'
import { postQuery } from '../../../lib/queries'
import { getClient } from '../../../lib/sanity.server'
import { PostQueryResponse } from '../../../types'

function decodeHtml(html: string): string {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#038;/g, '&')
    .replace(/&#8217;/g, '’')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params

  if (!params?.slug) {
    notFound()
  }

  const { post } = await getClient().fetch<PostQueryResponse>(postQuery, {
    slug: params.slug,
  })

  if (!post) {
    notFound()
  }

  const hasCover = !!post.coverImage?.asset?._ref
  const coverUrl = hasCover
    ? urlForImage(post.coverImage!.asset._ref).height(1600).width(2400).url()
    : null

  return (
    <div className="bg-warm-50 min-h-screen">
      <SiteNav />

      {/* Cover image hero */}
      {coverUrl && (
        <div className="relative h-[560px] w-full lg:h-[800px]">
          <Image
            src={coverUrl}
            alt={`Cover image for ${post.title}`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(34,34,34,0.3)] via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-10">
          <p className="font-quincy text-overline uppercase tracking-[2.4px] text-warm-600 mb-3">
            <FormattedDate date={post.date} />
          </p>
          <h1 className="font-quincy text-h1 text-cool-900 mb-4">
            {decodeHtml(post.title)}
          </h1>
          {post.subTitle && (
            <p className="font-karla text-h3 text-warm-600">{decodeHtml(post.subTitle)}</p>
          )}
          <hr className="mt-8 border-warm-100" />
        </div>

        {/* Body */}
        <PostBody content={post.content} />

        {/* Vendors */}
        <Vendors vendors={post.vendors} />
      </div>

      {/* Gallery */}
      {post.gallery?.snippet && <Pictime snippet={post.gallery.snippet} />}

      <Footer />
    </div>
  )
}
