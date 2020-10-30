// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3005;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/characters", (req, res) => {
  return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", (req, res) => {
  const chosen = req.params.character;

  console.log(chosen);

  for (let i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  for (var i = 5; i < characters.length; i++){
    const length = JSON.stringify(characters.length);
    console.log(length);
    console.log(length[0]);
    console.log(length[0].toLowerCase())
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newCharacter = req.body;
  const newCharacter1 = req.body[0]
  const newCharacter2 = req.body[1]
  const newCharacter3 = req.body[2]
  const newCharacter4 = req.body[3]
  const newCharacter5 = req.body[4]
  const newCharacter6 = req.body[5]

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);
  console.log(newCharacter1)
  console.log(newCharacter2)
  console.log(newCharacter3)

  characters.push(newCharacter);

  res.json(newCharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
