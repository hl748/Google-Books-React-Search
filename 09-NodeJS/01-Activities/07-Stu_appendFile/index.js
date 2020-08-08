// returns an array of command line arguments
console.log(process.argv);
// arguments passed from the command line are accessed by index
var argv = process.argv[2] + "\r\n"

var fs = require("fs");

fs.appendFile("log.txt", process.argv[2] + "\n", function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success!");

});

