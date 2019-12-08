const express = require("express")
const db = require("../data/db") //import db functions

const router = express.Router()

// GET
router.get("/", (req, res) => {
    db.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(error => {
            res.status(500).json({
                message: "error returning ALL posts"
            })
        })
})

module.exports = router