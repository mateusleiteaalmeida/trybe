function generatePhoneNumber (array) {
    let phoneNumber = "";
    let DDD = array.slice(0,2);
    let firstHalf = array.slice (2, 7);
    let secondHalf = array.slice(7, 11);
    if (array.length !== 11) {
        return "Array com tamanho incorreto"
    } else if (checkMaxNumber(array)) {
        return "não é possível gerar um número de telefone com esses valores"
    } else if (checkRepeatNumber(array)) {
        return "não é possível gerar um número de telefone com esses valores"
    } else {
        return `($DDD) + $firstHalf + "-" + "secondHalf"`;
    }
};
