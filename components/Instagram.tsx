'use client'

const images = [
  '/images/instagram-1.png',
  '/images/instagram-2.png',
  '/images/instagram-3.png',
  '/images/instagram-4.png',
  '/images/instagram-2.png',
  '/images/instagram-3.png',
]

export default function Instagram() {
  return (
    <div className="bg-white px-4 py-12 sm:px-8 lg:px-16 lg:py-20">
      {/* Title */}
      <div className="mb-10 flex items-center justify-center gap-8 lg:mb-16">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L10 6H15L11 9L13 15L8 12L3 15L5 9L1 6H6L8 1Z" fill="#A68F83" />
        </svg>
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-quincy text-h2 text-cool-900">Follow Me</h2>
          <p className="font-karla text-subheading-md text-warm-600">@amee.photo</p>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L10 6H15L11 9L13 15L8 12L3 15L5 9L1 6H6L8 1Z" fill="#A68F83" />
        </svg>
      </div>

      {/* Instagram Grid */}
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
        {images.map((image, index) => (
          <div key={index} className="aspect-square w-full overflow-hidden">
            <img
              src={image}
              alt={`Instagram post ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
