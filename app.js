import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/mongoose.config.js"
import urlRoutes from "./routes/shortUrl.routes.js"
import { redirectFromShortUrl } from "./controllers/shortUrl.controller.js"
import { errorHandler } from "./utils/errorHandler.js"
import cors from "cors"


dotenv.config({})

const app = express()

const allowedOrigin = [
    'http://localhost:5173',
]
app.use(cors({
    origin: allowedOrigin,
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/url", urlRoutes)
app.use("/:id", redirectFromShortUrl)
app.use(errorHandler)

app.listen(5000, () => {
    connectDB()
    console.log("Server running on port 5000")
})