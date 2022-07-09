const { User } = require("../models");

const userSeedData = [{
        username: "George",
        email: "george@live.com",
        password: "test"

    },
    {
        username: "john",
        email: "john@live.com",
        password: "test"
    },
    {
        username: "mike",
        email: "mike@live.com",
        password: "test"
    },
    {
        username: "tanya",
        email: "tanya@live.com",
        password: "test"
    },
    {
        username: "lisa",
        email: "lisa@live.com",
        password: "test"
    },
    {
        username: "michelle",
        email: "michelle@live.com",
        password: "test"
    },
    {
        username: "tim",
        email: "tim@live.com",
        password: "test"
    },
    {
        username: "anthony",
        email: "anthony@live.com",
        password: "test"
    },
    {
        username: "tessa",
        email: "tessa@live.com",
        password: "test"
    },
];

const seedUsers = () =>
    User.bulkCreate(userSeedData, { individualHooks: true });

module.exports = seedUsers;