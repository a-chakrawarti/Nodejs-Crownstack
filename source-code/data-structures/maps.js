/*
Maps are similar to sets but unlike sets it stores
key-value pair instead of individual values.
*/

// Map Contructor (No literal form)

let myMap = new Map();

// instead of passing an iterable to the
// constructor, we need to pass a 2-D array 
// to the constructor.

let myMap2 = new Map([['ward_no', 43], ['house_no', 106], ['state', 'Tripura']]); // [k,v],[k,v]
// keys and the values can be of any data-types
// wrong explanation: https://code.tutsplus.com/courses/javascript-fundamentals/lessons/maps at 1:00
// correction: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#relation_with_array_objects

// Add a new key-value pair, set()

myMap2.set('pin_code', 100756); // add a new key to the Map

// Get method

console.log(myMap2.get('state')); 

// API is similar to Sets, like has() method.

console.log(myMap2);


