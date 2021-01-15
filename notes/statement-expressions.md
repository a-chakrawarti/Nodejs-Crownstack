## Expression:

Any unit of code that can be evaluated to a value is an expression.
- Arithmetic Expressions: 10;, 10+54;
- String Expression: 'hello' + 'world';
- Logical Expression: 54 > 45; // outputs boolean value true
- Primary Expression: true;, 'hello, world!', // standalone expression such as lietral values
- Left-hand-side Expression: i =10;, let myObj = {};
- Assignment Expression: value = 10; // note, declaration is not part of an expression, so in let value = 10; let is not part of the expression 

## Statement

A statement is an instruction to perform a specific action. Such actions include creating a variable or a function, looping through an array of elements, evaluating code based on a specific condition etc. JavaScript programs are actually a sequence of statements.

- Declaration Statements: var sum; var average, var total = 0 (var total is a statement, and total = 10 is an assignment expression), function declarartion is a statement

- Conditional Statements: These executes based on the value of an expression.

```javascript
if (expression) {
    statement 1
} else {
    statement 2
}
```

## Expression Statements
Wherever JavaScript expects a statement, you can also write an expression. Such statements are referred to as expression statements. But the reverse does not hold. You cannot use a statement in the place of an expression.

- var a = var b; // error, statement in place of an expression
- var a = (b = 1); // since b = 1 is an assignment expression so acceptable
- console.log(var a); // error, can only pass expressions as an argument in a function

## Function Expressions vs Function Declarartions

#### Function Expression

- A function declaration is part of variable assignment expression.
- It may contain name(named function expression) or may not(anonymous function)
- Since thsi type of function comes after =, it is evaluated as an expression.
```javascript
let msg = function message(text) {
    console.log(text);
}

msg('hello');

// Anonymous function:

let msg = function (text) {
    console.log(text);
}

msg('hola');
```
- Only function expression can be immendiately invoked and are referred to as <b>Immediately Invoked Function Expression(IIFE)</b>

```javascript
(function () {
    'use strict';
    console.log('Immediately Invoked Function Expression');
})();
```

#### Function Declaration

- Function declaration falls under declaration statement as they perform the action of creating a variable whose value is that of the function.
- Function declaration must be named and are hoisted to the top.

```javascript
function greet(msg) {
    console.log('Hi ' + msg + '!');
}

greet('Anupam');
```

> Link: https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74