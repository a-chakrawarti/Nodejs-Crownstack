/*
Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). 
Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — 
type coercion is implicit whereas type conversion can be either implicit or explicit.
*/

let valOne = '78';
let valTwo = 65;
let sum = valOne + valTwo; // to avoid implicit type coercion, we can typecast valOne using let sum = Number(valOne) + valTwo. 

console.log(sum); // ouputs 7865 not 143

// Here, valTwo gets coerced from number to String data-type by the compiler automatically.

// Link: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion


/*
Truthy values: Which are considered `true` in Boolean context.

JavaScript does type coercion in Boolean contexts.
*/

console.log("Truthy values: ")
if ({}) {
    console.log('{}: true')
}


if (12n) {
    console.log('BigInt "12n": true')
}


if (new Date()) {
    console.log('new Date(): true')
}


if ([]) {
    console.log('[]: true')
}


if ("0") {
    console.log('"0": true')
}


if ("false") {
    console.log('"false": true')
}


if (Infinity) {
    console.log('Infinity: true')
}

/*
Likewise Falsy value is a value which is considered false when encountered
in a Boolean context.
*/

console.log("\nFasly values: ")

/*

falsy values in JavaScript which are coerced to false in Boolean contexts.

if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
*/

// Link: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// Link: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

