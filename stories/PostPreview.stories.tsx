import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'
import Link from 'next/link'
import { PostProps } from '../types/index'

// Mock CoverImage component for Storybook
const CoverImageMock = ({ image, title }: { image: any; title: string }) => {
  return (
    <div className="relative aspect-video bg-gray-200 overflow-hidden rounded">
      <Image
        src={image?.asset?._ref ? 'https://source.unsplash.com/800x600/?photography,nature' : 'https://source.unsplash.com/800x600/?nature'}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
  )
}

// Mock Date component
const DateMock = ({ dateString }: { dateString: string }) => {
  const date = new Date(dateString)
  return <time dateTime={dateString}>{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
}

// Mock PostPreview for Storybook
const PostPreviewMock = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  subTitle,
}: Partial<PostProps>) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImageMock
          title={title || ''}
          image={coverImage}
        />
      </div>

      <div className="mb-4 text-lg">
        <DateMock dateString={date || new Date().toISOString()} />
      </div>

      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/stories/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      {subTitle && <h4 className="mb-3 text-lg text-gray-600">{subTitle}</h4>}

      <p className="mb-4 text-lg leading-relaxed text-gray-700">{excerpt}</p>
    </div>
  )
}

const meta: Meta<typeof PostPreviewMock> = {
  title: 'Components/PostPreview',
  component: PostPreviewMock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Post title',
    },
    subTitle: {
      control: 'text',
      description: 'Post subtitle',
    },
    excerpt: {
      control: 'text',
      description: 'Post excerpt/summary',
    },
    date: {
      control: 'text',
      description: 'Publication date (ISO 8601)',
    },
    slug: {
      control: 'text',
      description: 'Post URL slug',
    },
  },
}

export default meta
type Story = StoryObj<typeof PostPreviewMock>

const mockCoverImage = {
  _type: 'image',
  asset: {
    _ref: 'image-abc123',
    _type: 'reference',
  },
}

export const Default: Story = {
  args: {
    title: 'Mountain Landscape Photography',
    subTitle: 'Capturing the beauty of alpine peaks',
    excerpt: 'A stunning collection of photographs capturing the majesty of mountain landscapes. This story explores the interplay of light, shadow, and color in some of the world\'s most breathtaking scenery.',
    date: '2024-03-15',
    slug: 'mountain-landscape-photography',
    coverImage: mockCoverImage,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
}

export const NoSubtitle: Story = {
  args: {
    title: 'Urban Street Photography',
    excerpt: 'Exploring the candid moments and vibrant energy of city streets through the lens.',
    date: '2024-03-10',
    slug: 'urban-street-photography',
    coverImage: mockCoverImage,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
}

export const LongContent: Story = {
  args: {
    title: 'The Art of Portrait Photography: Techniques and Stories',
    subTitle: 'Creating meaningful connections through portraiture',
    excerpt: 'In this comprehensive exploration of portrait photography, we delve into the techniques, philosophies, and personal stories behind creating compelling human-focused imagery. From environmental portraits to studio work, discover how light, composition, and understanding your subject can transform a simple photograph into a powerful statement about human experience and connection.',
    date: '2024-02-28',
    slug: 'portrait-photography-techniques',
    coverImage: mockCoverImage,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-6xl mx-auto">
      <PostPreviewMock
        title="Mountain Photography"
        subTitle="Alpine perspectives"
        excerpt="Capturing peaks and valleys in stunning detail."
        date="2024-03-15"
        slug="mountain-photography"
        coverImage={mockCoverImage}
      />
      <PostPreviewMock
        title="Urban Exploration"
        subTitle="City stories"
        excerpt="Finding beauty in the geometric lines and vibrant energy of metropolitan areas."
        date="2024-03-10"
        slug="urban-exploration"
        coverImage={mockCoverImage}
      />
      <PostPreviewMock
        title="Portraits in Nature"
        excerpt="Blending human subjects with natural landscapes to create compelling visual narratives."
        date="2024-03-05"
        slug="portraits-nature"
        coverImage={mockCoverImage}
      />
      <PostPreviewMock
        title="Macro Photography"
        subTitle="Seeing the small world"
        excerpt="Exploring the intricate details hidden in plain sight through macro photography techniques."
        date="2024-02-28"
        slug="macro-photography"
        coverImage={mockCoverImage}
      />
    </div>
  ),
}
