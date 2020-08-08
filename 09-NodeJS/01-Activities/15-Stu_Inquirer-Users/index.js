var inquire = require("inquirer")
var fs = require ('fs')

inquire
.prompt(
    [{
    name: 'name',
    type: 'input',
    message: 'What is your name?'
    },
    {
        name: 'languages',
        type: 'input', 
        message: 'What languages do you know?'
    },
    {
    name: 'communication',
    type: 'input',
    message: 'What is your preferred method of communication?'
    }]
).then(function (answers) {
    fs.writeFile("log.txt", inquirer, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });
})