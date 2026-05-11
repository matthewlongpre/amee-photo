# Storybook Stories Guide

This document explains the Storybook story structure, mock data patterns, and conventions used in the Amee Photo project.

## Quick Start

### Running Storybook

```bash
npm run storybook
```

This starts Storybook on `http://localhost:6006`

### Building for Production

```bash
npm run build-storybook
```

## Story Organization

Stories are organized in the `/stories` directory with the following structure:

```
/stories
├── fixtures/              # Mock data for testing
│   ├── authors.ts        # Mock photographer/author data
│   ├── posts.ts          # Mock blog post/story data
│   ├── testimonials.ts    # Mock customer testimonials
│   └── home-page.ts      # Mock complete homepage sections
│
├── Pages/                # Page-level stories
│   ├── Homepage.stories.tsx
│   ├── StoriesPage.stories.tsx
│   └── SingleStory.stories.tsx
│
├── Components/           # Component-level stories
│   ├── FeaturedPosts.stories.tsx
│   ├── AboutSection.stories.tsx
│   ├── Testimonials.stories.tsx
│   ├── LatestStories.stories.tsx
│   ├── Instagram.stories.tsx
│   └── Footer.stories.tsx
│
└── [Existing stories]
    ├── SectionContainer.stories.tsx
    ├── SectionTitle.stories.tsx
    ├── SectionGrid.stories.tsx
    ├── Header.stories.tsx
    ├── Logo.stories.tsx
    ├── Avatar.stories.tsx
    ├── PostPreview.stories.tsx
    └── DesignTokens.stories.tsx
```

## Mock Data Patterns

### Using Fixtures

All stories use mock data from `/stories/fixtures/` instead of live Sanity data. This ensures stories are:
- **Reproducible** - Same data every time
- **Fast** - No network calls
- **Reliable** - No external dependencies
- **Self-contained** - Works offline

### Available Fixtures

#### `posts.ts`
Provides mock blog posts and stories:

```typescript
import { mockFeaturedPosts, mockStories, mockSingleStoryWithCover } from '@/stories/fixtures/posts'

// Featured posts for homepage carousel (3 items)
mockFeaturedPosts

// All stories/blog posts (6 items)
mockStories

// Single story with full content
mockSingleStoryWithCover

// Tutorial/article story without cover image
mockSingleStoryNoCover
```

#### `testimonials.ts`
Provides mock customer testimonials (5 items):

```typescript
import { mockTestimonials } from '@/stories/fixtures/testimonials'

mockTestimonials.map(t => ({
  name: t.name,
  quote: t.quote,
  image: t.image
}))
```

#### `authors.ts`
Provides mock author data (2 items):

```typescript
import { mockAuthors } from '@/stories/fixtures/authors'
```

#### `home-page.ts`
Provides complete mock homepage data:

```typescript
import { mockHomePageData, mockHomePageMinimalData } from '@/stories/fixtures/home-page'

// Full realistic data
mockHomePageData
// Minimal data for testing fallbacks
mockHomePageMinimalData
```

## Component Story Patterns

### Basic Story Structure

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { YourComponent } from '@/components/YourComponent'
import { mockData } from '@/stories/fixtures/data'

const meta = {
  title: 'Components/YourComponent',
  component: YourComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof YourComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: mockData,
  },
}

export const Empty: Story = {
  args: {
    data: [],
  },
}

export const Mobile: Story = {
  args: {
    data: mockData,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}
```

### Required Story Variants

Each component story should include:

1. **Default** - Normal state with mock data
2. **Empty** - Empty state (if applicable)
3. **Loading** - Loading state (if applicable)
4. **Mobile** - Mobile viewport (375px)
5. **Tablet** - Tablet viewport (768px)
6. **Desktop** - Desktop viewport (1440px)

Example with all variants:

```typescript
export const Default: Story = {
  args: { data: mockData },
}

export const Empty: Story = {
  args: { data: [] },
}

export const Mobile: Story = {
  args: { data: mockData },
  parameters: { viewport: { defaultViewport: 'mobile' } },
}

export const Tablet: Story = {
  args: { data: mockData },
  parameters: { viewport: { defaultViewport: 'tablet' } },
}

export const Desktop: Story = {
  args: { data: mockData },
  parameters: { viewport: { defaultViewport: 'desktop' } },
}
```

## Responsive Design Testing

### Available Viewports

Three custom viewports are configured in `.storybook/preview.ts`:

| Name | Dimensions | Use Case |
|------|-----------|----------|
| **Mobile** | 375×812 | iPhone / small device |
| **Tablet** | 768×1024 | iPad / medium device |
| **Desktop** | 1440×900 | Figma design width |

### Testing Responsive Behavior

1. Open a story in Storybook
2. Click the "Viewport" icon in the toolbar
3. Select mobile, tablet, or desktop
4. Verify layout adjusts correctly
5. Check that content doesn't overflow or crop

## Design Tokens in Stories

All design tokens from `tailwind.config.js` are available as Tailwind classes:

### Colors

```typescript
// Warm palette
'warm-50'   // #F8F8F8
'warm-100'  // #EFEEEC
'warm-600'  // #A68F83
'warm-700'  // #917D73

// Cool palette
'cool-900'  // #2D2E2D
```

### Typography

```typescript
// Font families
font-quincy  // Headings (serif)
font-karla   // Body text (sans-serif)

// Heading sizes
text-h1      // 48px/56px
text-h2      // 40px/48px
text-h3      // 32px/40px
text-h4      // 24px/32px

// Body sizes
text-body-md // 18px/32px
text-body-sm // 14px/24px

// Other
text-overline      // 12px, 700 weight
text-subheading-md // 24px/32px
text-subheading-sm // 14px/20px
```

## Adding New Stories

### Step 1: Create Mock Data (if needed)

Add to `/stories/fixtures/` if creating new fixture types:

```typescript
// /stories/fixtures/new-data.ts
export const mockNewData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
]
```

### Step 2: Create Story File

```typescript
// /stories/Components/NewComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { NewComponent } from '@/components/NewComponent'
import { mockNewData } from '@/stories/fixtures/new-data'

const meta = {
  title: 'Components/NewComponent',
  component: NewComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof NewComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: mockNewData,
  },
}

// Add mobile, tablet, desktop, empty variants...
```

### Step 3: Verify in Storybook

```bash
npm run storybook
```

## Troubleshooting

### Stories Not Showing Up

1. Make sure file is named `*.stories.tsx`
2. Check file is in `/stories` or subdirectory
3. Restart Storybook server
4. Verify component imports are correct

### Mock Data Not Found

Check imports match the exported names in fixture files:

```typescript
// ✓ Correct
import { mockPosts } from '@/stories/fixtures/posts'

// ✗ Incorrect
import mockPosts from '@/stories/fixtures/posts'
```

### Stories Not Rendering

Check browser console for errors:

1. Open DevTools (F12)
2. Check Console tab for errors
3. Verify component props match story args
4. Ensure mock data structure matches component expectations

## Continuous Integration

Stories are automatically built and validated in CI:

```bash
npm run build-storybook  # Builds static Storybook
```

## Performance Considerations

- Mock data is optimized for fast story rendering
- Images use Unsplash CDN for reliable loading
- No network calls to Sanity or external services
- Stories load instantly without waiting for APIs

## Future Enhancements

Potential improvements for the story suite:

- [ ] Interaction testing with Storybook Interactions
- [ ] Visual regression testing with Percy
- [ ] Accessibility testing integration
- [ ] Cross-browser testing
- [ ] Real Sanity data variants (labeled as "Connected")
- [ ] Performance metrics in stories

## Questions?

Refer to the [Storybook documentation](https://storybook.js.org/) for more information.
