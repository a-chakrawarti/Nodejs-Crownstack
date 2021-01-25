// An action that hasn't yet completed and allows us to add handlers for an eventual
// success or failure of an asynchronous action like an HTTP request

// let myPromise = new Promise(function (resolve, reject) { // executor function
//     let randomVal = Math.random();
//     console.log(randomVal);
//     (randomVal < .5) ? resolve('SUCCESS!') : reject('FAILURE');
    
// });

// myPromise.then(function (msg) {
//     console.log(msg, 'The promise was resolved!');
// },  function (err) {
//         console.log(err, 'The promise was rejected!');
// });

// success and failure handlers will be invoked at some point in the future when promise
// resolves or rejects. These states of being resolved or rejected are collectively known
// as settled. So when promise has been settled either it is resolved or rejected.

// Before it is resolved it is in the state of being in pending.

// Promise object can be in one of 3 states:
// Pending
// Fulfilled ] Settled
// Rejected  ]

// A promise can be rejected or resolved once so it can be settled once.

// then() method also returns a promise.

// function getNumberfact(url) {
//     return new Promise(function (resolve, reject) {
//         let req = new XMLHttpRequest();

//         req.onload = function() {
//             if (this.status === 200) {
//                 resolve(req.responseText);
//             } else {
//                 reject(req.statusText);
//             }
//         }

//         req.open('GET', url, true);
//         req.send();
//     });

// }

// getNumberfact('https://numbersapi.com/98').then(
//     response => console.log(response),
//     error => console.log(error)
// );

let p = new Promise((resolve, reject) => {
    let a = 1 + 4
    if (a == 2)
        resolve('Success!')
    else 
        reject('Failed!')
})

p.then(msg => console.log('This is in then:', msg))
.catch(msg => console.log('This is in the catch:', msg))

// Reference: https://www.youtube.com/watch?v=2IPw-mWe10U&list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL&index=39
// https://www.youtube.com/watch?v=DHvZLI7Db8E