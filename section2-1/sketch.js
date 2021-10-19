// テキスト「繰り返し」
function setup() {
createCanvas(100,100);
fill(0);
for(let x = 0; x < 100; x = x + 20){ // 繰り返しで変化する変数 x に関する記述
  rect(x, x, 20, 20);
}
}











// for 文を使うと、同じプログラムを以下のように書くことができます
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let i = 0; i < 5; i++){
//     rect(i * 20, i * 20, 20, 20);
//   }
// }
