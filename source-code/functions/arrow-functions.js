// Arrow Functions or Fat Arrow functions: Alternative syntax to define functions
// Syntactic sugar to use a shorter syntax which is equivalent to a function expression
// makes use of lexical this, which is different from regular functions
// Arrow function cannot be generator function.

let fun = num => {
    let square = num * num;
    return square;
};

console.log(fun(3));

// No need to use the function keyword
// => 
// We don't provide name to the function so anonymous function
// contained within curly-braces

let fun1 = num => num * num; // equivalent to the one above, single arg no parantheses
// this is implicit return,
// only only use return where there are multiple expression and includes curly-braces

let fun2 = (num1, num2) => num1 * num2; // multiple params in parantheses
console.log(fun2(5,6));

let fun3 = () => console.log('No params, still parantheses!');

fun3();

// return object literal

let fun4 = () => { prop1: "propValue" }; // without parantheses, js engine thinks its multiline
console.log(fun4());

let fun5 = () => ({ prop1: "propValue" });
console.log(fun5());

// Lexical this : TO_DO


// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions