import express from "express"
import { createShortUrl, redirectFromShortUrl } from "../controllers/shortUrl.controller.js"

const router = express.Router()

router.post("/create", createShortUrl)
router.get("/:id", redirectFromShortUrl)

export default router;