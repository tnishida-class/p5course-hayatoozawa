// 練習問題：神戸市のマーク
function setup(){
  createCanvas(500, 500);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  stroke(0,128,0);
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 20, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(70, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI);
  noStroke();
  fill(14, 47, 146);
  arc(300, 100, 100, 100, 0, PI + PI);
  fill(255,255, 255);
  arc(290, 95, 95, 95, 0, PI + PI);
  fill(22, 131, 46);
  arc(288, 93, 90, 90, 0, PI + PI);
  fill(255,255, 255);
  arc(287, 97, 85, 85, 0, PI + PI);
  fill(77);
  textSize(22);
  textFont("serif");
  text("KOBE", 255, 87);
  fill(77);
  textSize(10);
  textFont("serif");
  text("UNIVERSITY", 265, 100);


  // BLANK[1]
  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
}
