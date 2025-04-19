'use client'

/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react'

import Pictime from './pictime'
import portableTextStyles from './portable-text-styles.module.css'

const portableTextComponents = {
  types: {
    pictime: ({ value }) => <Pictime snippet={value.snippet} />,
  },
} as const

export default function PostBody({ content }) {
  return (
    <div className={`mx-auto ${portableTextStyles.portableText}`}>
      <PortableText value={content} components={portableTextComponents} />
    </div>
  )
}
