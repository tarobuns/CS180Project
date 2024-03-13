import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import likeRoutes from "./routes/likes.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";

const app = express();

// Set up CORS middleware with the correct configuration
app.use(cors({
    origin: "http://localhost:3000", // This should match the domain of your front-end app
    credentials: true, // This will allow sending of cookies and authorization headers with the request
}));

// Parse cookies from the HTTP Request
app.use(cookieParser());

// Parse JSON payloads
app.use(express.json());

// Define your routes
app.use("/backend/users", userRoutes);
app.use("/backend/posts", postRoutes);
app.use("/backend/likes", likeRoutes);
app.use("/backend/comments", commentRoutes);
app.use("/backend/auth", authRoutes);

app.listen(8800, () => {
    console.log("Connected to backend!");
});
