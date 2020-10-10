// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps

  app.get("/chirps", function (res, req) {
      mysql.query("USE TABLE chirps", function (data){
          res.json(data)
      })
      
  })

  // Add a chirp


}