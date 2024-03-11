import express from "express"
import { Login, Register, Logout } from "../controllers/auth.js"

const router = express.Router()

router.post("login", Login)
router.post("register", Register)
router.post("login", Logout)

export default router