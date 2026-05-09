import { notFound } from 'next/navigation'

import Container from '../../../components/container'
import { FormattedDate } from '../../../components/FormattedDate'
import Pictime from '../../../components/pictime'
import PostBody from '../../../components/post-body'
import Vendors from '../../../components/Vendors'
import { postQuery } from '../../../lib/queries'
import { getClient } from '../../../lib/sanity.server'
import { PostQueryResponse } from '../../../types'

export default async function Page({ params }: { params: { slug: string } }) {
  if (!params?.slug) {
    notFound()
  }

  const { post } = await getClient().fetch<PostQueryResponse>(postQuery, {
    slug: params.slug,
  })

  if (!post) {
    notFound()
  }

  return (
    <Container className="max-w-4xl">
      <div className="text-center">
        <FormattedDate date={post.date} />
        <h1 className="text-6xl font-bold">{post.title}</h1>
        <h2 className="text-base">{post.subTitle}</h2>
      </div>

      <div className="flex flex-col gap-8 p-8 lg:flex-row">
        <PostBody className="lg:w-1/2" content={post.content} />
        <Vendors className="bg-gray-200 p-6 lg:w-1/2" vendors={post.vendors} />
      </div>

      {post.gallery?.snippet && <Pictime snippet={post.gallery.snippet} />}
    </Container>
  )
}
