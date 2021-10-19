// 小手調べ
function setup(){
  createCanvas(150, 150)
  noFill();
  stroke(1);
  for(let i = 0; i < 10; i++){
    if(i < 5){
      stroke(255, 0, 0)
    }
    else{
      stroke(0, 0, 255)
    }
    let x = 100 - (i - 1) * 10;
    ellipse(75, 75, x);

    // BLANK[1]
  }
}
