import Image from 'next/image'

import { urlForImage } from '../lib/sanity'
import { PostProps } from '../types'
import { merge } from '../utils/merge'

interface FeaturedPostProps {
  isVisible?: boolean
  post: PostProps
  priority?: boolean
}

export function FeaturedPost({
  isVisible = false,
  post,
  priority = false,
}: FeaturedPostProps) {
  const { title, coverImage } = post

  return (
    <div
      className={merge('absolute inset-0 -z-10 h-full w-full', {
        'invisible opacity-0': !isVisible,
      })}
    >
      <Image
        className="h-auto w-full"
        alt={`Cover Image for ${title}`}
        src={urlForImage(coverImage.asset._ref).height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
