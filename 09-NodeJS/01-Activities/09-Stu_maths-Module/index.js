var math = require("./math.js")

var num1 = parseInt(process.argv[2])
var num2 = parseInt(process.argv[3])
console.log(typeof process.argv[2])

var operation = process.argv[4]

switch (operation) {
    case "sum":
        console.log(math.sum(num1, num2))
    break
    case "subtract":
        console.log(math.subtract(num1, num2))
    break
    case "multiply":
        console.log(math.multiply(num1, num2))
    break
    case "divide":
        console.log(math.divide(num1, num2))
    break
}