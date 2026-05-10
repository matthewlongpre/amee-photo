'use client'

import React from 'react'

interface SectionTitleProps {
  children: React.ReactNode
  decorative?: boolean
  alignment?: 'left' | 'center' | 'right'
  showDividers?: boolean
}

export function SectionTitle({
  children,
  decorative = true,
  alignment = 'center',
  showDividers = true,
}: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const FlowerIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mx-2"
    >
      <circle cx="8" cy="8" r="3" fill="currentColor" />
      <circle cx="8" cy="2" r="1.5" fill="currentColor" />
      <circle cx="12.5" cy="4.5" r="1.5" fill="currentColor" />
      <circle cx="13" cy="9" r="1.5" fill="currentColor" />
      <circle cx="8" cy="14" r="1.5" fill="currentColor" />
      <circle cx="3.5" cy="12.5" r="1.5" fill="currentColor" />
      <circle cx="2" cy="8" r="1.5" fill="currentColor" />
      <circle cx="3.5" cy="3.5" r="1.5" fill="currentColor" />
    </svg>
  )

  const containerClasses = {
    left: 'flex flex-col items-start gap-4',
    center: 'flex flex-col items-center gap-4',
    right: 'flex flex-col items-end gap-4',
  }

  return (
    <div className={containerClasses[alignment]}>
      {showDividers && alignment === 'center' && decorative && (
        <div className="flex items-center gap-2 text-warm-600">
          <div className="h-px w-24 bg-warm-600" />
          <FlowerIcon />
          <div className="h-px w-24 bg-warm-600" />
        </div>
      )}

      <h2 className={`text-h2 text-cool-900 font-quincy ${alignmentClasses[alignment]}`}>
        {children}
      </h2>

      {showDividers && alignment === 'center' && decorative && (
        <div className="h-px w-full bg-warm-600 opacity-30" />
      )}
    </div>
  )
}
