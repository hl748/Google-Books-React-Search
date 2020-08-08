// returns an array of command line arguments
console.log(process.argv);
// arguments passed from the command line are accessed by index
var arr1 = process.argv[2]
var arr2 = process.argv[3];

console.log(arr1 === arr2)

