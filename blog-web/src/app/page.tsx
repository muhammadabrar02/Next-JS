import Link from 'next/link'

// This data would typically come from a database or API
const posts = [
  { id: 1, title: 'First Blog Post', slug: 'first-blog-post' },
  { id: 2, title: 'Second Blog Post', slug: 'second-blog-post' },
  { id: 3, title: 'Third Blog Post', slug: 'third-blog-post' },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="bg-white shadow rounded-lg p-4">
            <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline text-xl">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

