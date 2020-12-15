let n = 5;
let symbol = "*";
let line = "";
let inputPosition = n;

let triangleMid = (n + 1) / 2;
let controlLeft = triangleMid;
let controlRight= triangleMid;

for (lineIndex = 0; lineIndex <= triangleMid; lineIndex += 1) {
  for (lineColumn = 1; lineColumn <= n; lineColumn += 1) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      line = line + symbol;
    } else {
      line = line + " ";
    }
  }
  console.log(line);
  line= "";
  controlRight -= 1;
  controlLeft += 1;
};
