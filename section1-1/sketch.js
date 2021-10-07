function setup() {
  createCanvas(256,256);
}

function draw() {
  background(0);
  strokeWeight(2);
  fill(178, 100, 162);
  triangle(12,120,116,120,116,10);
  fill(94, 185, 84);
  triangle(0,108,106,108,106,0);
  fill(255);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
  strokeWeight(.5);
  fill(255);
  square(128,128,128);
  fill(126,16,131);
  triangle(140,248,244,248,244,138);
  fill(255);
  textSize(32);
  textFont("serif");
  text("46", 205, 240);
  fill(255);
  square(0,128,128);
  fill(126,16,131);
  triangle(12,248,116,248,116,138);
  fill(124,199,232);
  triangle(0,236,106,236,106,128);
  fill(255);
  textSize(32);
  textFont("serif");
  text("46", 68, 228);



}
