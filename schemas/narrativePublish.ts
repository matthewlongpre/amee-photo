import { defineType } from 'sanity'

export default defineType({
  type: 'object',
  name: 'narrativePublish',
  title: 'Narrative Publish',
  fields: [{ type: 'string', name: 'postId', description: 'Post ID' }],
})
