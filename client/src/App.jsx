import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/posts");
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };
    fetchPosts();
  }, []);

  const addPost = async (content) => {
    try {
      const res = await axios.post("http://localhost:4000/api/posts", {
        content,
        author: user.id, 
      });
      setPosts((prev) => [res.data, ...prev]); 
    } catch (error) {
      console.error("Error adding post:", error.message);
    }
  };

  if (loading) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} />

      <main className="pt-16">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                posts={posts}
                addPost={addPost}
                user={user}
                isLoggedIn={isLoggedIn}
                setPosts={setPosts}
              />
            }
          />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
          <Route path="/profile" element={isLoggedIn ? <Profile user={user} /> : <Navigate to="/login" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
