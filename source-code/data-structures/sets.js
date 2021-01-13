/*
Sets: We can only store unique value inside it.
Values can be of any type but must be all unique.
Introduced in ES2015
*/

// Set constructor (No literal form of Sets)

let mySet = new Set();

// We can pass an iterable object as an arugument to the Set contructor
// which will add all the values to the set.

let myArr = [1, 1, 1, 2, 2, 2, 4, 5, 6, 4]; // iterable object

let mySet2 = new Set(myArr);

console.log(mySet2);

// Size property

console.log(mySet2.size); // outputs 5

// Add and delete methods

mySet2.add(8).add(7); // since it returns the set, we can chain it
mySet2.delete(1); // will return false if not found in the set

console.log(mySet2);

findVal = 11
console.log(`${findVal} is in mySet2:`, mySet2.has(11)); // to check if the value is in set or not


