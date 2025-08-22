import { generateNanoId } from "../utils/helper.js"

export const createShortUrlService = (url) => {
    const shortUrl = generateNanoId(7)
    const newUrl = new UrlSchema({
        full_url: url,
        short_url: shortUrl
    })
    newUrl.save()
    return shortUrl
}