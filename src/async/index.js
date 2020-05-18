// ejercicio 1 
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do  something ASync'), 3000)
        : reject(new Error('Test error'))
    });
}


const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something)
}


console.log('Before');
doSomething();
console.log('After');




// ejercicio 2 para cachar errores

const anotherFuction  = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}



console.log('Before 1')
anotherFuction();
console.log('After 1')