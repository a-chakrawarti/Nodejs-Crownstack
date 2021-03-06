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

// Delete has no effect on an object property that is as non-configurable. It will always return false.
// In strict mode, this will raise a SyntaxError.

// The delete operator will only delete the value and *not the index *of the array. It will leave the value of 
// that particular index as undefined. This is why the length does not change.

let test = {
    x: 'x'
};

delete test.x; // x no longer exists in test object

console.log(test.x); // undefined

// So a delete operator deletes a property from an object, and we can't use this to
// delete a variable.

// Reference: https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful

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

// Spread Operator

console.log('------------------------------ SPREAD OPERATOR -----------------------------------')

// add the elements of an existing array into a new array

let fruitsToAdd = ['mango', 'guava']

let fruitsInStall = ['apple', 'jackfruit', ...fruitsToAdd, 'grapes', 'coconut']

console.log(fruitsInStall);

// pass elements of an array as arguments to a function

function multiplyThreeNumbers(a, b, c) {
    console.log(a*b*c);
}

let numbers = [10, 20, 3, 40] 

multiplyThreeNumbers(...numbers); // will ignore the last element since fn expects for only 3 parameters

// copy arrays

let arrayOne = ['warmup', 'starter', 'maincourse', 'dessert'];

let arrayTwo = [...arrayOne]

arrayTwo.push('water')

console.log(arrayTwo)

// concatenate arrays

let arr1 = [0, 2, 4]
let arr2 = [1, 3, 5]

console.log('Using concat method - ', arr1.concat(arr2).sort()); // old method

console.log(arr1);

arr1 = [...arr1, 6, 7, 8, 9, ...arr2] // flexibility

console.log(`Using spread operator to concatenate - ${arr1.sort()}`);


// Rest Operator 

// Condense multiple elements into an array

console.log('------------------------------ REST OPERATOR -----------------------------------')

function multiply(multiplier, ...numbers) {
    let multiplierArr = numbers.map( ele => multiplier * ele)
    console.log(multiplierArr);
    let val = multiplierArr.reduce((sum, ele) => sum + ele, 0);
    console.log(val);
}

multiply(4, 1, 2, 3);

// TO_DO: Bitwise Operator
