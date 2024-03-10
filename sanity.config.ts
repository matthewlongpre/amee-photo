/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { createConfig, Slug } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import { PostsPreview } from './components/Posts/PostsPreview'
import aboutSection from './schemas/aboutSection'
import authorType from './schemas/author'
import buttonType from './schemas/button'
import component from './schemas/component'
import headingType from './schemas/heading'
import homePageType from './schemas/homePage'
import narrativePublish from './schemas/narrativePublish'
import pageType from './schemas/page'
import pictime from './schemas/pictime'
import postType from './schemas/post'
import settingsType from './schemas/settings'
import testimonial from './schemas/testimonial'
import testimonialsList from './schemas/testimonialsList'

const basePath = '/studio'

const projectId = () => {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    throw new Error(
      'The `NEXT_PUBLIC_SANITY_PROJECT_ID` environment variable is not set'
    )
  }
  return process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
}

const dataset = () => {
  if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
    throw new Error(
      'The `NEXT_PUBLIC_SANITY_DATASET` environment variable is not set'
    )
  }
  return process.env.NEXT_PUBLIC_SANITY_DATASET
}

export default createConfig({
  basePath,
  projectId: projectId(),
  dataset: dataset(),
  title:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
    'Next.js Blog with Sanity.io',
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      aboutSection,
      authorType,
      buttonType,
      headingType,
      homePageType,
      narrativePublish,
      pageType,
      pictime,
      postType,
      settingsType,
      component,
      testimonial,
      testimonialsList,
    ],
  },
  plugins: [
    deskTool({
      structure: (S) => {
        // The `Settings` root list item
        const settingsListItem = // A singleton not using `documentListItem`, eg no built-in preview
          S.listItem()
            .title(settingsType.title ?? 'Settings')
            .icon(settingsType.icon)
            .child(
              S.editor()
                .id(settingsType.name)
                .schemaType(settingsType.name)
                .documentId(settingsType.name)
            )

        const homePageItem = S.listItem()
          .title('Home Page')
          .icon(homePageType.icon)
          .child(
            S.editor()
              .schemaType(homePageType.name)
              .documentId(homePageType.name)
          )

        // The default root list items (except custom ones)
        const defaultListItems = S.documentTypeListItems().filter(
          (listItem) =>
            listItem.getId() !== settingsType.name &&
            listItem.getId() !== homePageType.name
        )

        return S.list()
          .title('Content')
          .items([
            settingsListItem,
            S.divider(),
            homePageItem,
            ...defaultListItems,
          ])
      },

      // `defaultDocumentNode is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, { schemaType }) => {
        if (schemaType === 'post') {
          return S.document().views([
            S.view.form(),
            S.view.component(PostsPreview).title('Preview'),
          ])
        }

        return null
      },
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({
      defaultApiVersion: '2022-08-08',
    }),
  ],
  document: {
    productionUrl: async (prev, { document }) => {
      const url = new URL('/api/preview', location.origin)
      const secret = process.env.NEXT_PUBLIC_PREVIEW_SECRET
      if (secret) {
        url.searchParams.set('secret', secret)
      }

      try {
        switch (document._type) {
          case settingsType.name:
            break
          case postType.name:
            url.searchParams.set('slug', (document.slug as Slug).current!)
            break
          default:
            return prev
        }
        return url.toString()
      } catch {
        return prev
      }
    },
    // Hide 'Settings' from new document options
    // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter(
          (templateItem) => templateItem.templateId !== settingsType.name
        )
      }

      return prev
    },
    // Removes the "duplicate" action on the "settings" singleton
    actions: (prev, { schemaType }) => {
      if (schemaType === settingsType.name) {
        return prev.filter(({ action }) => action !== 'duplicate')
      }

      return prev
    },
  },
})
