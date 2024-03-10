import { defineType } from 'sanity'

export default defineType({
  name: 'testimonialsList',
  title: 'Testimonials List',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'List Title',
      type: 'string',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
    },
  ],
})
