import { AuthorProps } from '@/types'

export const mockAuthors: AuthorProps[] = [
  {
    name: 'Amee Longpre',
    picture: {
      asset: {
        _id: 'image-author-amee',
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
        metadata: {
          dimensions: {
            height: 300,
            width: 300,
          },
        },
      },
    },
  },
  {
    name: 'Guest Photographer',
    picture: {
      asset: {
        _id: 'image-guest',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
        metadata: {
          dimensions: {
            height: 300,
            width: 300,
          },
        },
      },
    },
  },
]
