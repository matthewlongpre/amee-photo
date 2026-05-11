import type { Meta, StoryObj } from '@storybook/react'
import { FeaturedPosts } from '@/components/FeaturedPosts'
import AboutSection from '@/components/AboutSection'
import LatestStories from '@/components/LatestStories'
import Testimonials from '@/components/Testimonials'
import Instagram from '@/components/Instagram'
import Footer from '@/components/Footer'
import { mockHomePageData, mockHomePageMinimalData } from '@/stories/fixtures/home-page'
import { mockTestimonials } from '@/stories/fixtures/testimonials'

const mockAboutData = {
  heading: "Hi, I'm Amee",
  image: {
    asset: {
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=640&h=640&fit=crop',
    },
  },
  content: [
    {
      _type: 'block',
      _key: 'block-1',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'I realized at a young age that time was fleeting, and since then have sought to document life, so that nothing would be forgotten. There is something so beautiful about being able to transport yourself back to a certain time and place.',
          marks: [],
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ],
}

const mockTestimonialsData = {
  heading: 'Kind Words',
  testimonials: mockTestimonials.map((t, i) => ({
    _id: `testimonial-${i}`,
    title: t.name,
    image: { asset: { url: t.image } },
    content: [
      {
        _type: 'block',
        _key: `block-${i}`,
        children: [{ _type: 'span', _key: 'span-0', text: t.quote, marks: [] }],
        markDefs: [],
        style: 'normal',
      },
    ],
  })),
}

const Homepage = ({
  featuredPosts,
  latestStories,
}: typeof mockHomePageData) => (
  <div>
    <FeaturedPosts posts={featuredPosts} />

    <AboutSection data={mockAboutData} />

    <LatestStories posts={latestStories.slice(0, 3)} />

    <Testimonials data={mockTestimonialsData} />

    <Instagram />

    <Footer />
  </div>
)

const meta = {
  title: 'Pages/Homepage',
  component: Homepage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Homepage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: mockHomePageData,
}

export const MinimalData: Story = {
  args: mockHomePageMinimalData,
}

export const Mobile: Story = {
  args: mockHomePageData,
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
}

export const Tablet: Story = {
  args: mockHomePageData,
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}

export const Desktop: Story = {
  args: mockHomePageData,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
}
