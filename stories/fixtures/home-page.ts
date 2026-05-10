import { PostProps } from '@/types'
import { mockFeaturedPosts, mockStories } from './posts'
import { mockTestimonials } from './testimonials'

export interface HomePageData {
  featuredPosts: PostProps[]
  latestStories: PostProps[]
  testimonials: Array<{
    name: string
    quote: string
    image: string
  }>
  instagramPosts: Array<{
    id: string
    image: string
    caption: string
  }>
}

export const mockHomePageData: HomePageData = {
  featuredPosts: mockFeaturedPosts,
  latestStories: mockStories.slice(0, 6),
  testimonials: mockTestimonials.slice(0, 5),
  instagramPosts: [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop',
      caption: 'Beautiful moments captured',
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop',
      caption: 'Engagement season',
    },
    {
      id: 'ig-3',
      image: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=400&h=400&fit=crop',
      caption: 'Love in every frame',
    },
    {
      id: 'ig-4',
      image: 'https://images.unsplash.com/photo-1459181286763-c409eac34cea?w=400&h=400&fit=crop',
      caption: 'Candid moments',
    },
    {
      id: 'ig-5',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
      caption: 'Golden hour magic',
    },
    {
      id: 'ig-6',
      image: 'https://images.unsplash.com/photo-1442512917368-d670fedfc999?w=400&h=400&fit=crop',
      caption: 'Details that matter',
    },
  ],
}

export const mockHomePageMinimalData: HomePageData = {
  featuredPosts: mockFeaturedPosts.slice(0, 1),
  latestStories: mockStories.slice(0, 3),
  testimonials: mockTestimonials.slice(0, 2),
  instagramPosts: [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop',
      caption: 'Beautiful moments',
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop',
      caption: 'Engagement',
    },
  ],
}
