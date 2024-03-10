import { defineType } from 'sanity'

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Absolute URL', value: 'absolute' },
          { title: 'Relative Path', value: 'relative' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'absolute',
    },
    {
      name: 'path',
      title: 'Path',
      type: 'string',
      hidden: ({ parent }) => parent?.linkType !== 'relative',
    },
  ],
})
