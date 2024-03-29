import { PostProps } from '../types'
import CoverImage from './cover-image'
import Date from './date'
import PostTitle from './post-title'

export default function PostHeader(props: PostProps) {
  const { title, coverImage, date, slug } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
