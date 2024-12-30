import { notFound } from 'next/navigation'
import CommentSection from '@/app/components/CommentSection'

// Mock data (replace with database/API data in real-world apps)
const posts = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
  { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
]

// Explicitly type the function parameters
interface PostProps {
  params: {
    id: string;
  };
}

export default function Post({ params }: PostProps) {
  const post = posts.find(p => p.id === parseInt(params.id, 10));

  if (!post) {
    notFound(); // Returns a 404 error page
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-8">{post.content}</p>
      <CommentSection postId={post.id} />
    </div>
  );
}
