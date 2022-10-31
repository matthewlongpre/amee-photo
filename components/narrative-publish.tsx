/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Router from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'

interface NarrativePublishProps {
  postId: string
}

const styles = ` 
 .nar-root p {
    text-align: center;
    opacity: 0;
    animation: nara 0s ease-in 2s forwards;
  }
  @keyframes nara {
    to {
      opacity: 1;
    }
  }
`

const URL = `https://fetch.getnarrativeapp.com`

export default function NarrativePublish({ postId }: NarrativePublishProps) {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = `${URL}/core/embed/r/${postId}.js`
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [postId])

  if (!postId) return null

  return (
    <>
      <Head>
        <style type="text/css">{styles}</style>
      </Head>
      <div className="nar-root" data-post-id={postId}>
        <img
          alt="Preview"
          style={{ width: `100%` }}
          src={`${URL}/static/${postId}/featured.jpg`}
        />
        <noscript>
          <p>
            Your Narrative blog will appear here, click preview to see it live.
            <br />
            For any issues click <a href="https://help.narrative.so">here</a>
          </p>
        </noscript>
      </div>
    </>
  )
}
