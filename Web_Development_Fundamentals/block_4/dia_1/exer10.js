let cost = 50;
let price = 100;

let profit = (price - cost) * 0.8

if (cost < 0 || price < 0){
    console.log("Not a valid value");
} else {
    console.log("Your profit is " + profit);
};