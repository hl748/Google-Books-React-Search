const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "hl748"
  })
  .then(function() {
    const queryUrl = `https://api.github.com/users/hl748/repos?per_page=100`;
  })

  axios.get('queryUrl')
  .then(function (response){
    console.log(response.data)
  })
  .catch (function (error){
    console.log(error)
  }).then(function () {

  })
