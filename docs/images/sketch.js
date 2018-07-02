var baseURL = "https://lsu-ddem.github.io/Summer_Institute_2018/files/"

var tri1;
var tri2;
var tri3;
var tri4;
var tri5;
var tri6;
var tri7;
var tri8;

var tri1Pic;
var tri2Pic;
var tri3Pic;
var tri4Pic;
var tri5Pic;
var tri6Pic;
var tri7Pic;
var tri8Pic;
var backgroundPic;

function preload() {

  tri1Pic = loadImage(baseURL + "Janet-Echelman-As-If-It-Were-Already-Here-Boston-installation_dezeen_784_17.jpg");
  tri2Pic = loadImage(baseURL + "TW_VOID00-1024x535.jpg");
  tri3Pic = loadImage(baseURL + "Yota_Space_-_United_Visual_Artists_-_Volume_Installation.jpg");
  tri4Pic = loadImage(baseURL + "afd5183a13cc1681da846f709571c74c.jpg");
  tri5Pic = loadImage(baseURL + "cn_01.jpg");
  tri6Pic = loadImage(baseURL + "echelman-1.26-installation-designboom-02.jpg");
  tri7Pic = loadImage(baseURL + "images.jpg");
  tri8Pic = loadImage(baseURL + "janet-echelman-suspends-net-sculpture-above-londons-oxford-circus-4.jpg");
  backgroundPic = loadImage(baseURL + "jen-lewin_the-pool_light-installation_2_collabcubed.png")
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(backgroundPic);

  strokeWeight(5);

  fill(255, 0, 255);
  tri1 = triangle(200, 400, 260, 260, 400, 400);
  fill(0, 102, 255);
  tri2 = triangle(260, 260, 400, 200, 400, 400);
  fill(255, 0, 255);
  tri3 = triangle(400, 200, 540, 260, 400, 400);
  fill(0, 102, 255);
  tri4 = triangle(540, 260, 600, 400, 400, 400);
  fill(255, 0, 255);
  tri5 = triangle(600, 400, 540, 540, 400, 400);
  fill(0, 102, 255);
  tri6 = triangle(540, 540, 400, 600, 400, 400);
  fill(255, 0, 255);
  tri7 = triangle(400, 600, 260, 540, 400, 400);
  fill(0, 102, 255);
  tri8 = triangle(260, 540, 200, 400, 400, 400);
  

  if (mouseIsPressed) {
    var clickX = mouseX - 400
    var clickY = 400 - mouseY
    if ((mouseY <= 400) && (mouseX <= 400)) {
      if (clickX / clickY > -1) { //tri2
        image(tri2Pic, 200, 0, 422.5, 225);
      }
      if (clickX / clickY < -1) { //tri1
        image(tri1Pic, 0, 0, 422.5, 225);
      }

    }
    if ((mouseX >= 400) && (mouseY <= 400)) {
      if (clickX / clickY > 1) { //tri4
        image(tri4Pic, 380, 300, 422.5, 225);
      }
      if (clickX / clickY < 1) { //tri3
        image(tri3Pic, 380, 0, 422.5, 225);
      }
    }
    if ((mouseY >= 400) && (mouseX >= 400)) {
      if (clickX / clickY > -1) { //tri6
        image(tri6Pic, 200, 565, 422.5, 225);
      }
      if (clickX / clickY < -1) { //tri5
        image(tri5Pic, 380, 565, 422.5, 225);
      }

    }
    if ((mouseX <= 400) && (mouseY >= 400)) {
      if (clickX / clickY > 1) { //tri8
        image(tri8Pic, 0, 300, 422.5, 225);
      }
      if (clickX / clickY < 1) { //tri7
        image(tri7Pic, 0, 565, 422.5, 225);
      }
    }
  }
   // console.log(mouseX + "," + mouseY);
}