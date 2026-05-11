import type { Meta, StoryObj } from '@storybook/react'
import { SectionContainer } from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import { mockSingleStoryWithCover, mockSingleStoryNoCover } from '@/stories/fixtures/posts'

// Mock components for single story page
const SingleStoryView = ({
  withCover = true,
  title,
  subtitle,
  date,
  body,
  gallery,
  vendors,
}: any) => (
  <div>
    {/* Hero/Cover Section */}
    {withCover && (
      <div className="relative">
        <div className="aspect-video bg-gray-300 mb-8">
          <img
            src={mockSingleStoryWithCover.coverImage?.asset?.url}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 text-white">
          <h1 className="text-h1">{title}</h1>
          <p className="text-subheading-md">{subtitle}</p>
        </div>
      </div>
    )}

    <SectionContainer bg="light" padding="lg">
      {!withCover && (
        <div className="mb-8">
          <p className="text-overline text-warm-600 mb-2">{date}</p>
          <h1 className="text-h1 text-cool-900 mb-2">{title}</h1>
          <p className="text-h3 text-warm-600 mb-6">{subtitle}</p>
          <hr className="border-warm-200" />
        </div>
      )}

      {withCover && (
        <div className="mb-8">
          <p className="text-overline text-warm-600 mb-2">{date}</p>
          <h1 className="text-h2 text-cool-900 mb-4">{title}</h1>
        </div>
      )}

      {/* Main Content */}
      <div className="prose max-w-none mb-12">
        <p className="text-body-md text-cool-900 mb-6">{body?.[0]?.children?.[0]?.text}</p>

        {vendors && vendors.length > 0 && (
          <div className="bg-warm-50 p-6 rounded-lg mb-12">
            <h3 className="text-h4 text-cool-900 mb-4">Vendors</h3>
            <div className="grid grid-cols-2 gap-4">
              {vendors.map((vendor: any) => (
                <div key={vendor.name}>
                  <p className="text-overline text-warm-600">{vendor.category}</p>
                  <p className="text-body-sm text-cool-900">{vendor.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Gallery */}
      {gallery && gallery.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {gallery.map((image: any, idx: number) => (
            <div key={idx} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={image.asset.url}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="border-t border-warm-200 pt-6">
        <p className="text-overline text-warm-600 mb-3">Tags</p>
        <div className="flex flex-wrap gap-2">
          <a href="#" className="px-4 py-2 bg-warm-100 text-cool-900 rounded hover:bg-warm-200 transition">
            Wedding
          </a>
          <a href="#" className="px-4 py-2 bg-warm-100 text-cool-900 rounded hover:bg-warm-200 transition">
            Engagement
          </a>
        </div>
      </div>
    </SectionContainer>

    <Footer />
  </div>
)

const meta = {
  title: 'Pages/SingleStory',
  component: SingleStoryView,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SingleStoryView>

export default meta
type Story = StoryObj<typeof meta>

export const WithCover: Story = {
  args: {
    withCover: true,
    title: mockSingleStoryWithCover.title,
    subtitle: mockSingleStoryWithCover.subTitle,
    date: mockSingleStoryWithCover.date,
    body: mockSingleStoryWithCover.body,
    gallery: mockSingleStoryWithCover.gallery,
    vendors: mockSingleStoryWithCover.vendors,
  },
}

export const NoCover: Story = {
  args: {
    withCover: false,
    title: mockSingleStoryNoCover.title,
    subtitle: mockSingleStoryNoCover.subTitle,
    date: mockSingleStoryNoCover.date,
    body: mockSingleStoryNoCover.body,
    gallery: mockSingleStoryNoCover.gallery,
    vendors: mockSingleStoryNoCover.vendors,
  },
}

export const WithCoverMobile: Story = {
  args: {
    withCover: true,
    title: mockSingleStoryWithCover.title,
    subtitle: mockSingleStoryWithCover.subTitle,
    date: mockSingleStoryWithCover.date,
    body: mockSingleStoryWithCover.body,
    gallery: mockSingleStoryWithCover.gallery,
    vendors: mockSingleStoryWithCover.vendors,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

export const WithCoverTablet: Story = {
  args: {
    withCover: true,
    title: mockSingleStoryWithCover.title,
    subtitle: mockSingleStoryWithCover.subTitle,
    date: mockSingleStoryWithCover.date,
    body: mockSingleStoryWithCover.body,
    gallery: mockSingleStoryWithCover.gallery,
    vendors: mockSingleStoryWithCover.vendors,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const WithCoverDesktop: Story = {
  args: {
    withCover: true,
    title: mockSingleStoryWithCover.title,
    subtitle: mockSingleStoryWithCover.subTitle,
    date: mockSingleStoryWithCover.date,
    body: mockSingleStoryWithCover.body,
    gallery: mockSingleStoryWithCover.gallery,
    vendors: mockSingleStoryWithCover.vendors,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}

export const NoCoverMobile: Story = {
  args: {
    withCover: false,
    title: mockSingleStoryNoCover.title,
    subtitle: mockSingleStoryNoCover.subTitle,
    date: mockSingleStoryNoCover.date,
    body: mockSingleStoryNoCover.body,
    gallery: mockSingleStoryNoCover.gallery,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}
