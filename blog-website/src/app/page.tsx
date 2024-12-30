import Link from 'next/link'

// In a real application, this data would come from a database or API
const posts = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
  { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
]

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold mb-2">
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  )
}