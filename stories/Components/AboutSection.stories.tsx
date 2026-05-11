import type { Meta, StoryObj } from '@storybook/react'
import AboutSection from '@/components/AboutSection'

const meta = {
  title: 'Components/AboutSection',
  component: AboutSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AboutSection>

export default meta
type Story = StoryObj<typeof meta>

const mockAboutData = {
  heading: "Hi, I'm Amee",
  image: {
    asset: {
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=640&h=640&fit=crop',
    },
  },
  content: [
    {
      _type: 'block',
      _key: 'block-1',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'I realized at a young age that time was fleeting, and since then have sought to document life, so that nothing would be forgotten. There is something so beautiful about being able to transport yourself back to a certain time and place and remember what it was like to be there… how you felt at that exact moment in time.',
          marks: [],
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ],
}

export const Default: Story = {
  args: {
    data: mockAboutData,
  },
}

export const NoImage: Story = {
  args: {
    data: {
      heading: mockAboutData.heading,
      content: mockAboutData.content,
    },
  },
}

export const NoContent: Story = {
  args: {
    data: {
      heading: mockAboutData.heading,
      image: mockAboutData.image,
    },
  },
}

export const Empty: Story = {
  args: {
    data: undefined,
  },
}

export const Mobile: Story = {
  args: {
    data: mockAboutData,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
}

export const Tablet: Story = {
  args: {
    data: mockAboutData,
  },
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}

export const Desktop: Story = {
  args: {
    data: mockAboutData,
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
}
