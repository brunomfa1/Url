const Sequelize = require('sequelize');
const database = require('../db');
 
const Link = database.define('link', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: Sequelize.STRING,
        
    },
    url: {
        type: Sequelize.STRING,
        
    },
    hits: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
})
 
module.exports = Link;