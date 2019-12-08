const express = require('express')
const welcomeRouter = require("./routes/welcome")
const postRouter = require("./routes/posts")

const server = express()

server.use(express.json())
server.use("/", welcomeRouter)
server.use("/api/posts", postRouter)

server.listen(9000, () => {
    console.log("\n*** Server Running on http://localhost:9000 ***\n")
})