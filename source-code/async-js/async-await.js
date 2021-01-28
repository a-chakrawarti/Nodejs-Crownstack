// Asynchronous model allows multiple things at happen at the same time.

// 3 ways to do Async JS
// Async/await, Callbacks, promises



// setTimeout(() => {
//     for (let idx = 0; idx < 45; idx++) {
//         const element = idx;
//         console.log("This is idx number: ", idx)
//     }
// }, 100);

// console.log('DONE!');

// async function hello() { // This returns a promise object
//     console.log('Inside hello!')
//     const response = await fetch('https://api.github.com/users'); // handles asynchronously
//     console.log('Before response')
//     const user = await response.json();
//     console.log('Users resolved!')
//     return user
// }

// console.log('Before greeting.');
// let greet = hello();
// console.log('After greeting.');
// console.log(greet);
// greet.then(data => console.log(data))
// console.log('End of greeting.');


// Async example:

async function wish(name) { // returns a promise object
    console.log(`Happy Birthday, ${name}!`)
}

wish('Rahul').then(res => console.log(res));


// Async/Await is a way of writing promises that 
// allows us to write asynchronous code in a synchronous way

// // Async/Await lets us use generators to pause the execution of a function

let walk = async (name, a) => {
    log = await a*a;
    console.log(`${name}: I walked ${log} kms today!`)
}

walk('Rahul',5);

console.log('How many kms you walked today?')

// fetch-api

async function getData() {
    try {
        url = 'https://api.github.com/users';
        response = await fetch(url);
        data = await response.json();
        // console.log(data) 
        for (let name in data) {
            console.log(data[name].login)
        }
    } catch (error) {
        console.log(error)
    } finally {
        console.info('getData() execution complete!')
    }
}

getData()




