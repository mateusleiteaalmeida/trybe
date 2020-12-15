function techList (techNames, name) {
    let array = techNames.sort();
    let list = [];
    for (i=0; i<array.length; i++) {
        list[i] = { tech: array[i], name: name}
    }
    if (array.length == 0) {
        return "Array vazio!"
    } else {
        return list;
    } 
}
