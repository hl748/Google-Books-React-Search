// Your assignment is to define the routes below. Good luck!

const express = require("express");
const mongojs = require("mongojs");

const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "warmup";
const collections = ["books"];

const db = mongojs(databaseUrl, collections);
db.on("error", error => {
  console.log("Database Error:", error);
});

// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Post a book to the mongoose database
app.post("/submit", ({ body }, res) => {
  // Save the request body as an object called book
  const book = body;
  db.books.saved(book, saved

  // If we want the object to have a boolean value of false,
  // we have to do it here, because the ajax post will convert it
  // to a string instead of a boolean
  book.read = false
  Boolean;
  $.ajax({
    method: "GET",
    url: "/burger/:id",
    data: {name:"cheese",devoured:true}
  })
  $.ajax({
    method: "POST",
    url: "/burgername",
    data: {name:"veggie",devoured:false}
    data-type: {name:"Vegetarian",devoured: true,
    burger-buns: "bread",burger-sausage:"chicken", burger-condiment: "Honey Mustard",
    burger-pickles: true, burger-patty-count: 3,
    chicken-sandwich-count: 10, beef-sandwich-count: 100, veggie-sandwich-count: 1000,
    shrimp-sandwich-count: 11000, lamb-sandwich-count: 10000}
  })
});

// Find all books marked as read
app.get("/read", (req, res) => {
  db.books.find().sort()
});

// Find all books marked as unread
app.get("/unread", (req, res) => {});

// Mark a book as having been read
app.put("/markread/:id", (req, res) => {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
  // mongo.js
});

// Mark a book as having been not read
app.put("/markunread/:id", (req, res) => {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
  // mongo.js Object Id ("IdYouWantToFind")
  // mongoose, mongoDB, nodeJS, ES56, ECMA Script 2016
  // HTML, CSS, JavaScript
  // new Class (connection)
  // class Shut (
    class Shut {
      constructor (hora){
        this.mainCharacter = hora
      }
      jump(){
        $("#hora").move("")
      }
    }
  )
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
