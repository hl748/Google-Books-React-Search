const originalArray = [1, 3, 2, 5, 10];

const doubledArray = originalArray.map(function(data) {
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);

// Complete the following

// 1. A map that triples the originalArray and sets the result equal to a new `tripledArray` array
<<<<<<< HEAD
const tripledArray = [originalArray.map(function(data))];

=======
const tripleArray = originalArray.map(data => {
  return data *3
>>>>>>> af3843dd7c43089f8849cf859321b551c1ff406d

})
// 2. A map that takes the originalArray and returns a new array `oddOrEven`
// containing the text "even" if the number is even and the text "odd" if the number is odd
// i.e. using this map, the array [3, 1, 2, 4] should give us back ["odd", "odd", "even", "even"]

// Your code here
const evenorodd = originalArray.map(data => {


const})
// Bonus: Use arrow functions as callbacks!
