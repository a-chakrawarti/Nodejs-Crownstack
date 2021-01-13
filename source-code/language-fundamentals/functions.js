// Functions: named grouping of one or more expressions

/* 
function <identifier> () { // parameter-less

}
*/

// Function declaration
// When we declare the function, we list the parameters the function accepts
// And when we invoke the function, we pass it arguments.
// This is the difference between parameters and the arguments.

function greet(msg) {
    'use strict';
    console.log(msg);
}

greet('Hello, how you are doing?'); // invoking the greet function

function greetTwo(msg1, msg2) {
    'use strict';
    console.log(`${msg1}, how are you doing today ${msg2}?`);
}

greetTwo('Hello', 'Anupam'); // re-usable code
greetTwo("Hi", "Rahul");

function logArgs() {
    console.log(arguments);
}

logArgs('all', 'arguments', 'are', 'here'); // outputs array-like with all the arguments

// functions always return a value
// We haven't returned a value explicitly on all the above functions returns undefined.
// As soon as the function return it stops executing completely.


// function expression: behaves as functions do, to invoke we use the variable name,
// instead of function identifier.

let f = function () { // anonymous function: because it doesn't have an identifier

};

f();

let anonfun = function fun() { // it is recommended to use a function identifier even in
                                // function expression a.k.a named function expression

};

// So in JavaScript, parsing takes place, where it goes through the file and executes the
// variables. This way, even if there is a variable declared at the bottom, it is hoisted to
// the top before proceeding to the execution phase.
// variable assignment happens in the execution phase not in the parsing phase & 
// only declaration of variable happens in the parsing phase.
// This only happens with the variables declared using the "var" keyword, "let" & "const"
// do not exhibit the same behaviour.


function log() {
    var testVariable; // when hoisted
    console.log(testVariable);
    var testVariable = 'test'; // testVariable = 'test'; // after getting hoisted.
}

log(); // outputs undefined as testVariable is hoisted to the top