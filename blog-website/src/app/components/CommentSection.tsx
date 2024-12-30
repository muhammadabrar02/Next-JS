'use client'

import { useState } from 'react'

export default function CommentSection({ postId }: { postId: number }) {
  const [comments, setComments] = useState<string[]>([])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([...comments, newComment])
      setNewComment('')
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments.length === 0 ? (
        <p className="mb-4">No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="mb-4 space-y-2">
          {comments.map((comment, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded">{comment}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit} className="space-y-2">
        <textarea
          className="w-full p-2 border rounded"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          rows={3}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Post Comment
        </button>
      </form>
    </div>
  )
}
