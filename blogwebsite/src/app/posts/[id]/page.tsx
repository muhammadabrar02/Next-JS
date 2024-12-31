import { posts } from '../../data/posts';
import Comments from './comments';

export default async function Post({ params }: { params: { id: string } }) {
  // Await the params explicitly to handle async resolution
  const id = (await params).id;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-8">{post.content}</p>
      <Comments postId={post.id} />
    </div>
  );
}
