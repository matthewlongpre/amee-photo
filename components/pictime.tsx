import Head from 'next/head'
import { useEffect, useState } from 'react'

interface PictimePublishProps {
  snippet: string
}

export default function Pictime({ snippet }: PictimePublishProps) {
  const [[template, ...scripts], setElements] = useState<
    readonly [HTMLTemplateElement, ...HTMLScriptElement[]] | []
  >([])

  useEffect(() => {
    const elements = parseSnippet(snippet)

    if (!elements) return

    setElements(elements)
  }, [snippet])

  if (!template || !scripts.length) {
    return null
  }

  return (
    <>
      <Head>
        {scripts.map((script: HTMLScriptElement, index) => (
          <script
            key={index}
            {...setAttributes(script.attributes)}
            dangerouslySetInnerHTML={{ __html: script.innerHTML }}
          />
        ))}
      </Head>

      <template
        {...setAttributes(template.attributes)}
        dangerouslySetInnerHTML={{ __html: template.innerHTML }}
      />
    </>
  )
}

function isTemplateElement(input?: unknown): input is HTMLTemplateElement {
  if (!input) return false
  return input instanceof HTMLTemplateElement
}

function parseSnippet(htmlString: string) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlString, 'text/html')

  const getTemplate = () => {
    const template = Array.from(doc.all).find((element) =>
      isTemplateElement(element)
    )

    if (!isTemplateElement(template)) return

    return template
  }

  const template = getTemplate()

  if (!template) return

  return [template, ...Array.from(doc.scripts)] as const
}

function setAttributes(attributes: NamedNodeMap) {
  const attrs: { [key: string]: string } = {}

  Array.from(attributes).forEach((attr) => {
    attrs[attr.name] = attr.value
  })

  return attrs
}
