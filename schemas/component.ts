import { defineType } from 'sanity'

export default defineType({
  name: 'component',
  title: 'Component',
  type: 'object',
  fields: [
    {
      name: 'title',
      description: 'The title of the component.',
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
