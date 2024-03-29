import groq from 'groq'

const postFields = groq`
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  subTitle,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const settingsQuery = groq`*[_type == "settings"][0]{title}`

export const featuredPostsQuery = groq`
*[_type == "post" && isFeatured] | order(date desc, _updatedAt desc) {
  ${postFields}
  isFeatured
}`

export const storiesQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const homePageQuery = groq`
*[_type == "homePage"][0]{
  title,
  "sections": sections[]{
    _type,
    ...,
    _type == "reference" => @->{
      ...,
    },
    _type == "testimonialsList" => {
      ...,
      "testimonials": testimonials[]->{
      ...
      }
    }
  }
}

`

export const postQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
