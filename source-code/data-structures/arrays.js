/*
Arrays: It is a single object that can contain multiple values
Arrays can be created using Array constructor or we can use literal arrays
or literal syntax(recommended)
*/

let myArr = new Array(1); // Array constructor recieves an argument, tells the no of items
                          // the array will have. And using the constructor, the values will
                          // be set to undefined.

let myArr2 = ['This is not undefined', 'This is another value']; // Uses numerical indexes
// to address elements within them and starts at 0.

// Using square-braket notation
// Access indiviual element

console.log(myArr2[1]);

console.log(myArr2[myArr2.length - 1]); // last element in the array

// Assigning/adding element to an array

myArr2[6] = 'This is the 7th element'; // everything in-between 1 and 6 will be undefined

console.log(myArr2);


