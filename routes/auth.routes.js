import express from "express"
import { register, login, logout, getCurrentUser } from "../controllers/auth.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.get("/profile", getCurrentUser)

export default router