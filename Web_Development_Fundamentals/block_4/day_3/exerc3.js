let n = 5;
let symbol = "*";
let line = "";
let inputPosition = n;

for (i = 0; i < n; i += 1) {
    for (j = 0; j <= n; j += 1) {
        if (j < inputPosition) {
            line = line + " ";
        } else {
            line = line + symbol;
        }
    }
    console.log (line);
    line = "";
    inputPosition -= 1;
}
