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
    ? urlForImage(post.coverImage!.asset._ref).height(1440).width(2880).url()
    : null

  return (
    <div className="bg-warm-50 min-h-screen">
      <SiteNav />

      {/* Cover image hero */}
      {coverUrl && (
        <div className="relative h-[560px] w-full lg:h-[720px]">
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

      {/* Content card — overlaps bottom of hero on desktop */}
      <div className={`relative z-10 mx-auto max-w-[864px] bg-white px-10 py-10${hasCover ? ' -mt-24 lg:-mt-[216px]' : ''}`}>

        {/* Title — centered */}
        <div className="flex flex-col items-center gap-4 text-center mb-10">
          <p className="font-quincy text-overline uppercase tracking-[2.4px] text-warm-700">
            <FormattedDate date={post.date} />
          </p>
          <h1 className="font-quincy text-[48px] leading-[56px] font-normal text-cool-900">
            {decodeHtml(post.title)}
          </h1>
          {post.subTitle && (
            <p className="font-karla text-[18px] leading-6 font-medium text-warm-700">
              {decodeHtml(post.subTitle)}
            </p>
          )}
        </div>

        <hr className="border-warm-100 mb-10" />

        {/* Body + vendor sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          <PostBody className="flex-1 min-w-0" content={post.content} />
          <Vendors vendors={post.vendors} />
        </div>
      </div>

      {/* Pictime gallery */}
      {post.gallery?.snippet && <Pictime snippet={post.gallery.snippet} />}

      <Footer />
    </div>
  )
}
