//dependencies
const express = require("express");
const cors = require("cors");
const connection = require("../database/connections");
const schema = process.env.DB_DATABASE

const Grids = express.Router();
Grids.use(cors())

//returns column names for users table
Grids.get("/columns/users", function (req, res) {
    connection.query("SELECT * FROM information_schema.columns WHERE table_schema = '"+schema+"' AND table_name = 'Users'", function (err, data) {
        var columns = []
        data.forEach((column) => {
            columns.push(column.COLUMN_NAME)
        })
        res.send(columns);
    });
});

Grids.get("/columns/test", function (req, res) {
    connection.query("SELECT * FROM information_schema.columns WHERE table_schema = '"+schema+"' AND table_name = 'Users'", function (err, data) {
        var columns = []
        data.forEach((column) => {
            columns.push(column.COLUMN_NAME)
        })
        res.send(columns);
    });
});


module.exports = Grids