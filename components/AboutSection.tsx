'use client'

import { PortableText } from '@portabletext/react'
import Image from 'next/image'

import { urlForImage } from '../lib/sanity'

const imgCircularText = '/images/circular-text.svg'

interface AboutSectionProps {
  data?: {
    heading?: string
    image?: { asset: { _ref: string } }
    content?: any[]
  }
}

export default function AboutSection({ data }: AboutSectionProps) {
  const imageSrc = data?.image
    ? urlForImage(data.image.asset._ref).width(640).height(640).url()
    : null

  return (
    <section className="bg-warm-50 pb-16 lg:flex lg:items-center lg:justify-center lg:pb-[72px]">
      <div className="relative flex flex-col lg:h-[768px] lg:w-[1216px] lg:shrink-0 lg:overflow-clip">

        {/* Image panel */}
        <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden sm:max-w-[480px] lg:mx-0 lg:aspect-auto lg:absolute lg:left-0 lg:top-0 lg:h-[640px] lg:w-[640px] lg:max-w-none lg:overflow-visible">
          <div aria-hidden="true" className="absolute inset-0 bg-warm-50">
            {imageSrc && (
              <Image
                alt=""
                src={imageSrc}
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            )}
          </div>
          {/* Circular text overlay — desktop only */}
          <div
            className="absolute hidden items-center justify-center lg:flex lg:h-[331px] lg:w-[400px]"
            style={{ left: 70, top: 21 }}
          >
            <div className="rotate-[6.24deg]">
              <div className="relative h-[293px] w-[370px]">
                <img
                  alt=""
                  className="absolute inset-0 block h-full w-full max-w-none"
                  src={imgCircularText}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content box */}
        <div className="flex flex-col gap-6 bg-warm-600 px-8 py-12 lg:absolute lg:right-0 lg:top-[128px] lg:h-[640px] lg:w-[640px] lg:justify-center lg:gap-8 lg:p-16">
          <h2 className="font-quincy text-h3 text-warm-50">
            {data?.heading ?? "Hi, I'm Amee"}
          </h2>
          {data?.content ? (
            <div className="font-karla text-body-md text-white">
              <PortableText value={data.content} />
            </div>
          ) : null}
          <button className="w-fit bg-warm-50 px-6 py-4 font-karla text-button text-cool-900 uppercase transition-opacity hover:opacity-90">
            Let's Chat
          </button>
        </div>
      </div>
    </section>
  )
}
