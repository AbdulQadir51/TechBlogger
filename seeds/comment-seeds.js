const { Comment } = require("../models");

const commentSeedData = [{
        comment_text: "Elon Musk backs out of deal again !",
        post_id: 1,
        user_id: "1"
    },
    {
        comment_text: "Science is making chocolate taste even better :)",
        post_id: 2,
        user_id: 2
    }, {
        comment_text: "Hackers really say they started a fire in Iran?",
        post_id: 3,
        user_id: 3
    }

];

const seedComments = () =>
    Comment.bulkCreate(commentSeedData, { individualHooks: true });

module.exports = seedComments;