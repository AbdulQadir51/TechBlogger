const router = require("express").Router();
const { Post, User } = require("../models");

// homepage handlebar route
router.get("/homepage", (req, res) => {
    Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
            order: [
                ["date_created", "DESC"]
            ],
            limit: 2,
        })
        .then((postData) => {
            const posts = postData.map((post) =>
                post.get({ plain: true })
            );


            res.render("homepage", { posts, loggedIn: req.session.loggedIn, username: req.session.username });
        })
        .catch((err) => {
            console.log(
                err,
                "There was a problem with getting all posts.. Try again!"
            );
        });
});

// main start handlebar route
router.get("/", (req, res) => {
    res.render("giphy", { loggedIn: req.session.loggedIn });
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