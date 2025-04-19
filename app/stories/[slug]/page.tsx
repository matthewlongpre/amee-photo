import { postQuery } from '../../../lib/queries'
import { getClient } from '../../../lib/sanity.server'

export default async function Page({ params }: { params: { slug: string } }) {
  const { post } = await getClient().fetch(postQuery, {
    slug: params.slug,
  })

  return <div>{post.title}</div>
}
