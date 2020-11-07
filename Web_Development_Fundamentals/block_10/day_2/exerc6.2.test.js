const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject('Não há nenhum animal com essa idade.');
    }, 100);
  })
);
  
const getListAnimals = (age) => (
  findAnimalsByAge(age).then(animal => animal)
);

describe('Testando promise - findAnimalByAge', () => {
    describe('Quando existe um animal com a idade procurada', () => {
      test('Retorne o array de objetos dos animais', () => {
        expect.assertions(1);
        return expect(getListAnimals(1)).resolves.toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  
    describe('Quando não existe um animal com a idade procurada', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return expect(getListAnimals(3)).rejects.toBe('Não há nenhum animal com essa idade.')
      });
    });
  });