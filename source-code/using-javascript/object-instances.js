
let prop1 = 'PropertyOne';

let myObj = {
    prop1
};

console.log(myObj.constructor); // constructor property
console.log(myObj.hasOwnProperty('constructor')); // inherits from Object Prototype
console.log(myObj.hasOwnProperty('prop1')); // outputs true, since it has the prop1 property


console.log(myObj.propertyIsEnumerable('prop1')); // outputs true

console.log(myObj.toString()); // outputs [object Object]

myArr = []

console.log(Object.prototype.toString.call(myArr)); // Array Constructor, object | outputs [object Array]

