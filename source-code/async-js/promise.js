// An action that hasn't yet completed and allows us to add handlers for an eventual
// success or failure of an asynchronous action

let myPromise = new Promise(function (resolve, reject) { // executor function
    (Math.random() < 5) ? resolve('SUCCESS!') : reject('FAILURE');
});

myPromise.then(function (msg) {
    console.log(msg, 'The promise was resolved!');
},  function (err) {
        console.log(err, 'The promise was rejected!');
});