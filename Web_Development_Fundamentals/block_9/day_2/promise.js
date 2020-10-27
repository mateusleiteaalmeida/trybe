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
    .then(() => console.log('Deu certo'))
    .catch(() => console.log('Deu errado'));
}
fetchPromise();