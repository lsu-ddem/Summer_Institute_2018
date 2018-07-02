var img1;
var highlight = 0


function preload() {
  img1 = loadImage("img2.jpg");
 
}


function setup() {
  createCanvas(600, 420);
  background(255);

}

function draw() {

  if (highlight == 1) {
    image(img1, 0, 0, 480, 320)
  

 
  }




 




  image(img1, 0, 0);

  
  
  textSize (25)
  text(" Completed Projects", 5, 75);
  
  fill("lightblue");
  ellipse(217, 205, 50, 50);

  ellipse(222, 143, 50, 50);


  ellipse(250, 95, 50, 50);

  ellipse(307, 52, 50, 50);

  ellipse(366, 42, 50, 50);

  ellipse(440, 65, 50, 50);

  ellipse(490, 120, 50, 50);

  ellipse(507, 190, 50, 50);


}




function mousePressed() {

  var a = dist(mouseX, mouseY, 217, 205);

  if (a < 25) {

window.open("https://codepen.io/Kwish18/pen/xzyjgb");


  }
  var b = dist(mouseX, mouseY, 222, 143);


  if (b < 25) {

    window.open("https://codepen.io/ProfTesfay/pen/OEvebw")

  }
  var c = dist(mouseX, mouseY, 250, 95);

  if (c < 25) {
    window.open("https://alpha.editor.p5js.org/Kwish18/sketches/BkAmXMZG7");

  }
  var d = dist(mouseX, mouseY, 307, 52);

  if (d < 25) {

    window.open("https://media.milanote.com/p/files/1FyanE15Rt0Q8M/GIG/Revenge%20of%20the%20vampires.html");
  }
  var e = dist(mouseX, mouseY, 366, 42);

  if (e < 25) {
window.open("http://alpha.editor.p5js.org/Kwish18/sketches/BkJNR01MQ")
  }
  var f = dist(mouseX, mouseY, 440, 65);

  if (f < 25) {

    window.open("http://alpha.editor.p5js.org/kholmes77/sketches/ryRbTDH-7");

  }

  var g = dist(mouseX, mouseY, 490, 120);

  if (g < 25) {

    window.open("http://alpha.editor.p5js.org/kholmes77/sketches/ryGoWIt-X");
  }
  var h = dist(mouseX, mouseY, 507, 190);

  if (h < 25) {

    window.open("https://media.milanote.com/p/files/1FvgNY14Ux8M4V/1bQ/Pick%20Your%20PoisonFINAL.html");

  }


}