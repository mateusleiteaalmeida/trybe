const fetchPromise = () => {
    const createPromise = new Promise((resolve, reject) => {
        const array = [];
        for (let i=0; i <11; i++) {
            const num = Math.floor(Math.random() * 50)
            array.push(num * num);
        }
        const sum = array.reduce((acc, curr) => acc + curr, 0);
        (sum < 8000) ? resolve() : reject();
        return sum
    });

    const createArray = (sum) => [2, 3, 5, 10].map(number => sum / number);

    const sumArray = (array) => array.reduce((acc, curr) => acc + curr, 0);

    const execute = async () => {
        try {
            const sum = await fetchPromise();
            const array = await createArray();
            const sumArray = await sumArray();
            console.log(sumArray);
        } catch {
            console.log('É mais de oito mil! Essa promise deve estar quebrada!');
        }
    }
}
fetchPromise();
