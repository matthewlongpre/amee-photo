import { PortableTextBlock } from '@sanity/types'

export interface AuthorProps {
  name: string
  picture?: any
}

export interface Vendor {
  category: string
  name: string
  url?: string
}

export interface PostProps {
  _id: string
  name: string
  title: string
  subTitle: string
  coverImage?: CoverImage
  date: string
  excerpt: string
  author: AuthorProps
  slug: string
  content: PortableTextBlock[]
  isFeatured?: boolean
  vendors?: Vendor[]
  gallery?: {
    snippet: string
  }
}

export interface PostQueryResponse {
  post: PostProps
  morePosts: PostProps[]
}

export interface EmptyProps {
  children: React.ReactNode
}

interface CoverImage {
  _type?: 'image'
  asset: {
    _ref?: string
    _type?: 'reference'
    url?: string
  }
}
