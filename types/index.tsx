import { Block } from 'sanity'

export interface AuthorProps {
  name: string
  picture: any
}

export interface PostProps {
  title: string
  coverImage: CoverImage
  date: string
  excerpt?: string
  author: AuthorProps
  slug?: string
  content?: any
  subTitle?: string
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
