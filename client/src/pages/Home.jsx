import PostForm from "../components/PostForm.jsx"
import PostCard from "../components/PostCard.jsx"

const Home = ({ posts, addPost }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <PostForm addPost={addPost} />
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}


export default Home
