import Link from 'next/link'

interface Vendor {
  category: string
  name: string
  url?: string
}

interface VendorsProps {
  className?: string
  vendors?: Vendor[]
}

export default function Vendors({ className, vendors = [] }: VendorsProps) {
  if (!vendors?.length) return null

  return (
    <div className={`bg-warm-100 p-6 flex flex-col items-center gap-2 shrink-0 lg:w-[328px] ${className ?? ''}`}>
      <p className="font-quincy text-overline uppercase tracking-[2.4px] text-warm-700 mb-2">
        Vendors
      </p>
      {vendors.map((vendor, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <p className="font-quincy text-overline uppercase tracking-[2.4px] text-warm-600">
            {vendor.category}
          </p>
          {vendor.url ? (
            <Link
              href={vendor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-karla text-body-sm text-cool-900 hover:text-warm-600 transition-colors"
            >
              {vendor.name}
            </Link>
          ) : (
            <p className="font-karla text-body-sm text-cool-900">{vendor.name}</p>
          )}
        </div>
      ))}
    </div>
  )
}
