// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  if(count < 50){
    ellipse(width / 2, height / 2, count);
  }
  // BLANK[1]
  else{
    ellipse(width / 2, height / 2, 100 - count);
  }

  if(keyIsDown(" ".charCodeAt(0))){
    count = (count + 3) % cycle;
  }
  else{
    count = (count + 1) % cycle;
  }
}
