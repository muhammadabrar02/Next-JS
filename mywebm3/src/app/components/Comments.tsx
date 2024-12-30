'use client'

import { useState } from 'react'

export default function Comments() {
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
      <ul className="space-y-4 mb-4">
        {comments.map((comment, index) => (
          <li key={index} className="bg-gray-100 p-3 rounded">
            {comment}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
          placeholder="Write a comment..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Comment
        </button>
      </form>
    </div>
  )
}

