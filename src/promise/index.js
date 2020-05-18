// ejercicio 1
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if  (true) {
            resolve('hey!!!');
        } else {
            reject('uppps!!!');
        }
    });
};



somethingWillHappen()
.then(response => console.log(response))
.catch(error => console.error(error))


// ejercicio 2 

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if  (true) {
            setTimeout(() => {
                resolve('true!!!');

            }, 2500)
            
        } else {
            const error = new Error('whoo000psi')
            reject(error)
        }
    });
};


somethingWillHappen2()
.then(response => console.log(response))
.catch(error => console.error(error))




// ejercicio 3 promesas encadenadas 

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response)
})
.catch(error => {
    console.log(error)
})
