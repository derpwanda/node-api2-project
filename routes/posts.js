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
                error: "The posts information could not be retrieved."
            })
        })
})

router.get()

module.exports = router