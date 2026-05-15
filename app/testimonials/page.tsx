import Footer from '../../components/Footer'
import SiteNav from '../../components/SiteNav'
import Testimonials from '../../components/Testimonials'
import { testimonialsQuery } from '../../lib/queries'
import { getClient } from '../../lib/sanity.server'

async function getData() {
  const client = getClient()
  const testimonials = await client.fetch(testimonialsQuery)
  return { testimonials }
}

export default async function TestimonialsPage() {
  const { testimonials } = await getData()

  return (
    <main className="w-full">
      <SiteNav />
      <Testimonials data={{ testimonials }} hideCta />
      <Footer />
    </main>
  )
}
