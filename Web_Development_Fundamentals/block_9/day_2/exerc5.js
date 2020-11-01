const fetchPromise = () => {
    const createPromise = new Promise((resolve, reject) => {
        const array = [];
        for (let i=0; i <11; i++) {
            const num = Math.floor(Math.random() * 50)
            array.push(num * num);
        }
        const sum = array.reduce((acc, curr) => acc + curr, 0);
        (sum < 8000) ? resolve() : reject();
    });
    createPromise
    .then((result1) => [2, 3, 5, 10].map(number => result1 / number))
    .then((result2) => result2.reduce((acc, curr) => acc + curr, 0))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}
fetchPromise();