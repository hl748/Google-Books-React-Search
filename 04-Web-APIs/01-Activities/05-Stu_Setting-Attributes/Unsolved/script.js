// var img1 = document.getElementsByClassName("site1")[0];
// var img2 = document.getElementsByClassName("site2")[0];
// var img3 = document.getElementsByClassName("site3")[0];

// img1.children[1].children[0].src = "./images/image_1.jpg";
// img2.children[1].children[0].src = "./images/image_2.jpg";
// img3.children[1].children[0].src = "./images/image_3.jpg";
// img1.children[1].children[0].alt = "Image1";
// img2.children[1].children[0].alt = "Image2";
// img3.children[1].children[0].alt = "Image3";
// img1.children[1].href = "#";
// img2.children[1].href = "#";
// img3.children[1].href = "#";
// img1.setAttribute("style", "margin: 10px; padding: 10px;");
// img2.setAttribute("style", "margin: 10px; padding: 10px;");
// img3.setAttribute("style", "margin: 10px; padding: 10px;");

for (var i = 1; i<4; i++) {
    var img = document.getElementsByClassName("site" + i)[0];
    img.children[1].children[0].src = "./images/image_" + i + ".jpg";
    img.children[1].children[0].alt = "Image" + i;
    img.children[1].href = "#";
    img.setAttribute("style", "margin: 10px; padding: 10px;");
}



