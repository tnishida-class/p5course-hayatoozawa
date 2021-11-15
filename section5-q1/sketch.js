// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love you", 200, 200, 45, 100, 14);
  balloon("No pain, no gain", 300, 100, 10, 100, 100);
}

function balloon(t, x, y, c, d, e){
  let p = 2;
  let w = textWidth(t);
  let h = textDescent() - textAscent();
  let r = w + p;
  let a = - r / 2 + x;
  let b = - h / 2 + y;
  let z = 10
  let theta = TWO_PI / 6
  fill(c, d, e);
  ellipse(x, y, r);
  fill(0);
  text(t, a, b);
  beginShape();
  vertex(x, r / 2 + y);
  vertex(x - z, y + r + z);
  
  endShape();
}
console.log();
