import { HomeIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    {
      name: 'title',
      description: 'The title of the page.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'sections',
      title: 'Sections',
      description: 'Add, edit, and reorder sections',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'aboutSection' }] },
        { type: 'testimonialsList' },
      ],
    },
  ],
})
