const express = require('express')

const server = express()

server.use(express.json())

server.listen(9000, () => {
    console.log("\n*** Server Running on http://localhost:9000 ***\n")
})