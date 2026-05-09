import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from '../components/logo'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Logo color variant',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    variant: 'dark',
    className: 'w-24 h-24',
  },
}

export const Light: Story = {
  args: {
    variant: 'light',
    className: 'w-24 h-24',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Small: Story = {
  args: {
    variant: 'dark',
    className: 'w-12 h-12',
  },
}

export const Large: Story = {
  args: {
    variant: 'dark',
    className: 'w-40 h-40',
  },
}

export const Responsive: Story = {
  args: {
    variant: 'dark',
    className: 'w-12 md:w-24 lg:w-40',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
