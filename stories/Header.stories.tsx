import type { Meta, StoryObj } from '@storybook/react'
import Header from '../components/header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Site title (currently unused in component)',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'amee',
  },
}

export const OnDarkBackground: Story = {
  args: {
    title: 'amee',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8">
        <Story />
      </div>
    ),
  ],
}

export const InContext: Story = {
  args: {
    title: 'amee',
  },
  decorators: [
    (Story) => (
      <header className="border-b border-accent-2 py-4 px-8">
        <Story />
      </header>
    ),
  ],
}
