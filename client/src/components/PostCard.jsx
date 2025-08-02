const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          {post.author.charAt(0)}
        </div>
        <div className="ml-3">
          <h3 className="font-semibold text-gray-900">{post.author}</h3>
          <p className="text-sm text-gray-500">{post.timestamp}</p>
        </div>
      </div>
      <p className="text-gray-800 leading-relaxed">{post.content}</p>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex space-x-6">
          <button className="flex items-center text-gray-500 hover:text-blue-600 text-sm">
            <span className="mr-1">👍</span>
            Like
          </button>
          <button className="flex items-center text-gray-500 hover:text-blue-600 text-sm">
            <span className="mr-1">💬</span>
            Comment
          </button>
          <button className="flex items-center text-gray-500 hover:text-blue-600 text-sm">
            <span className="mr-1">🔄</span>
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostCard
