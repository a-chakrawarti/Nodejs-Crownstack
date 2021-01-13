
// String literal
let testString = 'This is a test string'; // String is primitive and primitive don't have
// properties or methods

// length property
// whenever we try to invoke a method or property of a primitive JS will wrap the
// primitive in a object and is known as Boxing.

console.log(testString.length);

// string to array

let strArr = testString.split(' ');
console.log(strArr);

// indexOf: the first index of substring, starts from 0 index

console.log(testString.indexOf('test')); // returns -1 if fails to find it

// lastIndexOf: starts from last and same as indexOf

console.log(testString.lastIndexOf('is'));

// String to capitals, lowercase i.e; toLowerCase();

console.log(testString.toUpperCase());

// substring, if provided negative, turns it to 0

console.log(testString.substring(8)); // start, end

console.log(testString.substring(8,14));

// slice: difference between substring, accepts - value and starts from end of the string

console.log('Substring with -6:', testString.substring(-6));
console.log('Slice with -6:', testString.slice(-6));

// trim method: trim space characters from start or from end

console.log('          hello    '.trim()); // outputs just hello


