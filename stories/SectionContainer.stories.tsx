import type { Meta, StoryObj } from '@storybook/react'
import { SectionContainer } from '@/components/SectionContainer'

const meta = {
  title: 'Components/SectionContainer',
  component: SectionContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionContainer>

export default meta
type Story = StoryObj<typeof meta>

export const LightBackground: Story = {
  args: {
    bg: 'light',
    padding: 'lg',
    children: (
      <div className="space-y-4">
        <h3 className="text-h3 text-cool-900">Section with Light Background</h3>
        <p className="text-body-md text-cool-900">
          This is a section container with a light background. It centers content and provides
          consistent padding across different screen sizes.
        </p>
      </div>
    ),
  },
}

export const DarkBackground: Story = {
  args: {
    bg: 'dark',
    padding: 'lg',
    children: (
      <div className="space-y-4">
        <h3 className="text-h3 text-white">Section with Dark Background</h3>
        <p className="text-body-md text-warm-100">
          This is a section container with a dark background. Perfect for making content stand
          out and creating visual hierarchy.
        </p>
      </div>
    ),
  },
}

export const WarmBackground: Story = {
  args: {
    bg: 'warm',
    padding: 'lg',
    children: (
      <div className="space-y-4">
        <h3 className="text-h3 text-cool-900">Section with Warm Background</h3>
        <p className="text-body-md text-cool-900">
          This is a section container with a warm background. It provides a softer, more
          inviting feel while maintaining good contrast.
        </p>
      </div>
    ),
  },
}

export const SmallPadding: Story = {
  args: {
    bg: 'light',
    padding: 'sm',
    children: (
      <div className="space-y-4">
        <h3 className="text-h3">Small Padding</h3>
        <p className="text-body-md">Compact section with minimal vertical space.</p>
      </div>
    ),
  },
}

export const LargePadding: Story = {
  args: {
    bg: 'light',
    padding: 'lg',
    children: (
      <div className="space-y-4">
        <h3 className="text-h3">Large Padding</h3>
        <p className="text-body-md">Spacious section with generous vertical breathing room.</p>
      </div>
    ),
  },
}

export const FullWidth: Story = {
  args: {
    bg: 'warm',
    padding: 'md',
    maxWidth: 'full',
    children: (
      <div className="space-y-4">
        <h3 className="text-h3">Full Width Container</h3>
        <p className="text-body-md">This container stretches to full width of the viewport.</p>
      </div>
    ),
  },
}

export const Mobile: Story = {
  args: {
    bg: 'light',
    padding: 'md',
    children: (
      <div className="space-y-4">
        <h3 className="text-h3">Responsive Container</h3>
        <p className="text-body-md">
          Padding and width adjust automatically for mobile devices.
        </p>
      </div>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}
