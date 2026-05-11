import type { Meta, StoryObj } from '@storybook/react'
import Testimonials from '@/components/Testimonials'
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

const toTestimonialData = (items: typeof mockTestimonials) => ({
  heading: 'Kind Words',
  testimonials: items.map((t, i) => ({
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
})

export const Default: Story = {
  args: {
    data: toTestimonialData(mockTestimonials),
  },
}

export const SingleTestimonial: Story = {
  args: {
    data: toTestimonialData(mockTestimonials.slice(0, 1)),
  },
}

export const TwoTestimonials: Story = {
  args: {
    data: toTestimonialData(mockTestimonials.slice(0, 2)),
  },
}

export const ManyTestimonials: Story = {
  args: {
    data: toTestimonialData(mockTestimonials),
  },
}

export const Empty: Story = {
  args: {
    data: { testimonials: [] },
  },
}

export const Mobile: Story = {
  args: {
    data: toTestimonialData(mockTestimonials),
  },
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
}

export const Tablet: Story = {
  args: {
    data: toTestimonialData(mockTestimonials),
  },
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}

export const Desktop: Story = {
  args: {
    data: toTestimonialData(mockTestimonials),
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
}
