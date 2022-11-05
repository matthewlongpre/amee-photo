import React from 'react'

type Variant = 'light' | 'dark'

interface LogoProps {
  className?: string
  variant?: Variant
}

export const Logo = ({ className, variant = 'dark' }: LogoProps) => {
  const variants: Record<Variant, React.ReactElement> = {
    dark: (
      <>
        <circle cx="128" cy="128" r="127" fill="#191B1F" />
        <g
          fill="none"
          stroke="#FEFEFE"
          strokeMiterlimit="10"
          strokeWidth="10.421"
        >
          <path d="M33.6 187.8S78 124.9 114.2 52.7c1.2-2.4 4.8-1.4 4.6 1.3-3 47.8-16.5 209.7 103.6 127.9" />
          <path d="M46.6 135.7s52.8 20.8 103.9-23.4" />
        </g>
      </>
    ),
    light: (
      <path
        fill="#FEFEFE"
        d="M166 209.8a41.92 41.92 0 0 1-21.16-5.36c-16.55-9.43-27-31.21-31.12-64.76a111 111 0 0 1-34.3 6.1h-1.83c-3.54 0-6.86-.17-9.94-.44-17.07 27.29-29.59 45.11-29.83 45.44l-8.51-6c.22-.31 11.43-16.27 27.06-41.05a73.67 73.67 0 0 1-11.69-3.2l3.81-9.7a73.62 73.62 0 0 0 13.83 3.36C76.78 110.82 94 81.39 109.54 50.4A7.66 7.66 0 0 1 124 54.31l-.26 4.14c-1 15.9-2.62 41.27-1 66.21a117.09 117.09 0 0 0 24.25-16.36l6.82 7.87a124.81 124.81 0 0 1-30.11 19.5c3.47 31.67 12.3 51.76 26.25 59.72 15.68 8.94 39.06 3 69.48-17.77l5.87 8.61c-22.96 15.69-42.82 23.57-59.3 23.57ZM128 1a127 127 0 1 0 127 127A127 127 0 0 0 128 1Zm-15.32 128.06a99.64 99.64 0 0 1-32.95 6.29h-5.85C86 115.53 99.77 91.9 112.82 66.85c-.98 16.82-1.91 39.77-.14 62.21Z"
      />
    ),
  }
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 256 256"
    >
      {variants[variant]}
    </svg>
  )
}
