const fs = require('fs-extra')
const delay = require('delay')

const controller = require("./controller")

console.log("Endpoint Finder v0.0.1\n")

async function start() {
    const config = fs.readJSONSync("./config.json")
    const URL = config.URL.replace(/https?:\/\//, "").replace('/', '')

    console.log("Starting for URL", URL)

    const listSize = (await controller.size(URL)).full_size

    let listCount = 0

    while (listCount <= listSize) {
        console.log("Fetching page", listCount + 1)

        const response = await controller.url(URL, listCount + 1)

        let urls = []

        response.url_list.forEach(obj => { urls.push(obj.url) })

        fs.writeFileSync(`./data/${Date.now()}-${URL}-${listCount + 1}.txt`, urls.join("\n"))

        listCount++

        await delay(1500)
    }
}

start()