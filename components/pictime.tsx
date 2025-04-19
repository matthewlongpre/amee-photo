import Head from 'next/head'
import { useEffect, useState } from 'react'

interface PictimePublishProps {
  snippet: string
}

interface ScriptElement {
  attributes: NamedNodeMap
  textContent: string | null
  src?: string
}

export default function Pictime({ snippet }: PictimePublishProps) {
  const [[template, ...scripts], setElements] = useState<
    readonly [HTMLTemplateElement, ...ScriptElement[]] | []
  >([])

  useEffect(() => {
    const elements = parseSnippet(snippet)

    if (!elements) {
      return
    }

    setElements(elements)
  }, [snippet])

  useEffect(() => {
    if (!scripts.length || !template) return

    scripts.forEach((script) => {
      const newScript = document.createElement('script')
      Array.from(script.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value)
      })
      newScript.textContent = script.textContent || ''
      document.body.appendChild(newScript)
    })

    return () => {
      scripts.forEach((script) => {
        if (script.src) {
          const existingScript = document.querySelector(
            `script[src="${script.src}"]`
          )
          if (existingScript) {
            existingScript.remove()
          }
        }
      })
    }
  }, [scripts, template])

  if (!template || !scripts.length) {
    return null
  }

  return (
    <template
      {...setAttributes(template.attributes)}
      dangerouslySetInnerHTML={{ __html: template.innerHTML }}
    />
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

    if (!isTemplateElement(template)) {
      return
    }

    return template
  }

  const template = getTemplate()

  if (!template) return

  return [
    template,
    ...Array.from(doc.scripts).map((script) => ({
      attributes: script.attributes,
      textContent: script.textContent,
      src: script.src,
    })),
  ] as const
}

function setAttributes(attributes: NamedNodeMap) {
  const attrs: { [key: string]: string } = {}

  Array.from(attributes).forEach((attr) => {
    attrs[attr.name] = attr.value
  })

  return attrs
}
