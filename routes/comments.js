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
                error: "The comments information could not be retrieved."
            })
        })
})

// db request not written to filter by postID
/* router.get("/:commentId", (req, res) => {

    console.log(req.params.commentId)
    db.findCommentById(req.params.commentId)
        .then(comment => {
            if (comment) {
                res.json(comment)
            } else {
                res.status(404).json({
                    message: "Comment not found!"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                error: "Could not find post comment"
            })
        })
})
 */

module.exports = router