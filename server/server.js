import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.get("/", (req, res) => {
  res.send("API is working!");
});

await connectDB()

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));