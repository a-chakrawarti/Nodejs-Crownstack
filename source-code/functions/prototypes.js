// Special property that all object have.


let myObj = {};
console.log(myObj.hasOwnProperty('key')); // hasOwnProperty method, came from object literal prototype.
// which is the prototype property of the Object. // return false


console.log(myObj); // __proto__ property, awful for performance and deprecated
// can use useful for only debugging

// All objects and object instances have one

// prototype chain is equal to scope chain (read)










