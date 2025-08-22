import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/mongoose.config.js"
import urlRoutes from "./routes/shortUrl.routes.js"

dotenv.config({})

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", urlRoutes)

app.get("/:id", async(req, res) => {
    const {id} = req.params
    const url = await urlSchema.findOne({short_url: id})
    if(url) {
        res.redirect(url.full_url)
    } else {
        res.status(404).send("Not Found")
    }
})

app.listen(5000, () => {
    connectDB()
    console.log("Server running on port 5000")
})