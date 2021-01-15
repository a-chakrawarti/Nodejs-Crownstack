// The value this object is usually an object but not alaways
// In global context this points to the "window" object
// And inside a function this is "undefined"
// inside an method, this will point to the object itself
// inside constructor, this will point to instance object created by the constructor

let myObj = {
    method() {
        console.log(this);
    }
};

myObj.method(); // outputs { method: [Function: method] }

// console.log(this);

function Person(name) { // Constructor function
    this.name = name;
}

let ram = new Person('Ram');