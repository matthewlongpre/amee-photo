import React, { ReactNode } from 'react'

interface SectionGridProps {
  children: ReactNode
  cols?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function SectionGrid({
  children,
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'md',
  className = '',
}: SectionGridProps) {
  const gapClasses = {
    sm: 'gap-4 md:gap-6',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-12',
  }

  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2 md:grid-cols-2 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4',
  }

  const mobileColClass = colClasses[cols.mobile || 1] || 'grid-cols-1'
  const tabletColClass = cols.tablet ? `md:${colClasses[cols.tablet]}` : ''
  const desktopColClass = cols.desktop ? `lg:${colClasses[cols.desktop]}` : ''

  return (
    <div
      className={`grid ${mobileColClass} ${gapClasses[gap]} ${className}`}
      role="list"
    >
      {children}
    </div>
  )
}
