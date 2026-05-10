import type { Meta, StoryObj } from '@storybook/react'
import { SectionGrid } from '@/components/SectionGrid'
import { SectionContainer } from '@/components/SectionContainer'

const meta = {
  title: 'Components/SectionGrid',
  component: SectionGrid,
  decorators: [
    (Story) => (
      <SectionContainer bg="light" padding="lg">
        <Story />
      </SectionContainer>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof SectionGrid>

export default meta
type Story = StoryObj<typeof meta>

const GridItem = ({ title, index }: { title: string; index: number }) => (
  <div className="aspect-square bg-warm-100 rounded-lg p-6 flex items-center justify-center">
    <div className="text-center">
      <div className="text-4xl font-bold text-warm-600 mb-2">{index + 1}</div>
      <div className="text-sm text-cool-900">{title}</div>
    </div>
  </div>
)

export const ThreeColumns: Story = {
  args: {
    cols: { mobile: 1, tablet: 2, desktop: 3 },
    gap: 'md',
    children: (
      <>
        <GridItem title="Item 1" index={0} />
        <GridItem title="Item 2" index={1} />
        <GridItem title="Item 3" index={2} />
        <GridItem title="Item 4" index={3} />
        <GridItem title="Item 5" index={4} />
        <GridItem title="Item 6" index={5} />
      </>
    ),
  },
}

export const TwoColumns: Story = {
  args: {
    cols: { mobile: 1, tablet: 2, desktop: 2 },
    gap: 'md',
    children: (
      <>
        <GridItem title="Item 1" index={0} />
        <GridItem title="Item 2" index={1} />
        <GridItem title="Item 3" index={2} />
        <GridItem title="Item 4" index={3} />
      </>
    ),
  },
}

export const SingleColumn: Story = {
  args: {
    cols: { mobile: 1, tablet: 1, desktop: 1 },
    gap: 'lg',
    children: (
      <>
        <GridItem title="Item 1" index={0} />
        <GridItem title="Item 2" index={1} />
        <GridItem title="Item 3" index={2} />
      </>
    ),
  },
}

export const SmallGap: Story = {
  args: {
    cols: { mobile: 1, tablet: 2, desktop: 3 },
    gap: 'sm',
    children: (
      <>
        <GridItem title="Item 1" index={0} />
        <GridItem title="Item 2" index={1} />
        <GridItem title="Item 3" index={2} />
        <GridItem title="Item 4" index={3} />
        <GridItem title="Item 5" index={4} />
        <GridItem title="Item 6" index={5} />
      </>
    ),
  },
}

export const LargeGap: Story = {
  args: {
    cols: { mobile: 1, tablet: 2, desktop: 3 },
    gap: 'lg',
    children: (
      <>
        <GridItem title="Item 1" index={0} />
        <GridItem title="Item 2" index={1} />
        <GridItem title="Item 3" index={2} />
        <GridItem title="Item 4" index={3} />
        <GridItem title="Item 5" index={4} />
        <GridItem title="Item 6" index={5} />
      </>
    ),
  },
}

export const MobileResponsive: Story = {
  args: {
    cols: { mobile: 1, tablet: 2, desktop: 3 },
    gap: 'md',
    children: (
      <>
        <GridItem title="Item 1" index={0} />
        <GridItem title="Item 2" index={1} />
        <GridItem title="Item 3" index={2} />
        <GridItem title="Item 4" index={3} />
        <GridItem title="Item 5" index={4} />
        <GridItem title="Item 6" index={5} />
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

export const TabletResponsive: Story = {
  args: {
    cols: { mobile: 1, tablet: 2, desktop: 3 },
    gap: 'md',
    children: (
      <>
        <GridItem title="Item 1" index={0} />
        <GridItem title="Item 2" index={1} />
        <GridItem title="Item 3" index={2} />
        <GridItem title="Item 4" index={3} />
        <GridItem title="Item 5" index={4} />
        <GridItem title="Item 6" index={5} />
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const FourColumns: Story = {
  args: {
    cols: { mobile: 2, tablet: 2, desktop: 4 },
    gap: 'md',
    children: (
      <>
        {Array.from({ length: 8 }, (_, i) => (
          <GridItem key={i} title={`Item ${i + 1}`} index={i} />
        ))}
      </>
    ),
  },
}
