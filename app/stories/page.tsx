import Container from '../../components/container'
import HeroPost from '../../components/hero-post'
import MoreStories from '../../components/more-stories'
import { indexQuery } from '../../lib/queries'
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import { PostProps } from '../../types'

export default async function Index() {
  const client = getClient()

  const allPosts = overlayDrafts<PostProps>(
    await client.fetch<PostProps[]>(indexQuery)
  )

  const [heroPost, ...morePosts] = allPosts || []

  return (
    <Container>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt ?? ''}
        />
      )}
      {morePosts.length && <MoreStories posts={morePosts} />}
    </Container>
  )
}
