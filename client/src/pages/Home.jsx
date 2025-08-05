import axios from "axios";
import PostForm from "../components/PostForm"
import PostCard from "../components/PostCard"

function Home({ posts, addPost, user, setPosts }) {
  const handleLike = async (postId) => {
    try {
      const res = await axios.patch(`https://proconnect-backend-0sv8.onrender.com/api/posts/${postId}/like`, {
        user: user.email, 
      });

      const updatedLikes = res.data.likes;

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, likes: updatedLikes } : post
        )
      );
    } catch (err) {
      console.error("Error liking post:", err.message);
    }
  };
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <PostForm addPost={addPost} />
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} user={user} onLike={handleLike} />
        ))}
      </div>
    </div>
  )
}

export default Home; 