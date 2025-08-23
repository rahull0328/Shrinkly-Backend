import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/mongoose.config.js"
import urlRoutes from "./routes/shortUrl.routes.js"
import urlSchema from "./models/shortUrl.model.js"

dotenv.config({})

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/url", urlRoutes)

app.listen(5000, () => {
    connectDB()
    console.log("Server running on port 5000")
})