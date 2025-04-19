import { FormattedDate } from '../../../components/FormattedDate'
import { postQuery } from '../../../lib/queries'
import { getClient } from '../../../lib/sanity.server'
import { PostQueryResponse } from '../../../types'

export default async function Page({ params }: { params: { slug: string } }) {
  const { post } = await getClient().fetch<PostQueryResponse>(postQuery, {
    slug: params.slug,
  })

  return (
    <div>
      <FormattedDate date={post.date} />
      <h1>{post.title}</h1>
      <h2>{post.subTitle}</h2>
    </div>
  )
}
