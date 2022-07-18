const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        },
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "post",
            key: "id",
        },
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
    }
}, {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
});

module.exports = Comment;