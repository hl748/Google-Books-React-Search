// Create your HTML Page via DOM Methods here!

var heading = document.createElement("h1");
var heading2 = document.createElement("h2");
var picContain = document.createElement("div");
var img = document.createElement("img");
var caption = document.createElement("div");
var list = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

heading.textContent = "Pine trees";
heading2.textContent = "Pine needles";
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pinus_densiflora_Kumgangsan.jpg/1200px-Pinus_densiflora_Kumgangsan.jpg"
caption.textContent = "This is a pine tree.";
li1.textContent = "Samiam1340";
li2.textContent = "samtheman1973";
li3.textContent = "Colby0116";
li4.textContent = "draggernaut";

document.body.appendChild(heading);
document.body.appendChild(heading2);
document.body.appendChild(picContain);
picContain.appendChild(img);
picContain.appendChild(caption);
document.body.appendChild(list);
list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
list.appendChild(li4);


img.setAttribute("style", "width: 800px; height: 800px;")
caption.setAttribute("style", "font-size: 50px;")
heading.setAttribute("style","text-align: center; background-color: green;")
heading2.setAttribute("style","text-align: center; background-color: lime;")
picContain.setAttribute("style","text-align: center; border: 5px;")
list.setAttribute("style", "font-size: 20px; font-family: cursive;")





