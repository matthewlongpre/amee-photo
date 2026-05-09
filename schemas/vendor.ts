import { defineType } from 'sanity'

export default defineType({
  name: 'vendor',
  title: 'Vendor',
  type: 'object',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g., Venue, Hair, Makeup, etc.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Vendor Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'Website URL',
      type: 'url',
      description: "Link to the vendor's website",
    },
  ],
  preview: {
    select: {
      category: 'category',
      name: 'name',
    },
    prepare({ category, name }) {
      return {
        title: name,
        subtitle: category,
      }
    },
  },
})
