'use client'

import { Logo } from './logo'

const imgInstagram = '/images/icon-instagram.svg'
const imgFacebook = '/images/icon-facebook.svg'

export default function Footer() {
  return (
    <footer className="bg-cool-900 px-16 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        {/* Logo */}
        <div className="h-12 w-12">
          <Logo variant="light" className="h-full w-full" />
        </div>

        {/* Copyright */}
        <p className="font-karla text-body-sm text-center text-white">
          © 2024 Amee Longpre Photography
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#instagram" className="relative block h-4 w-4">
            <img alt="Instagram" className="absolute inset-0 h-full w-full max-w-none" src={imgInstagram} />
          </a>
          <a href="#facebook" className="relative block h-4 w-4">
            <img alt="Facebook" className="absolute inset-0 h-full w-full max-w-none" src={imgFacebook} />
          </a>
        </div>
      </div>
    </footer>
  )
}
