import { getPostById } from '../../lib/data'
import Comments from './comments'
import { notFound } from 'next/navigation'

export default async function Post({ params }: { params:  any  }) {
  // Access params.id directly
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-8 text-gray-700">{post.content}</p>
      <Comments postId={post.id} />
    </div>
  );
}
