/*
There are two types of data-types:

1. Primitive data Types: (7) These data types are predefined (already defined), can store a 
                            a single data

- String, Number, BigInt, Boolean, undefined, null, Symbol

2. Non-Primitive data Types: Are created by the programmer and is not defined. Objects such as
                             functions, array are non-primitive values. Non-primitive values are 
                             mutable data types. Value could be changed once created. Can store
                             collection of data.
*/


// String Examples:

var firstName = "Anupam"; // Double quotes
let lastName = 'Chakraborty'; // Single quotes
let fullName = firstName.concat(' ',lastName);
let companyName = "Crownstack Technologies Pvt. Ltd.";
const myFirstDay = `Hello, I am ${fullName}` + ` and today was my first day at ${companyName}`; // Backticks ES2015

// backticks can also be used for multiline without using \ operator.


var aValue; // a variable having identifier "aValue", undefined

console.log(myFirstDay);

console.log(aValue); 


/*
Access String characters:

We can access string characters using 2 ways
- Strings as an array
- Using charAt() method.
*/

const greet = `Hello, ${fullName}`;

console.log(greet[0]);

console.log(greet.charAt(1));

// Strings are immutable in JavaScript as characters of a string cannot be changed.

// let a = "hi"

// a[0] = 'H'

// console.log(a);

// Multiline string

// This could be achieved by either using + or \ operator.

const sayHi = 'This is just a "Hi" message' + 
' from the JavaScript'
                
const sayHello = 'This is another yet important \
"Hello" message from \
JavaScript'

console.log(sayHi);

console.log(sayHello);

// String Length

// To find length of a string, we can use built-in length property.

const lengthOfA = "This variable contains a string of x length, use .length \
property to find its length"

console.log(lengthOfA.length);

// String Objects

const car = "Xcent";

const carMaker = new String('Hyundai');

console.log(car, 'is of type: ', typeof(car));
console.log(carMaker, 'is of type: ', typeof(carMaker));

// Avoid string objects as it slows down the program.

// String Methods:

// stringVariable.split(); -> converts the string to an array of strings

// stringVariable.slice(start, end) -> returns a part of a string

// -------------------------------------------------------------------------------------------------------------------------------------------

// Number Examples: represents integer and floating numbers

// Number types can also be Infinity, -Infinity, NaN (Not a Number)

const numberOne = 3;

console.log(numberOne/0); // Infinity
console.log(-numberOne/0); // -Infinity
console.log("abc"/numberOne); // NaN

let oct = 0o77; // 63 - Octal ... decimalValue.toString(8)
let hx = 0x0011; // 17 - Hexadecimal ... decimalValue.toString(16)
let bin = 0b1100; // 12 - Binary ... decimalValue.toString(2)

// Note: NaN != NaN, we can check only by using a method isNaN.

// ------------------------------------------------------------------------------------------------------------------------------------------

// Symbols: Special primitive data type

let mySymbol = Symbol('my-symbol'); 

// We can pass a description in Symbol which is only used for debugging purposes.
// its purpose is to store key to a objects., Symbols are always unique.

let sym1 = Symbol('x');
let sym2 = Symbol('x')

console.log(sym1 === sym2); // Value and type must be identical 


// Array: A container like a variable but can hold multiple values

let array1 = [5, 'something', false]; // Multiple data types, literal form
let array2 = new Array();

array1[0];

// Objects: Are container for key-value pairs of data

var obj = {
    rollNumber: 4,
    fullName: 'Anupam'
}

console.log(obj.rollNumber); // Dot notation
console.log(obj['fullName']); // Bracket notation