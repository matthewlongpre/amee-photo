import { Block } from 'sanity'

export interface AuthorProps {
  name: string
  picture: any
}

export interface PostProps {
  _id: string
  name: string
  title: string
  subTitle: string
  coverImage: CoverImage
  date: string
  excerpt: string
  author: AuthorProps
  slug: string
  content: Block[]
  isFeatured?: boolean
}

export interface PostQueryResponse {
  post: PostProps
  morePosts: PostProps[]
}

export interface EmptyProps {
  children: React.ReactNode
}

interface CoverImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}
