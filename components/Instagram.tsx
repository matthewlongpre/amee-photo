interface InstagramMedia {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  permalink: string
}

async function fetchInstagramPosts(): Promise<InstagramMedia[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const userId = process.env.INSTAGRAM_USER_ID
  if (!token || !userId) return []

  try {
    const res = await fetch(
      `https://graph.instagram.com/v21.0/${userId}/media?fields=id,media_type,media_url,thumbnail_url,permalink&limit=6&access_token=${token}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.data ?? []
  } catch {
    return []
  }
}

export default async function Instagram() {
  const posts = await fetchInstagramPosts()

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
      {posts.length > 0 && (
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          {posts.map((post, index) => {
            const src = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url
            if (!src) return null
            return (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square w-full overflow-hidden block"
              >
                <img
                  src={src}
                  alt={`Instagram post ${index + 1}`}
                  className="h-full w-full object-cover transition-opacity hover:opacity-90"
                />
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
