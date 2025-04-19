import Container from '../../../components/container'
import { FormattedDate } from '../../../components/FormattedDate'
import PostBody from '../../../components/post-body'
import { postQuery } from '../../../lib/queries'
import { getClient } from '../../../lib/sanity.server'
import { PostQueryResponse } from '../../../types'

export default async function Page({ params }: { params: { slug: string } }) {
  const { post } = await getClient().fetch<PostQueryResponse>(postQuery, {
    slug: params.slug,
  })

  return (
    <Container className="max-w-4xl">
      <div className="text-center">
        <FormattedDate date={post.date} />
        <h1 className="text-6xl font-bold">{post.title}</h1>
        <h2 className="text-base">{post.subTitle}</h2>
      </div>
      <PostBody content={post.content} />
    </Container>
  )
}
