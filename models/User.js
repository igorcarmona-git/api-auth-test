const db = require("../infra/db");
const { DataTypes } = require("sequelize");

const User = db.define("user", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;