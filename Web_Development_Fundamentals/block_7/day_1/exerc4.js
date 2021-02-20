function replaceWord(string, phrase) {
    const newPhrase = phrase.replace('x', string);
    return newPhrase;
}

function createPhrase() {
    let skills = ["HTML", "CSS", "Javascript", "React", "Java"];
    let phrase = "Tryber x aqui. Minhas habilidades são: ";
    let finalPhrase = replaceWord("Mateus", phrase);
    const orderSkills = skills.sort();
    orderSkills.forEach((skill) => finalPhrase += `${skill} `)
    return finalPhrase;
}
