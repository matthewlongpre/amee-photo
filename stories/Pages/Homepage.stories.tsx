import type { Meta, StoryObj } from '@storybook/react'
import { FeaturedPosts } from '@/components/FeaturedPosts'
import { AboutSection } from '@/components/AboutSection'
import { LatestStories } from '@/components/LatestStories'
import { Testimonials } from '@/components/Testimonials'
import { Instagram } from '@/components/Instagram'
import { Footer } from '@/components/Footer'
import { SectionTitle } from '@/components/SectionTitle'
import { SectionContainer } from '@/components/SectionContainer'
import { mockHomePageData, mockHomePageMinimalData } from '@/stories/fixtures/home-page'

// This is a page-level story that composes multiple components
const Homepage = ({
  featuredPosts,
  latestStories,
  testimonials,
  instagramPosts,
}: typeof mockHomePageData) => (
  <div>
    <FeaturedPosts posts={featuredPosts} />

    <SectionContainer bg="light" padding="md">
      <SectionTitle>Something cute and clever goes here</SectionTitle>
    </SectionContainer>

    <AboutSection
      aboutImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
      title="Hi, I'm Amee"
      description="I realized at a young age that time was fleeting, and since then have sought to document life, so that nothing would be forgotten. There is something so beautiful about being able to transport yourself back to a certain time and place and remember what it was like to be there… how you felt at that exact moment in time. I have been shooting professionally since 2012, and have been incredibly lucky to work with so many awesome clients! I live and work out of Victoria, BC, but am always open to travel!"
      ctaText="Learn More"
      ctaLink="/about"
    />

    <SectionContainer bg="light" padding="lg">
      <SectionTitle>Latest Stories</SectionTitle>
      <div className="mt-12">
        <LatestStories posts={latestStories} />
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-cool-900 text-white px-8 py-3 rounded hover:bg-warm-700 transition">
          View All Stories
        </button>
      </div>
    </SectionContainer>

    <SectionContainer bg="warm-50" padding="lg">
      <SectionTitle>Kind Words</SectionTitle>
      <div className="mt-12">
        <Testimonials testimonials={testimonials.map((t) => ({ name: t.name, quote: t.quote, image: t.image }))} />
      </div>
    </SectionContainer>

    <SectionContainer bg="light" padding="lg">
      <SectionTitle>Follow Me</SectionTitle>
      <div className="mt-12">
        <Instagram instagramHandle="@amee.photo" instagramPosts={instagramPosts} />
      </div>
    </SectionContainer>

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

export const WithFullData: Story = {
  args: mockHomePageData,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}

export const MinimalData: Story = {
  args: mockHomePageMinimalData,
}

export const Mobile: Story = {
  args: mockHomePageData,
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

export const Tablet: Story = {
  args: mockHomePageData,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Desktop: Story = {
  args: mockHomePageData,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}
