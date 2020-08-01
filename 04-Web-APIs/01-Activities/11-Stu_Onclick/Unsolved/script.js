var decrement = document.getElementById("decrement");
var increment = document.getElementById("increment");
var count = document.getElementById("count");

decrement.addEventListener("click", function(){
    count.textContent--;
})

increment.addEventListener("click", function(){
    count.textContent++;
})

