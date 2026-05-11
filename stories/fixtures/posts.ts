import { PostProps, Vendor } from '@/types'

const sampleImage = (id: string) => ({
  asset: {
    url: `https://images.unsplash.com/photo-${id}?w=800&h=600&fit=crop`,
  },
})

const vendors: Vendor[] = [
  { name: 'Birds Eye Cove Farm', category: 'Venue' },
  { name: 'Jess Tyrer', category: 'Hair' },
  { name: 'Melanie Baird', category: 'Makeup' },
  { name: 'Taco Revolution', category: 'Catering' },
  { name: "Gibby's Cafe & Catering", category: 'Catering' },
  { name: 'Cheryl, Thrifty Foods Sidney', category: 'Flowers' },
  { name: 'Unbridled Courtney', category: 'Dress' },
  { name: 'Moores', category: 'Suits' },
]

export const mockFeaturedPosts: PostProps[] = [
  {
    _id: 'post-1',
    title: 'Jenna & Jordan',
    subTitle: 'Downtown Victoria Engagement',
    slug: 'jenna-jordan-engagement',
    date: '2023-08-12',
    excerpt:
      'A beautiful engagement session capturing the love between Jenna and Jordan in downtown Victoria.',
    coverImage: sampleImage('1529156069898'),
    author: { name: 'Amee Longpre' },
    name: 'Jenna & Jordan',
    content: [],
  },
  {
    _id: 'post-2',
    title: 'Sarah & Michael',
    subTitle: 'Seaside Wedding Celebration',
    slug: 'sarah-michael-wedding',
    date: '2023-07-15',
    excerpt:
      'An intimate seaside wedding with stunning natural light and heartfelt moments.',
    coverImage: sampleImage('1511895426328'),
    author: { name: 'Amee Longpre' },
    name: 'Sarah & Michael',
    content: [],
  },
  {
    _id: 'post-3',
    title: 'Emily & Christopher',
    subTitle: 'Garden Romance',
    slug: 'emily-christopher-wedding',
    date: '2023-06-20',
    excerpt:
      'A romantic garden wedding with gorgeous florals and intimate details.',
    coverImage: sampleImage('1520763185298'),
    author: { name: 'Amee Longpre' },
    name: 'Emily & Christopher',
    content: [],
  },
]

export const mockStories: PostProps[] = [
  {
    _id: 'post-featured-1',
    title: 'Jenna & Jordan',
    subTitle: 'Downtown Victoria Engagement',
    slug: 'jenna-jordan-engagement',
    date: '2023-08-12',
    excerpt:
      'A beautiful engagement session capturing the love between Jenna and Jordan in downtown Victoria.',
    coverImage: sampleImage('1529156069898'),
    author: { name: 'Amee Longpre' },
    name: 'Jenna & Jordan',
    content: [],
  },
  {
    _id: 'post-2',
    title: 'Sarah & Michael',
    subTitle: 'Seaside Wedding Celebration',
    slug: 'sarah-michael-wedding',
    date: '2023-07-15',
    excerpt:
      'An intimate seaside wedding with stunning natural light and heartfelt moments.',
    coverImage: sampleImage('1511895426328'),
    author: { name: 'Amee Longpre' },
    name: 'Sarah & Michael',
    content: [],
  },
  {
    _id: 'post-3',
    title: 'Emily & Christopher',
    subTitle: 'Garden Romance',
    slug: 'emily-christopher-wedding',
    date: '2023-06-20',
    excerpt:
      'A romantic garden wedding with gorgeous florals and intimate details.',
    coverImage: sampleImage('1520763185298'),
    author: { name: 'Amee Longpre' },
    name: 'Emily & Christopher',
    content: [],
  },
  {
    _id: 'post-4',
    title: 'Lisa & David',
    subTitle: 'Intimate Elopement',
    slug: 'lisa-david-elopement',
    date: '2023-05-10',
    excerpt:
      'An intimate elopement in the mountains with breathtaking views and pure love.',
    coverImage: sampleImage('1459181286763'),
    author: { name: 'Amee Longpre' },
    name: 'Lisa & David',
    content: [],
  },
  {
    _id: 'post-5',
    title: 'Amanda & Ryan',
    subTitle: 'Rustic Farm Wedding',
    slug: 'amanda-ryan-farm-wedding',
    date: '2023-04-22',
    excerpt:
      'A rustic farm wedding with charming details and warm, candid moments.',
    coverImage: sampleImage('1519741497674'),
    author: { name: 'Amee Longpre' },
    name: 'Amanda & Ryan',
    content: [],
  },
  {
    _id: 'post-6',
    title: 'Nicole & James',
    subTitle: 'Modern Urban Wedding',
    slug: 'nicole-james-urban-wedding',
    date: '2023-03-18',
    excerpt: 'A sleek, modern wedding in the heart of the city with urban aesthetics.',
    coverImage: sampleImage('1442512917368'),
    author: { name: 'Amee Longpre' },
    name: 'Nicole & James',
    content: [],
  },
]

export const mockSingleStoryWithCover: PostProps & {
  body: Array<{ _type: string; children?: Array<{ text: string }> }>
  vendors?: Vendor[]
  gallery?: Array<{ asset: { url: string } }>
} = {
  _id: 'post-single-1',
  title: 'Jenna & Jordan',
  subTitle: 'Downtown Victoria Engagement',
  slug: 'jenna-jordan-engagement',
  date: '2023-08-12',
  excerpt: 'A beautiful engagement session downtown.',
  coverImage: sampleImage('1529156069898'),
  author: { name: 'Amee Longpre' },
  name: 'Jenna & Jordan',
  content: [],
  body: [
    {
      _type: 'block',
      children: [
        {
          text: 'Another incredible wedding day at Birds Eye Cove Farm. This day was perfection from start to finish – what an honour to capture so much love and emotion! The couple had the most incredible energy together, and it was reflected in every single shot. The venue provided a stunning backdrop, and the weather was absolutely perfect.',
        },
      ],
    },
  ],
  vendors: vendors.slice(0, 5),
  gallery: [
    { asset: { url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&h=800&fit=crop' } },
    { asset: { url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1000&h=800&fit=crop' } },
    { asset: { url: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=1000&h=800&fit=crop' } },
    { asset: { url: 'https://images.unsplash.com/photo-1459181286763-c409eac34cea?w=1000&h=800&fit=crop' } },
  ],
}

export const mockSingleStoryNoCover: PostProps & {
  body: Array<{ _type: string; children?: Array<{ text: string }> }>
  vendors?: Vendor[]
  gallery?: Array<{ asset: { url: string } }>
} = {
  _id: 'post-single-2',
  title: "How to edit using Lightroom's new Artificial Intelligence",
  subTitle: "It's easier than you may think",
  slug: 'lightroom-ai-editing-tutorial',
  date: '2023-08-12',
  excerpt: 'Tutorial on editing photos using Lightroom AI.',
  author: { name: 'Amee Longpre' },
  name: 'Lightroom AI Tutorial',
  content: [],
  body: [
    {
      _type: 'block',
      children: [
        {
          text: "Lightroom's new AI-powered editing tools have revolutionized the way photographers approach post-processing. These intelligent features can analyze your images and suggest adjustments that work perfectly with your specific photo. In this comprehensive guide, I'll walk you through the process of using these tools to enhance your images quickly and efficiently.",
        },
      ],
    },
  ],
  gallery: [
    { asset: { url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1000&h=800&fit=crop' } },
    { asset: { url: 'https://images.unsplash.com/photo-1516035069371-29a08029fc0b?w=1000&h=800&fit=crop' } },
    { asset: { url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1000&h=800&fit=crop' } },
    { asset: { url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000&h=800&fit=crop' } },
  ],
}
