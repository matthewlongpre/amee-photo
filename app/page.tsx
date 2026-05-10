import { FeaturedPosts } from '../components/FeaturedPosts'
import AboutSection from '../components/AboutSection'
import LatestStories from '../components/LatestStories'
import Testimonials from '../components/Testimonials'
import Instagram from '../components/Instagram'
import Footer from '../components/Footer'
import { featuredPostsQuery, storiesQuery, homePageQuery } from '../lib/queries'
import { getClient } from '../lib/sanity.server'
import { PostProps } from '../types'

async function getData() {
  const client = getClient()
  const [featuredPosts, recentPosts, homePage] = await Promise.all([
    client.fetch(featuredPostsQuery) as Promise<PostProps[]>,
    client.fetch(storiesQuery) as Promise<PostProps[]>,
    client.fetch(homePageQuery),
  ])
  return { featuredPosts, recentPosts, homePage }
}

export default async function Home() {
  const { featuredPosts, recentPosts, homePage } = await getData()

  const aboutSection = homePage?.sections?.find((s) => s._type === 'aboutSection')
  const testimonialsList = homePage?.sections?.find((s) => s._type === 'testimonialsList')

  const heroPosts = featuredPosts.length ? featuredPosts : recentPosts.slice(0, 3)

  return (
    <main className="w-full">
      <FeaturedPosts posts={heroPosts} />
      <AboutSection data={aboutSection} />
      <LatestStories posts={recentPosts.slice(0, 3)} />
      <Testimonials data={testimonialsList} />
      <Instagram />
      <Footer />
    </main>
  )
}
