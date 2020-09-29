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
  
allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const allStudents = object => {
  let students = 0;
  const allKeys = Object.keys(object);
  for (i in allKeys) {
    students += object[allKeys[i]].numeroEstudantes;
  }
  return students;
}

console.log(allStudents(allLessons));
  