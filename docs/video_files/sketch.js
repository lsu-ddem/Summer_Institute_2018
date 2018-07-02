var baseURL = "https://lsu-ddem.github.io/Summer_Institute_2018/files/" 
var Coding;
var Champlain;
var Prinitng;
var Monticello;
var Patterns;
var Seoul;

var highlight = 0;

function setup() {
  createCanvas(710, 400);
  // specify multiple formats for different browsers
  Coding = createVideo("https://lsu-ddem.github.io/Summer_Institute_2018/files/"+"DDEM-LSUCoding.mp4");
  Coding.hide(); // by default video shows up in separate dom
  // element. hide it and draw it to the canvas
  // instead
  Champlain = createVideo("https://lsu-ddem.github.io/Summer_Institute_2018/files/"+"DDEM-ChamplainOv.mp4");
  Champlain.hide();
  Printing = createVideo("https://lsu-ddem.github.io/Summer_Institute_2018/files/"+"DDEM-LSUPrinting.mp4");
  Printing.hide();
  Monticello = createVideo("https://lsu-ddem.github.io/Summer_Institute_2018/files/"+"DDEM-Montecello.mp4");
  Monticello.hide();
  Patterns = createVideo("https://lsu-ddem.github.io/Summer_Institute_2018/files/"+"DDEM-Patterns.mp4");
  Patterns.hide();
  Seoul = createVideo("https://lsu-ddem.github.io/Summer_Institute_2018/files/"+"DDEM-Seoul.mp4");
  Seoul.hide();
}

function draw() {
  background(150);
  image(Coding, 10, 10, 200, 150); // draw the video frame to canvas
  
  //filter('GRAY');
  image(Champlain, 240, 10, 200, 150); // draw a second copy to canvas
  image(Printing, 470, 10, 200, 150);
  image(Monticello, 10, 200, 200, 150);
  image(Patterns, 240, 200, 200, 150);
  image(Seoul, 470, 200, 200, 150);

  
    image(Coding, 10, 10, 200, 150);
    


    console.log(mouseX + ", " + mouseY);
  
}

function keyPressed(){
  
  Coding.pause();
}

function mousePressed() {
  if(mouseX<200&&mouseY<150){
  Coding.play(); // set the video to play
  
  }else if(mouseX>240&&mouseX<400&&mouseY<150){  
  Champlain.play(); // 
  }else if(mouseX>470&&mouseX<660&&mouseY<150){
  Printing.play(); // set the video to loop and start playing
  }else if(mouseX<200, mouseY<340){
  Monticello.play(); // 
  }else if(mouseX<240&&mouseX<430&&mouseY<340){
  patterns.play(); // set the vide
  }else if(mouseX<470&&mouseX<660&&mouseY<340){
  Seoul.play(); // set the video to loop and start playing
  
     
    

  }
}