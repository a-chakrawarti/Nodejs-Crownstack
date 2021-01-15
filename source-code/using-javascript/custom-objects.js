// Custom objects: Object Oriented JavaScript

(function () {
    'use strict';

    let Person = function(name) { // construction function due to how we use it
                                   // thats why capitalize the first character in Person.
                                   // it needs to have the new keyword to create an object
    
    // Or one could create a constructor function using this way as well
    // function Person(name) { this.name = name };

        this.name = name;
    };

    Person.prototype = {
        greet() {
            return `Hi, my name is ${this.name}.`
        }
    };

    let anupam = new Person('Anupam');
    console.log(anupam);
    console.log(anupam.greet());

    // JavaScript uses prototypes instead of classes. JS does have classes but are
    // just syntactic sugar to make writing object oriented JS a little easier.
    // even classes use the prototype internally.

    // instances of the Person will inherit Object prototype because the Person prototype
    // object is just an object literal

    let ram = Object.create(Person.prototype, { // bypasses Contructor
            name: { writable: true, value: 'Ram'}
    });

    console.log(ram.greet());

    // defineProperty
    // 3rd argument is descriptor object

    Object.defineProperty(ram, 'job', {
        value: 'Developer',
        writable: true,
        configurable: true,
        enumerable: false
    });

    console.log(ram);

    // defineproperties : Adds a no of different properties at the same time

    Object.defineProperties(ram, {
        heightInCm: {
            value: 183,
            enumerable: true
        },
        weightInKg: {
            value: 78
        }
    });

    console.log(ram);

})();

/*

Property Attributes
Data properties in JavaScript have four attributes.

value: The property’s value.
writable: When true, the property’s value can be changed
enumerable: When true, the property can be iterated over by “for-in” enumeration. Otherwise, the property is said to be non-enumerable.
configurable:If false, attempts to delete the property, change the property to be an access-or property, or 
change its attributes (other than [[Value]], or changing [[Writable]] to false) will fail.

Link: https://www.geeksforgeeks.org/objects-in-javascript/
*/
