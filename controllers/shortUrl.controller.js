import { getShortUrl } from "../dao/shortUrl.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/shortUrl.service.js"
import wrapAsync from "../utils/tryCatchWrapper.js"

export const createShortUrl = wrapAsync(async (req, res) => {
    let shortUrl
    if(req.user) {
        shortUrl = await createShortUrlWithUser(url)
    } else {
        shortUrl = await createShortUrlWithoutUser(url)
    }
    res.status(200).json({
        shortUrl: process.env.APP_URL + shortUrl
    })
})

export const redirectFromShortUrl = wrapAsync(async (req,res)=>{
    const {id} = req.params
    const url = await getShortUrl(id)
    if(!url) throw new Error("Short URL not found")
    res.redirect(url.full_url)
})