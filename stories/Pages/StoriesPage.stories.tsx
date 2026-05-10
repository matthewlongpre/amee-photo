import type { Meta, StoryObj } from '@storybook/react'
import { SectionContainer } from '@/components/SectionContainer'
import { SectionTitle } from '@/components/SectionTitle'
import { SectionGrid } from '@/components/SectionGrid'
import Footer from '@/components/Footer'
import { mockStories } from '@/stories/fixtures/posts'

// Mock components for stories page
const StoryCard = ({ post }: any) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
    <div className="aspect-video bg-gray-200 mb-4">
      <img
        src={post.coverImage?.asset?.url}
        alt={post.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-h4 text-cool-900 mb-2">{post.title}</h3>
      <p className="text-subheading-sm text-warm-600 mb-3">{post.subTitle}</p>
      <p className="text-body-sm text-cool-900 mb-4">{post.excerpt}</p>
      <a href={`/stories/${post.slug.current}`} className="text-warm-700 font-medium hover:underline">
        Read Story →
      </a>
    </div>
  </div>
)

const StoriesPage = ({ posts }: { posts: any[] }) => (
  <div>
    {/* Hero Section */}
    <SectionContainer bg="light" padding="lg">
      <SectionTitle>Stories</SectionTitle>
    </SectionContainer>

    {/* Featured Story (first item) */}
    {posts.length > 0 && (
      <SectionContainer bg="warm-50" padding="lg">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-video bg-gray-300 mb-6">
            <img
              src={posts[0].coverImage?.asset?.url}
              alt={posts[0].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-h2 text-cool-900 mb-4">{posts[0].title}</h2>
            <p className="text-subheading-sm text-warm-600 mb-4">{posts[0].subTitle}</p>
            <p className="text-body-md text-cool-900 mb-6">{posts[0].excerpt}</p>
            <a
              href={`/stories/${posts[0].slug.current}`}
              className="inline-block bg-cool-900 text-white px-8 py-3 rounded hover:bg-warm-700 transition"
            >
              Read Full Story
            </a>
          </div>
        </div>
      </SectionContainer>
    )}

    {/* Grid of Other Stories */}
    {posts.length > 1 && (
      <SectionContainer bg="light" padding="lg">
        <SectionTitle>More Stories</SectionTitle>
        <div className="mt-12">
          <SectionGrid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
            {posts.slice(1).map((post) => (
              <StoryCard key={post._id} post={post} />
            ))}
          </SectionGrid>
        </div>
      </SectionContainer>
    )}

    <Footer />
  </div>
)

const meta = {
  title: 'Pages/StoriesPage',
  component: StoriesPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StoriesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    posts: mockStories,
  },
}

export const MultiplePosts: Story = {
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
    posts: mockStories,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

export const Tablet: Story = {
  args: {
    posts: mockStories,
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
