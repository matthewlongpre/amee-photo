import createImageUrlBuilder from '@sanity/image-url'

import { sanityConfig } from './config'

export const imageBuilder = createImageUrlBuilder(sanityConfig as any)

export const urlForImage = (source) =>
  imageBuilder.image(source).auto('format').fit('max')
