const mysql = require("mysql")
const util = require("util")




var connection;

if( process.env.JAWSDB_URL) {
  console.log("Daws_DB")
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}   else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Regular855!",
    database: "burgers_db"
    
          });
    }

connection.connect(function(error) {
    if (error) {
     console.log(error)
    }

    console.log("Success")
  });

module.exports = connection