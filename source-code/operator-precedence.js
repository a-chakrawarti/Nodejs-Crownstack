// Operator precedence: The order in which operators are evaluated when there are multiple
// operators in the same expression.

let value = 1 + 4 * 2 // outputs 9; multiplication operator has higher precedence than addition
// so first would be 4*2 = 8 then 1 will get added to output 9.

console.log(value);

// to avoid such mistakes we could warp the expression in paranthesis.

// Paranthesis are a.k.a the "grouping operator" has the highest precedence than any other operator.

let valueExp = (1 + 4) * 2 // outputs 10.

console.log(valueExp);

// equal precedence operators are evaluated from LEFT to RIGHT -> Operators Associativity

// POSTFIX INCREMENT AND DECREMENT OPERATOR, NOT, UNARY OPERATOR (These are all evaluated RIGHT to LEFT).
// Arithmetic Operator: Exponentiation, Multiplication, Divison, Modulus, Addition and Substraction
// Comparison Operators, all evaluated from LEFT to RIGHT
// Logical Operators
// Assignment Operators, R-> L Associativity
// Spread Operator
// Comma Operator <- Lowest precedence out of all of the available Operators, L -> R Associative
