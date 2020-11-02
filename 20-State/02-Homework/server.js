const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve a "/" route
app.get("/", (req, res) => {
   res.sendFile("C:/Users/Hang Yin/Desktop/gitlab/gt-atl-fsf-pt-06-2020-u-c/20-State/02-Homework/client/public/index.html")
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});