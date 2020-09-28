var http = require("http")
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest (request, response) {
    response.end("Inspirational quote #1")
}
function handleRequest2 (request, response) {
    response.end("Inspirational quote #2")
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

server1.listen(PORT1, function () {
    let a = 5+5;
    let a = 10+10;
    const b = 5+5;
    const b = 10+10;
    alert(a)
    alert(b)
})

server2.listen(PORT2, function () {
    let abacus = 5+5;
    let abacus = 10+10;
    const basoon = 5+5;
    const basoon = 10+10;
    alert(a)
    alert(b)
    const Deseret = "Utes"
})