// テキスト「キーボード操作に反応する」
let x, y, vx, vy, z;
const g = 2;
const vyMax = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
  w = windowWidth / 2;
  z = windowHeight - 100;
}

// 上と共通の部分は省略

function draw(){
  background(164, 202, 104);
  ellipse(x, y, 50);
  y += vy;
  vy = constrain(vy + g, -vyMax, vyMax);
  x = constrain(x, windowWidth / 2 - 400, windowWidth / 2 + 400);
  y = constrain(y, 0, height);

  ellipse(w, z, 50);
  w = constrain(w, windowWidth / 2 - 200, windowWidth / 2 + 200)

  if(keyIsDown(LEFT_ARROW)){ x -= 10; }
  if(keyIsDown(RIGHT_ARROW)){ x += 10; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  if(keyIsDown(" ".charCodeAt(0))){ x= width / 2, y = height / 2; } // 文字キーの場合
  if(keyIsDown("1".charCodeAt(0))){ w-= 10; } // 文字キーの場合
  if(keyIsDown("3".charCodeAt(0))){ w+= 10; }
  if(keyIsDown("2".charCodeAt(0))){ w = windowWidth / 2; }
  line(windowWidth / 2 - 200, windowHeight, windowWidth / 2 + 200, windowHeight);
  line(windowWidth / 2 - 200, windowHeight, windowWidth / 2 - 200, windowHeight - 100);
  line(windowWidth / 2 + 200, windowHeight, windowWidth / 2 + 200, windowHeight - 100);
  stroke(255);
  strokeWeight(3);
  const d = dist(x, y, w, z);
  if(d < 100) {
    vy = -1 * vy;
  }
}

















// イベントハンドラを使用するパターン

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
