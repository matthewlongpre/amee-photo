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
      className={merge('absolute inset-x-0 top-0 bottom-[10%] transition-opacity duration-500', {
        'invisible opacity-0': !isVisible,
        'opacity-100': isVisible,
      })}
    >
      {coverImage?.asset?._ref && (
        <Image
          alt={`Cover Image for ${title}`}
          src={urlForImage(coverImage.asset._ref).height(1600).width(2400).url()}
          sizes="100vw"
          priority={priority}
          fill
          style={{ objectFit: 'cover' }}
        />
      )}
    </div>
  )
}
