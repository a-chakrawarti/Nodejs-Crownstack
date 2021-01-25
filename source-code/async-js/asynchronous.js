// Asynchronous model allows multiple things at happen at the same time.

// 3 ways to do Async JS
// Async/await, Callbacks, promises



setTimeout(() => {
    for (let idx = 0; idx < 45; idx++) {
        const element = idx;
        console.log("This is idx number: ", idx)
    }
}, 100);

console.log('DONE!');