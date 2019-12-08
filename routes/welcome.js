const express = require('express')
const router = express.Router()

//endpoints
router.get('/', (req, res) => {
    res.send("<h2>Welcome to the Lambda Node II Project API</h>")
})

router.get('/api', (req, res) => {
    res.json({ message: "Welcome to the Lambda Node II Project API" })
})

module.exports = router