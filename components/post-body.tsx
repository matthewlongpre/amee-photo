/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText, PortableTextReactComponents } from '@portabletext/react'

import NarrativePublish from './narrative-publish'
import portableTextStyles from './portable-text-styles.module.css'

const portableTextComponents = {
  types: {
    narrativePublish: ({ value }) => <NarrativePublish postId={value.postId} />,
  },
}

export default function PostBody({ content }) {
  return (
    <div className={`mx-auto max-w-2xl ${portableTextStyles.portableText}`}>
      <PortableText value={content} components={portableTextComponents} />
    </div>
  )
}
