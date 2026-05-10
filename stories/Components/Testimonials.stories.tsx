import type { Meta, StoryObj } from '@storybook/react'
import { Testimonials } from '@/components/Testimonials'
import { mockTestimonials } from '@/stories/fixtures/testimonials'

const meta = {
  title: 'Components/Testimonials',
  component: Testimonials,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Testimonials>

export default meta
type Story = StoryObj<typeof meta>

const testimonialContent = mockTestimonials.map((t) => ({
  name: t.name,
  quote: t.quote,
  image: t.image,
}))

export const Default: Story = {
  args: {
    testimonials: testimonialContent,
  },
}

export const SingleTestimonial: Story = {
  args: {
    testimonials: testimonialContent.slice(0, 1),
  },
}

export const TwoTestimonials: Story = {
  args: {
    testimonials: testimonialContent.slice(0, 2),
  },
}

export const ManyTestimonials: Story = {
  args: {
    testimonials: testimonialContent,
  },
}

export const Empty: Story = {
  args: {
    testimonials: [],
  },
}

export const Mobile: Story = {
  args: {
    testimonials: testimonialContent,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

export const Tablet: Story = {
  args: {
    testimonials: testimonialContent,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Desktop: Story = {
  args: {
    testimonials: testimonialContent,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}
