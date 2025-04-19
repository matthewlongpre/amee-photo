import Link from 'next/link'

import { PostProps } from '../types'
import CoverImage from './cover-image'
import Date from './date'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  subTitle,
}: PostProps) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>

      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>

      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/stories/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <h4>{subTitle}</h4>

      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
    </div>
  )
}
