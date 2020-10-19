    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  const studentGrades = notas.map(array => array.reduce((acc, curr, ind, arr) => acc + curr, 0) / 5);
  const nameAndGrade = alunos.map((student, index) => ({
      name: student,
      average: (studentGrades[index])
  }));
  return nameAndGrade;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(), expected);