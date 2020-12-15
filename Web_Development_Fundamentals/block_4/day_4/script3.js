function triangleCheck (lineA, lineB, lineC) {
    let difAB = Math.abs(lineA - lineB)
    let difAC = Math.abs(lineA - lineC)
    let difBC = Math.abs(lineB - lineC)
    if (lineA + lineB > lineC && difAB < lineC) {
        return true;
    } else if (lineA + lineC > lineB && difAC < lineB) {
        return true;
    } else if (lineB + lineC > lineA && difBC < lineA) {
        return true;
    } else {
        return false;
    }
}
