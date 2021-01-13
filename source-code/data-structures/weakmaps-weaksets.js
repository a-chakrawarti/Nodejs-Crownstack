/*
References to the values inside weak sets and weak maps
are held weakly and do not prevent garabe collection. It means that the JavaScript 
Engine will be able to remove the values when they are no longer referrenced and 
this can improve performance. Neither of these data types can be iterated.
*/

// Weak Sets : Can only be composed of Objects
// Weak Set Constructor

let myWeakSet = new WeakSet();

// Only have add, delete and has methods (Smaller API)

let myObj = {};

myWeakSet.add(myObj);

console.log(myWeakSet.has(myObj)); // outputs true

// delete method

myWeakSet.delete(myObj);

console.log(myWeakSet.has(myObj)); // outputs false


// Difference betweeen Regular Map and Weak Map

// In regular Map, key inside it can be of any data type.
// Keys in weak map must be objects.

let myWeakMap = new WeakMap();

// delete, has, get and set methods are only available

// main reason to use weaksets and weakmaps is to avoid memory leaks

