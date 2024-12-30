import { notFound } from 'next/navigation'
import Comments from '@/app/components/Comments'

// This data would typically come from a database or API
const posts = [
  { id: 1, title: 'First Blog Post', slug: 'first-blog-post', content: 'This is the content of the first blog post.' },
  { id: 2, title: 'Second Blog Post', slug: 'second-blog-post', content: 'This is the content of the second blog post.' },
  { id: 3, title: 'Third Blog Post', slug: 'third-blog-post', content: 'This is the content of the third blog post.' },
]

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params; // Await the params object

  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-8">{post.content}</p>
      <Comments />
    </div>
  )
}
