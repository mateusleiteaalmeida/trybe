function hydrate (string) {
    let getNumbers = string.match(/\d/g);
    let stringWaterCups = "";
    let waterCups = 0;
    for (i = 0; i < getNumbers.length; i++) {
        getNumbers[i] = parseInt(getNumbers[i], 10);
        waterCups += getNumbers[i];
    }
    if (waterCups == 1) {
        return waterCups + " copo de água"
    } else {
        return waterCups + " copos de água"
    }
}
