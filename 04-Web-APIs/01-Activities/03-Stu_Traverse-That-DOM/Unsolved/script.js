var articlesDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");

articlesDiv.children[0].style.fontSize = "50px";
articlesDiv.children[0].lastElementChild.style.color = "blue";
articlesDiv.previousElementSibling.style.background = "black";

mainDiv.childNodes[1].style.textDecoration = "underline";
mainDiv.lastElementChild.style.fontSize = "50px";
mainDiv.firstElementChild.style.color = "orange";
mainDiv.lastElementChild.parentElement.style.fontSize = "30px";


