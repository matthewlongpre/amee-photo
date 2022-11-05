import Link from 'next/link'

import { Logo } from './logo'

export default function Header({ title }) {
  return (
    <Link href="/">
      <Logo className="w-12" />
    </Link>
    // <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
    //   <Link href="/" className="hover:underline">
    //     {title}
    //   </Link>
    // </h2>
  )
}
