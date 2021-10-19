// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 == 0){
        fill (255, 255, 255);
      }
      else {
        fill(100);
        }
        rect(size * i, size * j, size, size);
      if(j < 3 && (i + j) % 2 == 1){
          fill(255, 0, 0);
        }
      else if(j > 4 && (i + j) % 2 == 1){
        fill(0, 0, 0);
      }
      ellipse(i * size + size / 2, j * size + size / 2, 20);

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      }
      }
    }
