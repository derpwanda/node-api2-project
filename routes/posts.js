const express = require("express")
const db = require("../data/db") //import db functions
const commentRouter = require("./comments")
const router = express.Router()

router.use("/:id/comments", commentRouter)

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

router.get("/:id", (req, res) => {
    console.log(req.params.id)
    db.findById(req.params.id)
        .then(post => {
            if (post) {
                res.status(200).json(post)
            } else {
                res.status(404).json({
                    message: "The post with the specified ID does not exist."
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                error: "The post information could not be retrieved."
            })
        })
})

//POST


module.exports = router