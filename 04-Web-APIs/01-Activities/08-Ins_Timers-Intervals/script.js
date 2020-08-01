var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 20;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " secs left until SUPERNOVA explosion :)";

    if(secondsLeft === 5) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 800);
}

function sendMessage() {
  timeEl.textContent = " Exploding! ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
  alert("Hahahahahah!");

}

setTime();