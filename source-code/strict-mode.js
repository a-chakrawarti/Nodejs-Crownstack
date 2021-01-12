/*
Non-strict JavaScript is also referred to as "Sloppy Mode".

It is recommended to always use "strict mode" as all modern browsers support it, and causes some slient error to actually thrown an error.
- Prevents global variable from being created.

To use strict mode, use `'use-strict';` either inside a function or a file.
It is recommended to use inside a function as there could be issues while concatenating strict and non-strict files together. And concatenating is a very common in JavaScript build process.
*/

(function () {
    'use strict'; // Commenting this out will show no error in console.

    NaN = 'Should show Error'; // TypeError: Cannot assign to read only property 'NaN' of object
    console.log(NaN);
})();

// These function are also known as *Immediately Invoked function expression* or *(iife)*.
// Adds new reserved words, package, protected, implements, interface, private and static.
