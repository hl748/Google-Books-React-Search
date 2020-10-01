const connection = require("./connection");
console.log(connection)
class queries {

    constructor (){
console.log(connection)
    }
selectAll(cb) {
    connection.query (`SELECT * FROM burgers`,cb)
}
insertOne(burger, cb) {
    connection.query (`INSERT INTO burgers (burger_name,devoured) VALUES ("${burger.name}",${burger.devoured})`,cb)
}
updateOne (burger, cb)   {
    console.log(burger)
    connection.query (`UPDATE burgers SET devoured = ${burger.devoured} WHERE id = ${burger.id}`,cb)
}
}

module.exports = queries