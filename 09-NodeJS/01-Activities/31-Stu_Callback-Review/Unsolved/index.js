const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
  const values = Object.values(animalJSON)
  for (const animal of values){
    if (animal.species === "cat") {
    cats.push(animal)
  }
  if (animal.species === "dog") {
    dogs.push(animal)
  }
}

const stringCats = JSON.stringify(cats)
const stringDogs = JSON.stringify(dogs)


fs.writeFile("cats.json", stringCats, function(err, data) {
  if (err) {
    throw err;
  }
  console.log("Success!")


})

fs.writeFile("dogs.json", stringDogs, function(err, data) {
  if (err) {
    throw err;
  }

  console.log("Success!")

})
});
