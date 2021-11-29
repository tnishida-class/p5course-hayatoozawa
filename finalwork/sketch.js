// 最終課題を制作しよう
let x = 0;
let y = 250;
let state = 0;
let d;
let w, z, p, q;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  stroke(92, 68, 44);
  line(0, 300, width, 300);
  line(0, 300 + 150, width, 300 + 150);
  line(width / 2,  300 + 150 + 250, width, 300 + 150 + 250);
  line(width / 2,  300 + 150 + 100, width, 300 + 150 + 100);
  for(let i  = 0; i < width / 30; i++){
    line(i * 30, 300 - 5, i * 30, 450 + 5);
    if(i > width / 60){
    line(i * 30, 550 - 5, i * 30, 700 + 5);
  }
  }
  noFill();
  arc(width / 2 + 100, 450, 200, 200, PI / 2, PI, OPEN);
  arc(width / 2 + 100, 450, 500, 500, PI / 2, PI, OPEN);
  for(i = 0; i < 10; i++){
    let theta = HALF_PI * i / 10;
    line(p, q, w, z);
    p =  - cos(theta) * 100 + width / 2 + 100;
    q = sin(theta) * 100 + 450;
    w =  - cos(theta) * 250 + width / 2 + 100;
    z = sin(theta) * 250 + 450;
  }


  noFill();
  stroke(0);
  strokeWeight(4);
  fill(255);
  rect(x, y, 250, 100);
  ellipse(x + 50, y + 100, 50, 50, 0, TWO_PI, OPEN);
  ellipse(x + 200, y + 100, 50, 50, 0, TWO_PI, OPEN);
  for(let i = 0; i < 5; i++){
    d = dist(x + 250, y, width- 50 - i * 60, 250);
    if(d >= 25){
    makehuman(width- 50 - i * 60, 250, 50, 100, 20);
  }
    if(d < 25){
      textSize(128);
      fill(255, 0, 0);
      text("dead", width / 2, 100);
      makehuman(width- 50 - i * 60, 50, 50, 100, 20, 255, 0, 0);
  }
}
  d = dist(x + 250, y, width * 3 / 4, 550);
  if(d >= 25){
  makehuman(width * 3 / 4, 550, 50, 100, 20);
 }
  if(d < 25){
    textSize(128);
    fill(255, 0, 0);
    text("dead", width / 2, height - 100);
    makehuman(width * 3 / 4, 350, 50, 100, 20, 255, 0, 0);
  }
  if(state == 0){
    textSize(32);
    text("何かキーを押せば、トロッコが走り出します", width / 4, 200);
  }
  if(state == 1){
    x += 4;　
    if(x >= width / 2 - 250){
      state = 2;
    }　
  }
  if(x >= width / 2 - 250 && x < width / 2 - 200){
    fill(255);
    textSize(32);
    text("進路を変える場合は下矢印を、変えない場合は上矢印を押せ！", width / 4, 200);
  }
  if(state == 3){
    x += 4;

    if(x >= width - 250){
        state = 6;
    }
  }


  if(state == 4){
      for(let i = 0; i < 50; i++){
        const n = 50;
        let theta = HALF_PI * i / n;
        fill(255);
        rect(x, y, 250, 100);
        ellipse(x + 50, y + 100, 50, 50, 0, TWO_PI, OPEN);
        ellipse(x + 200, y + 100, 50, 50, 0, TWO_PI, OPEN);
        x =  - cos(theta) * 100 + width / 2 - 150;
        y = sin(theta) * 100 + 450;
      }
    if(x >= width / 2 - 200){
      state = 5;
    }
  }

  if(state == 5){
    x += 4;
    if(x >= width - 250){
      state = 7;
    }
    }




  if(state == 6){
    background(0);
    fill(255, 0, 0);
    textSize(100);
    text("5 people died", width / 4, height / 2);
  }

  if(state == 7){
    background(0);
    fill(255, 0, 0);
    textSize(100);
    text("1 person died", width / 4, height / 2);
  }
  }


function keyPressed(){
  if(state == 0){
    state = 1;
  }

  if(state == 2 && keyCode == UP_ARROW){
    state = 3;
  }

  if(state == 2 && keyCode == DOWN_ARROW){
    state = 4;
  }
}

function makehuman(a, b, r, k, h, s, t, u){
  push();
  strokeWeight(4);
  fill(s, t, u);
  ellipse(a, b, r, r);
  line(a, b + r / 2, a, b + r / 2 + k);
  line(a - h, b + r / 2 + k / 3, a + h, b + r / 2 + k / 3);
  line(a - 30, b + r / 2 + k + 30, a, b + r / 2 + k);
  line(a + 30, b + r / 2 + k + 30, a, b + r / 2 + k);
  pop();
}
console.log()

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
