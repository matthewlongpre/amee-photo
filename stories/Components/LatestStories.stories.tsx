import type { Meta, StoryObj } from '@storybook/react'
import { LatestStories } from '@/components/LatestStories'
import { mockStories } from '@/stories/fixtures/posts'

const meta = {
  title: 'Components/LatestStories',
  component: LatestStories,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LatestStories>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    posts: mockStories.slice(0, 3),
  },
}

export const SixPosts: Story = {
  args: {
    posts: mockStories.slice(0, 6),
  },
}

export const NinePosts: Story = {
  args: {
    posts: mockStories,
  },
}

export const SinglePost: Story = {
  args: {
    posts: [mockStories[0]],
  },
}

export const TwoPosts: Story = {
  args: {
    posts: mockStories.slice(0, 2),
  },
}

export const Empty: Story = {
  args: {
    posts: [],
  },
}

export const Mobile: Story = {
  args: {
    posts: mockStories.slice(0, 3),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

export const Tablet: Story = {
  args: {
    posts: mockStories.slice(0, 6),
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Desktop: Story = {
  args: {
    posts: mockStories,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}
