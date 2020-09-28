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
    }, 
    {
      name: 'Frequency',
      type: 'choice', 
      message: 'How often do you communicate?',
      choices: ["Once a week","Three times a week","Everyday","5 times every day"]
      },
      {
        name: 'languages',
        type: 'rawlist', 
        message: 'What languages do you know?'
        }]
).then(function (answers) {
    fs.writeFile("log.txt", inquirer, function(error) {

        if (error) {
          return console.log(error);
        }
      const success = "Success!"
        console.log(success);
      
      });
})