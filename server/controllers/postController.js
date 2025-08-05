import Post from "../models/Post.js";

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate("author", "name email");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch posts", error: err.message });
  }
};

// Create post
export const createPost = async (req, res) => {
  try {
    const { content, author } = req.body;
    const newPost = new Post({ content, author });
    const savedPost = await newPost.save();
    await savedPost.populate("author", "name email");

    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: "Failed to create post", error: err.message });
  }
};

// Get posts by user ID
export const getPostsByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await Post.find({ author: id }).sort({ createdAt: -1 }).populate("author", "name email");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user's posts", error: err.message });
  }
};

// Like a post
// Like or Unlike a post
export const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { user } = req.body; 

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const alreadyLiked = post.likes.includes(user);

    if (alreadyLiked) {
      post.likes = post.likes.filter((u) => u !== user);
    } else {
      post.likes.push(user);
    }

    await post.save();

    res.json({
      message: alreadyLiked ? "Post unliked" : "Post liked",
      likes: post.likes,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to like post", error: err.message });
  }
};

