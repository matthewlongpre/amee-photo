import Container from '../components/container'
import { FeaturedPosts } from '../components/FeaturedPosts'
import { homeQuery } from '../lib/queries'
import { getClient } from '../lib/sanity.server'
import { PostProps } from '../types'

async function getFeaturedPosts() {
  const client = getClient()
  return client.fetch<PostProps[]>(homeQuery)
}

export default async function Home() {
  const featuredPosts = await getFeaturedPosts()

  return (
    <>
      <section className="h-screen">
        <Container>
          {featuredPosts.length && <FeaturedPosts posts={featuredPosts} />}
        </Container>
      </section>

      <section>
        <Container>
          <h2>Recent Posts</h2>
        </Container>
      </section>
    </>
  )
}
