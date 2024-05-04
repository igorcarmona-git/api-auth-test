const sequelize = require('sequelize');

const db = new sequelize({
    dialect: 'sqlite',
    storage: './infra/database.sqlite'
});

module.exports = db;