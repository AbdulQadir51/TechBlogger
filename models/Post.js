const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        },
    },
}, {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post"
});

module.exports = Post;