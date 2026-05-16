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
    <div className={className}>
      <hr className="mb-8 border-warm-100" />
      <h3 className="font-quincy text-overline uppercase tracking-[2.4px] text-warm-600 mb-6">
        Vendors
      </h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {vendors.map((vendor, index) => (
          <div key={index}>
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
    </div>
  )
}
