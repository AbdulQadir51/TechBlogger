const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

const sequelize = require("../config/connection");

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log("********User Seed***********");
    await seedUsers();
    console.log("********Posts Seed**********");
    await seedPosts();
    console.log("********Comments Seed**********");
    await seedComments();

    process.exit(0);
};
seedAll();