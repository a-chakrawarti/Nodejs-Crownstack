// Prototype property:
// All objects in JS are descened from the object constructor, and the property
// and methods it has access to are inherited from this prototype object.

// methods available through object constructor

let myObj = {};
Object.prototype.mySpecialProperty = 'Special'; // prototype is a live object
console.log(myObj.mySpecialProperty); 

// using forEach on a object

let newObj = {
    prop1: "propertyOne"
};

Object.keys(newObj).forEach(function (item) {
    console.log(newObj[item]);
});




let newArr = [1, 2, 3];
Array.prototype.head = function () { return this[0]; }
console.log(newArr.head());

newObj = {
    greet: 'Hello',
    name: 'Anupam',
    age: 65
};

// once an object is frozen, it cannot be unfrozen again,
// there is no unfreeze method.

Object.freeze(newObj);

if (!Object.isFrozen(myObj)) { // checks if the object is not frozen
    newObj.age = 5;
    newObj.name = 'Vikas';
}

console.log(newObj.name); // ouputs Anupam since newObj is Freezed so overwriting won't take place
console.log(newObj.age); // outputs undefined.


// solution: create a new object and copy properties of old one to new one

duplicateObj = {};

Object.keys(newObj).forEach(function (item) {
    console.log(item);
    duplicateObj[item] = newObj[item];
});

console.log(duplicateObj);


// Seal: We can change the values of existing properties, but we can't delete them.
// And we can't add any new properties.


// Object.seal(duplicateObj);

duplicateObj.greet = 'Hi';
console.log(duplicateObj);

if (!Object.isSealed(duplicateObj)) {
    delete duplicateObj.age;    
}
// delete duplicateObj.age; // unable to delete
console.log(duplicateObj);

// Prevent extension method: Prevents any new property from being added to an Object.
// we can change, delete existing properties. to check if the object is extensible or not
// use isExtensible() method.

Object.preventExtensions(duplicateObj);

duplicateObj.height = '5\'10"';

console.log(duplicateObj);