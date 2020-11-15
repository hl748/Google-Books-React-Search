const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const Book = require("./schema")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const db = mongojs(databaseUrl, collections);

// Define API routes here
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

Book.create(data)
 .then(console.log(data))
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
  }
})
});

app.post("/api/books", (req, res) => {
  db.Book.insert(req.body, (err, data) => {

    if (err) {
      console.log(err);
    } else {
      res.send(data)
    }
  });
});

app.delete("/api/books/:id", (req, res) => {
  db.Book.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data)
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});