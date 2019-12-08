const express = require("express")
const db = require("../data/db")

const router = express.Router({ mergeParams: true, })

// /api/post/id/comments
router.get("/", (req, res) => {
    db.findPostComments(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json({
                message: "Could not get hub messages"
            })
        })
})

module.exports = router