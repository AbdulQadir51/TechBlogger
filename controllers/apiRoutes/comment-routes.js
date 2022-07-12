const router = require("express").Router();

const { Post, Comment } = require("../../models");

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