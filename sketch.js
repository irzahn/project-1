

var bright0 = 0;
var bright1 = 0;
var bright2 = 0;
var bright3 = 0;
var x = 400;
var y = 400;
var d = 50;
var state = false;

function setup() {
  createCanvas(800,800);
}

function draw() {

  background(255,0,0);

  //The mouse location determins color

  if (mouseX < 400 && mouseY < 400) {
    bright0 = 255;
  }
  else if (mouseX > 400 && mouseY < 400) {
    bright1 = 255;
  }
  else if (mouseX < 400 && mouseY > 400) {
    bright2 = 255;
  }
  else if (mouseX > 400 && mouseY > 400) {
    bright3 = 255;
  }

  // All shapes fade
  bright0 = bright0 - 5;
  bright1 = bright1 - 5;
  bright2 = bright2 - 5;
  bright3 = bright3 - 5;

  // Fill color and shape
  noStroke();
  fill(bright0,150);
  rect(0,0,400,400);
  fill(bright1);
  rect(400,0,400,400);
  fill(bright2);
  rect(0,400,400,400);
  fill(bright3,150);
  rect(400,400,400,400);
  fill(bright1 /2);
  ellipse(400,200,150,150);
  fill(bright0);
  ellipse(200,400,150,150);
  fill(bright2 / 2);
  ellipse(400,600,150,150);
  fill(bright3);
  ellipse(600,400,150,150);

//button
push();
if (mouseX > 400 && mouseX > 400 && mouseY < 400 && mouseY < 400){
  fill(255,0,0,120);
  ellipse(x,y,100,100);
}
if (mouseX < 400 && mouseX < 400 && mouseY > 400 && mouseY > 400){
  fill(255,0,0,120);
  ellipse(x,y,100,100);}
pop();
//dot = dot (255,0,25);

push();
  if (state) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(x, y, d, d);
pop();
if (state){
  bright3= -bright3;
  bright2= -bright2;
  bright1= -bright1;
  bright0= -bright0;
}
}
function mousePressed() {
  if (dist(mouseX, mouseY, x, y) < d/2) {
    state = !state;
  }
}
