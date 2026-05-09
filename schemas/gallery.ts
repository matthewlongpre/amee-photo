import { defineType } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'snippet',
      title: 'PicTime Snippet',
      type: 'string',
      description: 'Paste the PicTime gallery snippet here',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'PicTime Gallery',
      }
    },
  },
})
