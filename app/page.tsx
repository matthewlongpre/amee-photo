import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import Link from 'next/link'

import Container from '../components/container'
import { FeaturedPosts } from '../components/FeaturedPosts'
import { featuredPostsQuery, homePageQuery } from '../lib/queries'
import { urlForImage } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import { PostProps } from '../types'

async function getFeaturedPosts() {
  const client = getClient()
  return client.fetch<PostProps[]>(featuredPostsQuery)
}

function getContent() {
  const client = getClient()
  return client.fetch(homePageQuery)
}

const Button = ({ node }) => {
  const { text, linkType, url, path } = node
  const href = linkType === 'absolute' ? url : path

  return <Link href={href}>{text}</Link>
}

const serializers = {
  types: {
    button: (props) => <Button {...props} />,
    heading: (props) => <h2>{props.node.text}</h2>,
    aboutSection: (props) => {
      const { heading, image, content } = props.node
      return (
        <div>
          <h2>{heading}</h2>
          <Image
            alt="About"
            src={urlForImage(image.asset).url()}
            width={640}
            height={640}
          />
          <BlockContent blocks={content} serializers={serializers} />
        </div>
      )
    },
    testimonialsList: (props) => {
      const { heading, testimonials } = props.node

      const items = testimonials ?? []

      return (
        <div>
          <h2>{heading}</h2>
          <ul>
            {items.map((testimonial) => (
              <li key={testimonial._id}>
                <Image
                  alt={testimonial.title}
                  src={urlForImage(testimonial.image.asset).url()}
                  width={640}
                  height={640}
                />
                <h2>{testimonial.title}</h2>
                <BlockContent blocks={testimonial.content} />
              </li>
            ))}
          </ul>
        </div>
      )
    },
  },
}

export default async function Home() {
  const featuredPosts = await getFeaturedPosts()
  const content = await getContent()

  return (
    <>
      <section className="h-screen">
        <Container>
          {Boolean(featuredPosts.length) && <FeaturedPosts posts={featuredPosts} />}
        </Container>
      </section>

      <section>
        <Container className="text-center">
          <BlockContent blocks={content.sections} serializers={serializers} />
        </Container>
      </section>
    </>
  )
}
