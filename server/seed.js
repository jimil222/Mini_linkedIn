import mongoose from "mongoose";
import dotenv from "dotenv";
import Post from "./models/Post.js";

dotenv.config();

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

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Post.deleteMany();
    await Post.insertMany(mockPosts);
    console.log("Mock posts seeded successfully");
    process.exit();
  } catch (err) {
    console.error("Seeding failed", err);
    process.exit(1);
  }
};

seedDB();
