import { ThumbsUp } from "lucide-react";

const PostCard = ({ post, user, onLike }) => {
  const authorName = post.author?.name || "Unknown";

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          {authorName.charAt(0)}
        </div>
        <div className="ml-3">
          <h3 className="font-semibold text-gray-900">{authorName}</h3>
          <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
        </div>
      </div>
      <p className="text-gray-800 leading-relaxed">{post.content}</p>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex space-x-6">
          <button
            onClick={() => onLike(post._id)}
            className={`flex items-center text-sm ${
              user && post.likes.includes(user.email)
                ? "text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            <span className="mr-1 flex gap-2 items-center cursor-pointer">
              <ThumbsUp className="w-5 h-5" />
              <p>{post.likes.length}</p>
            </span>
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
  );
};

export default PostCard;
