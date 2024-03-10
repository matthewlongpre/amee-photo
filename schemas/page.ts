import { BookIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: BookIcon,
  fields: [
    {
      name: 'title',
      description: 'The title of the page.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'button' }, { type: 'heading' }],
    },
  ],
})
