import type { Meta, StoryObj } from '@storybook/react'
import { Instagram } from '@/components/Instagram'
import { mockHomePageData } from '@/stories/fixtures/home-page'

const meta = {
  title: 'Components/Instagram',
  component: Instagram,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Instagram>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    instagramHandle: '@amee.photo',
    instagramPosts: mockHomePageData.instagramPosts,
  },
}

export const FewPosts: Story = {
  args: {
    instagramHandle: '@amee.photo',
    instagramPosts: mockHomePageData.instagramPosts.slice(0, 3),
  },
}

export const SixPosts: Story = {
  args: {
    instagramHandle: '@amee.photo',
    instagramPosts: mockHomePageData.instagramPosts,
  },
}

export const Empty: Story = {
  args: {
    instagramHandle: '@amee.photo',
    instagramPosts: [],
  },
}

export const Mobile: Story = {
  args: {
    instagramHandle: '@amee.photo',
    instagramPosts: mockHomePageData.instagramPosts,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

export const Tablet: Story = {
  args: {
    instagramHandle: '@amee.photo',
    instagramPosts: mockHomePageData.instagramPosts,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const Desktop: Story = {
  args: {
    instagramHandle: '@amee.photo',
    instagramPosts: mockHomePageData.instagramPosts,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}
