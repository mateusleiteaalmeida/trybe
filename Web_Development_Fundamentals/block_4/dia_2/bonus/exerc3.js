let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
let newNumbers = [];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i+1]){
        newNumbers.push(numbers[i] * numbers[i+1])
    } else {
        newNumbers.push(numbers[i] * 2)
    }
}

console.log(newNumbers);