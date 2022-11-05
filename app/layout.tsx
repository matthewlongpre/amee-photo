import '../styles/index.css'

import Link from 'next/link'
import React from 'react'

import { Logo } from '../components/logo'
import { EmptyProps } from '../types'

export default function RootLayout({ children }: EmptyProps) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
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
        <meta name="theme-color" content="#000" />
      </head>
      <body>
        <header className="flex flex-col items-center gap-2 py-8">
          <nav className="flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/stories">Stories</NavLink>
            <Logo className="mx-4 w-12" />
            <NavLink href="/info">Info</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

interface NavLinkProps {
  children: React.ReactNode
  href: string
}

function NavLink({ children, href }: NavLinkProps) {
  return (
    <Link className="flex p-4 text-sm uppercase tracking-wide" href={href}>
      {children}
    </Link>
  )
}
