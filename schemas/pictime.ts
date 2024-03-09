import { defineType } from 'sanity'

export default defineType({
  type: 'object',
  name: 'pictime',
  title: 'Pictime',
  fields: [
    {
      type: 'string',
      title: 'Snippet',
      name: 'snippet',
      description: 'Paste the Pictime snippet',
    },
  ],
  preview: {
    select: {
      snippet: 'snippet',
    },
    prepare({ snippet }) {
      return {
        title: 'Pictime',
        subtitle: snippet,
      }
    },
  },
})
