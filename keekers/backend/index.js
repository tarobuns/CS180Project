import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import likeRoutes from "./routes/likes.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors({
    origin: "http://localhost:3000", //connect to it using cors and set to true
    credentials: true, 
}));


app.use(cookieParser());

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
