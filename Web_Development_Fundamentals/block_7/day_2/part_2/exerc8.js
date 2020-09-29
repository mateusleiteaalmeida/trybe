const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
            
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
            
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const verifyPair = (object, keyName, keyValue) => {
    const pairKey = Object.entries(object);
    let isEqual = false
    for (let i in pairKey) {
        if (pairKey[i][0] === keyName && pairKey[i][1] === keyValue) {
        isEqual = true;
        }
    }
    return isEqual;
}
console.log(verifyPair(lesson3,'materia','Matemática'));