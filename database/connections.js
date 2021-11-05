var mysql = require("mysql");
const DB_HOST       = process.env.DB_HOST
const DB_DATABASE   = process.env.DB_DATABASE
const DB_USERNAME   = process.env.DB_USERNAME
const DB_PASSWORD   = process.env.DB_PASSWORD

// Set up our connection information
var connection = mysql.createConnection({
  host: DB_HOST,
  port: 3306,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  //console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
