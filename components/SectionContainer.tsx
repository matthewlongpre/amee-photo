import React, { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  bg?: 'light' | 'dark' | 'warm'
  padding?: 'sm' | 'md' | 'lg'
  maxWidth?: 'sm' | 'md' | 'lg' | 'full'
  id?: string
}

export function SectionContainer({
  children,
  bg = 'light',
  padding = 'lg',
  maxWidth = 'lg',
  id,
}: SectionContainerProps) {
  const bgClasses = {
    light: 'bg-white',
    dark: 'bg-cool-900',
    warm: 'bg-warm-50',
  }

  const paddingClasses = {
    sm: 'py-12 px-6 md:py-16 md:px-8 lg:py-20 lg:px-12',
    md: 'py-16 px-6 md:py-20 md:px-8 lg:py-24 lg:px-12',
    lg: 'py-20 px-6 md:py-24 md:px-8 lg:py-32 lg:px-12',
  }

  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    full: 'w-full',
  }

  return (
    <section
      id={id}
      className={`${bgClasses[bg]} ${paddingClasses[padding]} flex justify-center`}
    >
      <div className={`${maxWidthClasses[maxWidth]} w-full`}>{children}</div>
    </section>
  )
}
