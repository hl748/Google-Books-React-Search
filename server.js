const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const Book = require("./schema")
const mongojs = require("mongo")

// Define middleware here
app.use(express.limit("1mb"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const db = mongojs

// Define API routes here
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

Book.create()
 .then(console.log())


// Send every other request to the React app
// Define any API routes before this runs
app.get("/api/google", (req,res) => {
  console.log(req.params)
  axios.get("https://www.googleapis.com/books/v1/volumes", {params: req.params}).then(
    data => {
      res.json(data)
    }
  )
})
app.get("/api/books", (req, res) => { 
  db.Book.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data)
      console.log(data)
  }
})
});

app.post("/api/books", (req, res) => {
  db.Book.insert(req.body, (err, data) => {
    const Book = require("./schema")
    if (err) {
      console.log(err);
    } else {
      res.send(data)
      console.log(data)
    }
  });
});

app.delete("/api/books/:id", (req, res) => {
  db.Book.remove({ _id: mongoose.ObjectId(req.params.id) }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data)
      console.log(data)
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});