/*
Objects: Consists series of comma-separated key-value
within curly braces
*/

// This way of creating object is known as object-literal syntax. (Recommended)

let myObj = {
    firstName: "Anupam",
    lastName: "Chakraborty",
    male: true,
    female: false
};

// The key-value pair is known as Properties and consist of an
// identifier(keys) and a value(any data-type, including object and functions)

// Using object constructor

let myObj2 = new Object();

// We can use 2 ways of accessing and adding values to an object:

// Dot Notation
console.log(myObj.male); // outputs true
myObj.firstName = 'Raju';

// Square-bracket Notation
console.log(myObj['female']); // outputs false
myObj['lastName'] = 'Rastogi';


function getHulkByColor(color) {
    let hulk = {
        red: 'Exists!',
        green: 'Exists!'
    };

    return hulk[color] || 'Doesn\'t Exists!' // if the key doesn't exists, we get undefined
                                             // which is equals to boolean false.
}

console.log(getHulkByColor('blue'));
console.log(getHulkByColor('red'));
