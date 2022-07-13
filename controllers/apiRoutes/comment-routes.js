const router = require("express").Router();

const { User, Comment } = require("../../models");

// get all posts, similar to SELECT * FROM post;

router.get("/", (req, res) => {
    Comment.findAll({
            attributes: ['id', 'comment_text', 'user_id', 'post_id', 'date_created'],
            order: [
                ["date_created", "ASC"]
            ],
            include: [{
                model: User,
                attributes: ['username']
            }]
        })
        .then((commentData) => res.json(commentData))
        .catch((err) => {
            console.log(
                err,
                "There was a problem with getting all Comments.. Try again!"
            );
        });
});

router.post("/", (req, res) => {
    // expect comment_text, user_id, post_id
    var user_id = null;
    if (req.session.user_id != null) {
        user_id = req.session.user_id;
    } else {
        user_id = req.body.user_id;
    }
    Comment.create({
            comment_text: req.body.comment_text,
            user_id: user_id,
            post_id: req.body.post_id
        })
        .then((commentData) => {
            res.json(commentData);
        })
        .catch((err) => {
            console.log(err, "There was an error in creating/POST new Comment ");
            res.status(500).json(err);
        });
})


module.exports = router;