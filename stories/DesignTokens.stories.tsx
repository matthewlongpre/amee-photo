import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

const colors = {
  neutrals: [
    { name: 'accent-1', value: '#FAFAFA', description: 'Off-white background' },
    { name: 'accent-2', value: '#EAEAEA', description: 'Light gray' },
    { name: 'accent-7', value: '#333', description: 'Dark charcoal' },
  ],
  accent: [
    { name: 'success', value: '#0070f3', description: 'Success state' },
    { name: 'cyan', value: '#79FFE1', description: 'Accent cyan' },
    { name: 'blue-500', value: '#2276FC', description: 'Primary blue' },
    { name: 'yellow-100', value: '#fef7da', description: 'Warm yellow' },
  ],
}

const typography = {
  font_families: {
    heading: 'Quincy, serif',
    body: 'Karla, sans-serif',
  },
  sizes: [
    { size: '5xl', value: '2.5rem', usage: 'Large display headings' },
    { size: '6xl', value: '2.75rem', usage: 'Display headings' },
    { size: '7xl', value: '4.5rem', usage: 'Extra large headings' },
    { size: '8xl', value: '6.25rem', usage: 'Hero/banner headings' },
  ],
  line_height: {
    tight: 1.2,
  },
  letter_spacing: {
    tighter: '-.04em',
  },
}

const spacing = {
  units: [
    { size: '28', value: '7rem', usage: 'Large spacing' },
  ],
}

const shadows = [
  { name: 'small', value: '0 5px 10px rgba(0, 0, 0, 0.12)', usage: 'Subtle elevation' },
  { name: 'medium', value: '0 8px 30px rgba(0, 0, 0, 0.12)', usage: 'Standard elevation' },
]

const ColorSwatch = ({ name, value, description }: { name: string; value: string; description: string }) => (
  <div className="flex items-center gap-4 p-4 border border-accent-2 rounded">
    <div
      className="w-16 h-16 rounded border border-accent-2"
      style={{ backgroundColor: value }}
      title={value}
    />
    <div>
      <div className="font-semibold text-accent-7">{name}</div>
      <div className="text-sm text-gray-600">{value}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </div>
  </div>
)

export const Colors = () => (
  <div className="p-8 bg-white">
    <h1 className="text-7xl font-bold mb-8" style={{ fontFamily: 'Quincy, serif' }}>
      Color Palette
    </h1>

    <div className="mb-12">
      <h2 className="text-4xl font-semibold mb-6 text-accent-7" style={{ fontFamily: 'Quincy, serif' }}>
        Neutrals
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {colors.neutrals.map((color) => (
          <ColorSwatch key={color.name} {...color} />
        ))}
      </div>
    </div>

    <div>
      <h2 className="text-4xl font-semibold mb-6 text-accent-7" style={{ fontFamily: 'Quincy, serif' }}>
        Accent Colors
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {colors.accent.map((color) => (
          <ColorSwatch key={color.name} {...color} />
        ))}
      </div>
    </div>
  </div>
)

export const Typography = () => (
  <div className="p-8 bg-white">
    <h1 className="text-7xl font-bold mb-8" style={{ fontFamily: 'Quincy, serif' }}>
      Typography
    </h1>

    <div className="mb-12">
      <h2 className="text-4xl font-semibold mb-6 text-accent-7" style={{ fontFamily: 'Quincy, serif' }}>
        Font Families
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="p-6 border border-accent-2 rounded">
          <div
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: typography.font_families.heading }}
          >
            Quincy
          </div>
          <div className="text-sm text-gray-600">Heading font (serif)</div>
        </div>
        <div className="p-6 border border-accent-2 rounded">
          <div
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: typography.font_families.body }}
          >
            Karla
          </div>
          <div className="text-sm text-gray-600">Body font (sans-serif)</div>
        </div>
      </div>
    </div>

    <div className="mb-12">
      <h2 className="text-4xl font-semibold mb-6 text-accent-7" style={{ fontFamily: 'Quincy, serif' }}>
        Font Sizes
      </h2>
      <div className="space-y-4">
        {typography.sizes.map((item) => (
          <div key={item.size} className="p-4 border border-accent-2 rounded">
            <div
              className="font-bold text-accent-7 mb-2"
              style={{ fontSize: item.value, fontFamily: 'Quincy, serif' }}
            >
              {item.size}
            </div>
            <div className="text-sm text-gray-600">
              {item.value} • {item.usage}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-12">
      <h2 className="text-4xl font-semibold mb-6 text-accent-7" style={{ fontFamily: 'Quincy, serif' }}>
        Line Height & Letter Spacing
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="p-4 border border-accent-2 rounded">
          <div className="text-sm font-semibold text-accent-7 mb-2">Tight Line Height</div>
          <div style={{ lineHeight: typography.line_height.tight }}>
            The quick brown fox jumps over the lazy dog. This text demonstrates the tight line height setting of{' '}
            {typography.line_height.tight}.
          </div>
        </div>
        <div className="p-4 border border-accent-2 rounded">
          <div className="text-sm font-semibold text-accent-7 mb-2">Tighter Letter Spacing</div>
          <div style={{ letterSpacing: typography.letter_spacing.tighter }}>
            The quick brown fox jumps over the lazy dog
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const Spacing = () => (
  <div className="p-8 bg-white">
    <h1 className="text-7xl font-bold mb-8" style={{ fontFamily: 'Quincy, serif' }}>
      Spacing System
    </h1>

    <div className="space-y-6">
      {spacing.units.map((unit) => (
        <div key={unit.size} className="p-4 border border-accent-2 rounded">
          <div className="text-sm font-semibold text-accent-7 mb-3">
            {unit.size} ({unit.value})
          </div>
          <div className="flex items-center gap-4">
            <div
              className="bg-blue-500 rounded"
              style={{ width: unit.value, height: '40px' }}
            />
            <div className="text-sm text-gray-600">{unit.usage}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export const Shadows = () => (
  <div className="p-8 bg-accent-1">
    <h1 className="text-7xl font-bold mb-8 text-accent-7" style={{ fontFamily: 'Quincy, serif' }}>
      Shadows
    </h1>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {shadows.map((shadow) => (
        <div key={shadow.name}>
          <div className="mb-4">
            <div className="text-lg font-semibold text-accent-7 mb-2">{shadow.name}</div>
            <div className="text-sm text-gray-600">{shadow.value}</div>
            <div className="text-xs text-gray-500">{shadow.usage}</div>
          </div>
          <div
            className="bg-white p-12 rounded"
            style={{ boxShadow: shadow.value }}
          >
            <div className="text-center text-gray-400">Elevated element</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export const Overview = () => (
  <div className="p-8 bg-white">
    <h1
      className="text-8xl font-bold mb-4 text-accent-7"
      style={{ fontFamily: 'Quincy, serif' }}
    >
      Design System
    </h1>
    <p className="text-xl text-gray-600 mb-12" style={{ fontFamily: 'Karla, sans-serif' }}>
      Comprehensive design tokens for the amee-photo portfolio
    </p>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
      <div className="p-6 border border-accent-2 rounded">
        <div className="text-2xl font-bold text-accent-7 mb-2">7</div>
        <div className="text-sm text-gray-600">Total Colors</div>
      </div>
      <div className="p-6 border border-accent-2 rounded">
        <div className="text-2xl font-bold text-accent-7 mb-2">4</div>
        <div className="text-sm text-gray-600">Font Sizes</div>
      </div>
      <div className="p-6 border border-accent-2 rounded">
        <div className="text-2xl font-bold text-accent-7 mb-2">2</div>
        <div className="text-sm text-gray-600">Shadow Utilities</div>
      </div>
      <div className="p-6 border border-accent-2 rounded">
        <div className="text-2xl font-bold text-accent-7 mb-2">2</div>
        <div className="text-sm text-gray-600">Font Families</div>
      </div>
    </div>

    <div className="bg-accent-1 p-8 rounded">
      <h2 className="text-3xl font-semibold text-accent-7 mb-4" style={{ fontFamily: 'Quincy, serif' }}>
        Quick Reference
      </h2>
      <ul className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Karla, sans-serif' }}>
        <li>• Headings: Quincy (serif) font family</li>
        <li>• Body text: Karla (sans-serif) font family</li>
        <li>• Primary neutrals: accent-1 through accent-7</li>
        <li>• Accent colors: success, cyan, blue-500, yellow-100</li>
        <li>• Box shadows: small and medium elevation levels</li>
        <li>• Tight line height: 1.2 for compact text</li>
      </ul>
    </div>
  </div>
)
