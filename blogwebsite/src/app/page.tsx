import Link from 'next/link'
import { getPosts } from './lib/data'

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
            <Link href={`/posts/${post.id}`} className="text-xl font-semibold hover:underline text-blue-600">
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

