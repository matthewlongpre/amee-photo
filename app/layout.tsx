import '../styles/index.css'

import React from 'react'

import { EmptyProps } from '../types'

export const metadata = {
  title: 'Amee Longpre Photography',
  description: 'Professional wedding and engagement photography in Victoria, BC',
}

export default function RootLayout({ children }: EmptyProps) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#f8f8f8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden bg-white">{children}</body>
    </html>
  )
}
