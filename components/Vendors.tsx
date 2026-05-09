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
      <h2 className="mb-4 text-2xl font-bold">Vendors</h2>
      <div className="flex flex-col gap-4">
        {vendors.map((vendor, index) => (
          <div key={index} className="flex items-start text-sm">
            <span className="min-w-[100px] font-semibold">
              {vendor.category}:
            </span>
            {vendor.url ? (
              <Link
                href={vendor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {vendor.name}
              </Link>
            ) : (
              <span>{vendor.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
