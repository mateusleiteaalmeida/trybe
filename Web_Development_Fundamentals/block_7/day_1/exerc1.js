function factorial(num) {
    let res = 1;
    for (i = 2; i <= num; i++) {
        res = res * i;
    }
    return res;
}
