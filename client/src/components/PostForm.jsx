"use client"

import { useState } from "react"

const PostForm = ({ addPost }) => {
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (content.trim()) {
      addPost(content)
      setContent("")
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows="4"
        />
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            disabled={!content.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostForm
