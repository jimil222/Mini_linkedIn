"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Profile from "./pages/Profile"

// Mock data
const mockPosts = [
  {
    id: 1,
    author: "John Doe",
    content: "Just finished an amazing project! Excited to share the results with the team.",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    author: "Sarah Wilson",
    content: "Great networking event today. Met so many talented professionals in the tech industry.",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    author: "Mike Johnson",
    content: "Celebrating 5 years at my current company! Time flies when you love what you do.",
    timestamp: "1 day ago",
  },
]

const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  bio: "Software Developer passionate about creating innovative solutions. Love working with React and modern web technologies.",
  posts: [
    {
      id: 1,
      content: "Just finished an amazing project! Excited to share the results with the team.",
      timestamp: "2 hours ago",
    },
  ],
}

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isLoggedIn, setIsLoggedIn] = useState(true) // Set to true for demo
  const [posts, setPosts] = useState(mockPosts)
  const [user, setUser] = useState(mockUser)

  const addPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      author: user.name,
      content,
      timestamp: "Just now",
    }
    setPosts([newPost, ...posts])
  }

  const renderPage = () => {
    if (!isLoggedIn && currentPage !== "register") {
      return <Login setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />
    }

    switch (currentPage) {
      case "register":
        return <Register setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />
      case "login":
        return <Login setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />
      case "profile":
        return <Profile user={user} />
      default:
        return <Home posts={posts} addPost={addPost} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoggedIn && (
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} user={user} />
      )}
      <main className={isLoggedIn ? "pt-16" : ""}>{renderPage()}</main>
    </div>
  )
}

export default App
