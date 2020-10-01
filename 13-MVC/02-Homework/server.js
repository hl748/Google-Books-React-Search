const express = require("express")
const connection = require("./config/connection.js")
const handlebars = require("express-handlebars")
const controller = require("./controllers/burgers_controller.js")

const app = express()
const PORT = process.env.PORT||3000
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(controller)






app.listen(PORT , function(){
    console.log("App is listening")
})