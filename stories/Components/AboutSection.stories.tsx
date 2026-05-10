import type { Meta, StoryObj } from '@storybook/react'
import { AboutSection } from '@/components/AboutSection'

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

const mockAboutContent = {
  imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
  title: 'Hi, I\'m Amee',
  description:
    'I realized at a young age that time was fleeting, and since then have sought to document life, so that nothing would be forgotten. There is something so beautiful about being able to transport yourself back to a certain time and place and remember what it was like to be there… how you felt at that exact moment in time. I have been shooting professionally since 2012, and have been incredibly lucky to work with so many awesome clients! I live and work out of Victoria, BC, but am always open to travel!',
  buttonText: 'Get in Touch',
  buttonHref: '/contact',
}

export const Default: Story = {
  args: {
    aboutImage: mockAboutContent.imageUrl,
    title: mockAboutContent.title,
    description: mockAboutContent.description,
    ctaText: mockAboutContent.buttonText,
    ctaLink: mockAboutContent.buttonHref,
  },
}

export const WithoutCTA: Story = {
  args: {
    aboutImage: mockAboutContent.imageUrl,
    title: mockAboutContent.title,
    description: mockAboutContent.description,
  },
}

export const ShortDescription: Story = {
  args: {
    aboutImage: mockAboutContent.imageUrl,
    title: mockAboutContent.title,
    description: 'I love capturing moments that tell your unique love story.',
    ctaText: mockAboutContent.buttonText,
    ctaLink: mockAboutContent.buttonHref,
  },
}

export const LongDescription: Story = {
  args: {
    aboutImage: mockAboutContent.imageUrl,
    title: mockAboutContent.title,
    description: mockAboutContent.description,
    ctaText: mockAboutContent.buttonText,
    ctaLink: mockAboutContent.buttonHref,
  },
}

export const Mobile: Story = {
  args: {
    aboutImage: mockAboutContent.imageUrl,
    title: mockAboutContent.title,
    description: mockAboutContent.description,
    ctaText: mockAboutContent.buttonText,
    ctaLink: mockAboutContent.buttonHref,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

export const Tablet: Story = {
  args: {
    aboutImage: mockAboutContent.imageUrl,
    title: mockAboutContent.title,
    description: mockAboutContent.description,
    ctaText: mockAboutContent.buttonText,
    ctaLink: mockAboutContent.buttonHref,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}
