import Head from 'next/head'

import Container from '../../components/container'
import HeroPost from '../../components/hero-post'
import MoreStories from '../../components/more-stories'
import { indexQuery, settingsQuery } from '../../lib/queries'
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import { PostProps } from '../../types'

export default async function Index() {
  const preview = false

  const allPosts = overlayDrafts(
    await getClient(preview).fetch(indexQuery)
  ) as PostProps[]
  const blogSettings = await getClient(preview).fetch(settingsQuery)
  const { title = 'Blog.' } = blogSettings || {}
  const [heroPostData, ...morePosts] = allPosts || []

  const heroPost = heroPostData as PostProps

  return (
    <>
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
    </>
  )
}

// export async function getStaticProps({ preview = false }) {
//   if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
//     const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
//     const blogSettings = await getClient(preview).fetch(settingsQuery)

//     return {
//       props: { allPosts, preview, blogSettings },
//       // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
//       revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
//     }
//   }

//   /* when the client isn't set up */
//   return {
//     props: {},
//     revalidate: undefined,
//   }
// }
