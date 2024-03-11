import express from "express"
const app = express()
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import likeRoutes from "./routes/likes.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"

app.use(express.json())

app.use("/backend/users", userRoutes)
app.use("/backend/posts", postRoutes)
app.use("/backend/likes", likeRoutes)
app.use("/backend/comments", commentRoutes)
app.use("/backend/auth", authRoutes)

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})