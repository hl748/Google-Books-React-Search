const http = require("http")
const fs = require("fs");

const PORT = 8080;

const server = http.createServer(handleRequest)

function handleRequest (req, res) {
    const path = req.url
    switch (path) {
        case "/":
        fileName = "Home.html"
        break;
        
    }
}