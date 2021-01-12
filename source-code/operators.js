/*
Operator is a special symbol which is used to perform operations 
on operands(values and variables).

Types of Operator:
- Assignment Operators
- Arithmetic Operators, +, -, *, /
- Comparsion Operators
- Logical Operators
- Bitwise Operators
- String Operators
- Other Operators
*/

// Arithmetic Operators

let add = 3 + 9;
let sub = 6 - 9;
let mul = 7 * 6.5;
let div = 6 / 0; // Infinity
let remainder = 10 % 4; // return 2

// Exponentiation Operator - Added in ES2016

let exp = 2 ** 10 // Similar to math.pow method
console.log('Exponentiation of 2 ** 5 is:',exp);

// Increment & Decrement Operators

let prefix = 6;
let postfix = 6;

console.log('Postfix Increment mode: ',postfix++); // returns then increment
console.log(postfix); // 7

console.log('Prefix Increment mode', ++prefix); // increments and then returns
console.log(prefix)

// Creates confusion and hence instead use Assignment operator

// Assignment Operator: 

let additionAssignment = 1;
additionAssignment += 2;

// Similarly, subtractionAssignment, multiplicationAssignment, 
// modulousAssignment, divisionAssignment

console.log(additionAssignment) // Outputs 3

// Comparison Operators

/*
Type coercion is the process of converting value from one type to another 
(such as string to number, object to boolean, and so on).

- Intentional or explicit type coercion (type casting)
-  
*/

console.log(1 == true); // outputs true, equals to operator.

console.log(1 === true); // outputs false as it is "strict equals to" where it checks if
                         // both values and types are equal or not. 1 is a number and true is
                         // a boolean so these are 2 different types.

console.log(1 !== true); // outputs true

console.log(5 >= 6); // ouputs false


// Unary Operator: has a single operand rather than two

let test = {
    x: 'x'
};

delete test.x; // x no longer exists in test object

console.log(test.x); // undefined

// So a delete operator deletes a property from an object, and we can't use this to
// delete a variable.

// ----------------------------------

// Typeof operator works well with primitives and doesn't work with complex types

let word = 'hello';
console.log(typeof word); // outputs string

let arr = [];
console.log(typeof arr); // outputs object

// void operator, used in anchor tag

// <a href="javascript:void(0)">Link</a> , does absolutely nothing

// -------------------------------------------------------------------------

// Logical Operators:

// AND operator ( && )

console.log(true && false ); // outputs false

// OR Operator ( || )

console.log(true || false ); // outputs true

// NOT Operator

console.log(!true); // outputs false

// Comma Operator: Used to include multiple expressions in a place where only one
// expression is expected. Rarely used.

let x = 'hello', y = 'world';

let obj = {x: 'x', y: 'y', z: 'z'}; // Comma separator

...something; // Spread Operator

// TO_DO: Bitwise Operator
