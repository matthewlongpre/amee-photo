import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'
import { AuthorProps } from '../types/index'

// Mock component that doesn't require Sanity integration for storybook
const AvatarMock = ({ name, picture }: AuthorProps) => {
  const imageUrl = picture?.asset?._ref
    ? 'https://source.unsplash.com/96x96/?face,photographer'
    : 'https://source.unsplash.com/96x96/?face'

  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={imageUrl}
          className="rounded-full"
          height={96}
          width={96}
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

const meta: Meta<typeof AvatarMock> = {
  title: 'Components/Avatar',
  component: AvatarMock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Author name',
    },
    picture: {
      control: 'object',
      description: 'Picture object from Sanity (mocked in Storybook)',
    },
  },
}

export default meta
type Story = StoryObj<typeof AvatarMock>

export const Default: Story = {
  args: {
    name: 'Amelia Johnson',
    picture: {
      asset: {
        _ref: 'image-abc123',
        _type: 'reference',
      },
    },
  },
}

export const WithoutImage: Story = {
  args: {
    name: 'Photographer',
    picture: null,
  },
}

export const LongName: Story = {
  args: {
    name: 'Amelia Margaret Johnson-Smith',
    picture: {
      asset: {
        _ref: 'image-def456',
        _type: 'reference',
      },
    },
  },
}

export const InPostContext: Story = {
  args: {
    name: 'Amelia Johnson',
    picture: {
      asset: {
        _ref: 'image-abc123',
        _type: 'reference',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto p-8 border border-accent-2 rounded">
        <article>
          <h1 className="text-4xl font-bold mb-4">Post Title Goes Here</h1>
          <div className="border-t border-b border-accent-2 py-4 mb-8">
            <Story />
          </div>
          <p className="text-lg text-gray-600">Post content starts here...</p>
        </article>
      </div>
    ),
  ],
}
