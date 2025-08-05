import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

const Profile = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await axios.get(`https://proconnect-backend-0sv8.onrender.com/api/posts/user/${user.id}`);
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch user posts", err);
      }
    };

    if (user?.id) fetchUserPosts();
  }, [user]);

return (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-6">
      <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
      <p className="text-gray-600 mt-1">{user.email}</p>

      {user.bio ? (
        <p className="text-gray-700 mt-4">{user.bio}</p>
      ) : (
        <p className="text-gray-400 italic mt-4">No bio added.</p>
      )}
    </div>

    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4">My Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={post.id} post={post} user={user} onLike={() => {}} />
        ))
      ) : (
        <p className="text-gray-500 italic">You haven't posted anything yet.</p>
      )}
    </div>
  </div>
);
};

export default Profile;
