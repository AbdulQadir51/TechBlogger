const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// homepage handlebar route
router.get("/", (req, res) => {
    Post.findAll({
            include: [{
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'date_created'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }, {
                model: User,
                attributes: ['username']
            }],
            order: [
                ["date_created", "DESC"]
            ],
            limit: 5,
        })
        .then((postData) => {
            const posts = postData.map(post => post.get({ plain: true }));
            console.log(posts);
            res.render("homepage", { posts: posts, loggedIn: req.session.loggedIn, username: req.session.username });


        })
        .catch((err) => {
            console.log(
                err,
                "There was a problem with getting all posts.. Try again!"
            );
        });

});


// route for Posts detail Page
router.get("/post/:id", (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'content',
                'title',
                'date_created'
            ],
            include: [{
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
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            // serialize the data
            const post = dbPostData.get({ plain: true });

            // pass data to template
            res.render('post-detail', { post: post, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

// create post handlebar route
router.get("/createpost", (req, res) => {
    res.render("create-post");
});

// register handlebar route
router.get("/register", (req, res) => {
    res.render("register");
});

// login handlebar route
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render("login");
});

module.exports = router;