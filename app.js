import express from "express"
import { nanoid } from "nanoid"
import dotenv from "dotenv"
import connectDB from "./config/mongoose.config.js"

dotenv.config({})

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/api/create", (req, res) => {
    const {url} = req.body
    res.send(nanoid(7))
})

app.listen(5000, () => {
    connectDB()
    console.log("Server running on port 5000")
})