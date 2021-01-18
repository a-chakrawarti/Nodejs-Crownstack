/*
Continue — The continue statement terminates execution of the current iteration in a loop.
Break — The break statement breaks (stops) the execution of a loop entirely.

Remember that both break and continue affect the current loop.
*/

// Continue Statement:

// Example: Log the even numbers
// In each iteration we can check to see if i is odd. If it is, we’ll stop execution of the current 
// iteration using the continue statement. If i is even, we can continue and console.log the value of i.

for (let i = 1; i <= 10; i++){
    if (i % 2 == 1) continue; // hen we use the continue statement the loops iteration stops executing immediately. 
                              // The console.log code is therefor never executed on odd numbers.
    console.log(i);
}


// Break Statement:


var list = ['Hello', 'my', 'name', 'is', 'Ramesh'];

for (var i = 0; i < list.length; i++) {
    if (list[i] === 'is') { break; }
  console.log(list[i]); // outputs 'Hello, my, name' as when 'is' is encountered loop is break
}


// Using for-of loop


for (let elem of list) {
    console.log(elem);
    if (elem == 'is') { break; } // outputs 'Hello, my, name, is', breaks from loop after logging 'is'
}

// every()
// The every() method will test all elements of an array 
// (all elements must pass the test). 
// It is a good alternative to replace forEach for breaking an array.

console.log("\n------every() method---------");
var list = ['My', 'name', 'is', 'Ramesh'];

list.every(function(elem) {
  console.log(elem); // outputs "My, name"
  if (elem === 'name') {return false;}
  return true;
});

// some()
// The some() method will test all elements of an array 
// (only one element must pass the test). It is also a good alternative to replace forEach for breaking an array

console.log("\n------every() method---------");


var list = ['My', 'name', 'is', 'Ramesh'];

list.some(function(elem) {
  console.log(elem); // outputs "My, name"
  if (elem === 'name') {return true;}
  return false;
});

// Reference: https://medium.com/@benjamincherion/how-to-break-an-array-in-javascript-6d3a55bd06f6

// Nested For loop

for (let i = 0; i < 5; i++) {
    if (i % 2 == 0) continue; // This will skip when i = 0,2,4 and will run the nested loop for i = 1 and 3.
    for (let j = 0; j < 5; j++) {
       if (j == 2) break;
       console.log(`i = ${i}, j = ${j}`);
    }
 }

 // outputs
//  i = 1, j = 0
//  i = 1, j = 1
//  i = 3, j = 0
//  i = 3, j = 1

// Reference: https://codeburst.io/javascript-continue-vs-break-47b5c15cacc6