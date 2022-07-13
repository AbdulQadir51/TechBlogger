const { Post } = require("../models");

const postSeedData = [{
        title: "Twitter shares fall as Elon Musk backs out of deal",
        content: "Twitter's share price stood at about $32.64 as Monday trading closed - falling further below the $54.20-a-share takeover price agreed by Mr Musk and Twitter's board in April.",
        user_id: "1"
    },
    {
        title: "How science is making chocolate taste even better",
        content: "Scientists are trying to analyse where those special flavours come from, so they can be reproduced more consistently.Prof Irene Chetschik heads up the Research Group for Food Chemistry at Zurich University of Applied Sciences(ZHAW).She is developing new technological processes that can impact cocoa flavour on a molecular level - toget the best out of each harvest and create consistent quality.",
        user_id: 2
    }, {
        title: "Who are the hackers who say they started a fire in Iran?",
        content: "It's extremely rare for hackers, who operate in the digital world, to cause damage in the physical world. But a cyber-attack on a steel maker in Iran two weeks ago is being seen as one of those significant and troubling moments.",
        user_id: 3
    }

];

const seedPosts = () =>
    Post.bulkCreate(postSeedData, { individualHooks: true });

module.exports = seedPosts;