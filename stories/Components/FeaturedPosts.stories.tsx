import type { Meta, StoryObj } from '@storybook/react'
import { FeaturedPosts } from '@/components/FeaturedPosts'
import { mockFeaturedPosts } from '@/stories/fixtures/posts'

const meta = {
  title: 'Components/FeaturedPosts',
  component: FeaturedPosts,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeaturedPosts>

export default meta
type Story = StoryObj<typeof meta>

export const WithData: Story = {
  args: {
    posts: mockFeaturedPosts,
  },
}

export const SinglePost: Story = {
  args: {
    posts: [mockFeaturedPosts[0]],
  },
}

export const TwoPosts: Story = {
  args: {
    posts: mockFeaturedPosts.slice(0, 2),
  },
}

export const Empty: Story = {
  args: {
    posts: [],
  },
}

export const Mobile: Story = {
  args: {
    posts: mockFeaturedPosts,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

export const Tablet: Story = {
  args: {
    posts: mockFeaturedPosts,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}
