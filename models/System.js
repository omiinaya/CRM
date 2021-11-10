const Sequelize = require("sequelize")
const db = require("../database/db")

var Systems = db.sequelize.define(
    'system',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
    },
    {
        timestamps: false
    }
)

Systems.sync(/*{force: true}*/)

module.exports = Systems