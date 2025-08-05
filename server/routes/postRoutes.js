import express from "express";
import {
  getAllPosts,
  createPost,
  likePost,
  getPostsByUserId
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.patch("/:postId/like", likePost);
router.get("/user/:id", getPostsByUserId);

export default router;
