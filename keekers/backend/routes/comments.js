import express from "express";
import { getComments, insertComment } from "../controllers/comment.js";

const router = express.Router()

router.get("/", insertComment)
router.get("/", getComments)

export default router