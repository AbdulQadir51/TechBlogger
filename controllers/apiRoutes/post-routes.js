const router = require("express").Router();

const { Post, User } = require("../../models");

// get all posts, similar to SELECT * FROM post;

router.get("/", (req, res) => {
    Post.findAll({
            attributes: ['id', 'title', 'content', 'date_created'],
            order: [
                ["date_created", "ASC"]
            ],
            include: [
                // include the Comment model here:
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'date_created'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then((postData) => res.json(postData))
        .catch((err) => {
            console.log(
                err,
                "There was a problem with getting all Post.. Try again!"
            );
        });
});

// GET POST BY ID, similar to SELECT * FROM posts, where id = ?
router.get("/:id", (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['id', 'title', 'content', 'date_created'],
            include: [{
                model: User,
                attributes: ['username']
            }]

        })
        .then((postData) => {
            if (!postData) {
                res.status(404).json({
                    message: "There's no post found with this ID, Try Again...",
                });
            }
            res.json(postData);
        })
        .catch((err) => {
            console.log(
                err,
                "There was an error in getting a single post ID, Try again"
            );
            res.status(500).json(err);
        });
});

router.post("/", (req, res) => {
    // expect title, date_created, content, user_id
    var user_id = null;
    if (req.session.user_id != null) {
        user_id = req.session.user_id;
    } else {
        user_id = req.body.user_id;
    }
    Post.create({
            title: req.body.title,
            date_created: req.body.date_created,
            content: req.body.content,
            user_id: user_id,
        })
        .then((postData) => {
            res.json(postData);
        })
        .catch((err) => {
            console.log(err, "There was an error in creating/POST new post ");
            res.status(500).json(err);
        });
});



router.put("/:id", (req, res) => {
    Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        .then((postData) => {
            if (!postData) {
                res
                    .status(404)
                    .json({ message: "No post found with this ID, Try again..." });
            }
            res.json(postData);
        })
        .catch((err) => {
            console.log(err, "There was an error in UPDATING/PUT post");
            res.status(500).json(err);
        });
});

router.delete("/:id", (req, res) => {
    Post.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((postData) => {
            if (!postData) {
                res
                    .status(404)
                    .json({ message: "There is no Post with this ID.. Try again" });
            }
            res.json(postData);
        })
        .catch((err) => {
            console.log(err, "There was a problem with deleting a postData");
            res.status(500).json(err);
        });
});

module.exports = router;