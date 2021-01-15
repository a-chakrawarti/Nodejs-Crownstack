// An object and array returns object when used typeOf


let myObj = {};
let myArr = [];

console.log(Array.isArray(myObj));
console.log(Array.isArray(myArr));

// create an array from string

let myStringArr = Array.from('This just a string!'); // Map, Set or even argument object of a function
console.log(myStringArr);

