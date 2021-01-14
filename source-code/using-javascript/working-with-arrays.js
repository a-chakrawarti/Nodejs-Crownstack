(function () {
    'use strict';
    
    let myArr = ['hi', 'konnichiwa', 'hola', ];

    // console.log(myArr.length);

    myArr.push('hallo'); // add element at end of the array

    myArr.unshift('namaste'); // add element at start of the array

    myArr.pop(); // remove last item from array and returns it

    myArr.shift(); // remove first item from array and returns it

    // myArr.splice(0); // remove the elements from the given index to the end of the array

    myArr.splice(0, 2); // removes 2 elements from 0 index

    myArr.splice(0, 1, 'bye', 'sayonara', 'adios', 'alvida'); // replace and add

    myArr.reverse(); // reverses the array

    myArr.sort(); // sorts as per unicode value, also sort method accepts a function as param.

    // All the above methods change the underlying array permanently, and are referred
    // to as mutater methods.

    console.log(myArr);

    // Accessor methods: Don't alter the underlying array they are operating on
    // returns some subset of the items in the array as a new array.
    // indexOf, lastIndexOf, slice (to get subset of an array) methods

    console.log(myArr.join(' > ')); // array to string, we can specify the character to join them

    // -------------------------------------------------------------------------------------------------------

    // Interating and Transforming Arrays

    myArr.forEach(function (item) { // cannot exit early
        console.log(item);
    });

    // some method will iterate the array it is called on untill the callback
    // function returns true. will return true if it is done iterating.

    myArr.some(function (item) {
        console.log('iterating ...');
        return item === 'bye';
    });

    // stops iterating the array when the callback function returns false.
    myArr.every(function (item) {
        console.log('every iterating ...');
        return item != 'alvida';
    });

    // reduce method: which reduces an array down to single value

    let redArr = [1, 2, 5, 7, 9, 11, 20, 21];
    let sum = redArr.reduce(function (prev, curr) {
        return prev + curr;
    }, 0); // 0 or the last argument is for the value prev variable holds at the start of the execution

    console.log(sum);

    // map method: map one array into another array // TO_DO

})();