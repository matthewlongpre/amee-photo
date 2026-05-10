import type { Meta, StoryObj } from '@storybook/react'
import { SectionTitle } from '@/components/SectionTitle'
import { SectionContainer } from '@/components/SectionContainer'

const meta = {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  decorators: [
    (Story) => (
      <SectionContainer bg="light" padding="lg">
        <Story />
      </SectionContainer>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof SectionTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Latest Stories',
    decorative: true,
    alignment: 'center',
    showDividers: true,
  },
}

export const CenteredWithDecorations: Story = {
  args: {
    children: 'Kind Words',
    decorative: true,
    alignment: 'center',
    showDividers: true,
  },
}

export const CenteredNoDecorations: Story = {
  args: {
    children: 'Our Work',
    decorative: false,
    alignment: 'center',
    showDividers: false,
  },
}

export const LeftAligned: Story = {
  args: {
    children: 'Featured Collection',
    decorative: false,
    alignment: 'left',
    showDividers: false,
  },
}

export const RightAligned: Story = {
  args: {
    children: 'New Arrivals',
    decorative: false,
    alignment: 'right',
    showDividers: false,
  },
}

export const WithDividers: Story = {
  args: {
    children: 'Stories From 2023',
    decorative: true,
    alignment: 'center',
    showDividers: true,
  },
}

export const OnDarkBackground: Story = {
  decorators: [
    (Story) => (
      <SectionContainer bg="dark" padding="lg">
        <div className="text-white">
          <Story />
        </div>
      </SectionContainer>
    ),
  ],
  args: {
    children: 'Featured On Instagram',
    decorative: true,
    alignment: 'center',
    showDividers: true,
  },
}

export const LongTitle: Story = {
  args: {
    children: 'Celebrating Love: Wedding Photography from 2023 and Beyond',
    decorative: true,
    alignment: 'center',
    showDividers: true,
  },
}
