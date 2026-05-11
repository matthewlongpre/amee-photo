import type { Meta, StoryObj } from '@storybook/react'
import Instagram from '@/components/Instagram'

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

export const Default: Story = {}

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
}
