let myArr = [111, 222, 333];

for (let i = 0; i < myArr.length; i++) { // first expression is only evaluated once
    console.log(myArr[i]);
}

// we can improve the above loop
console.log("\nImproved for-loop");
for (let i = 0, j = myArr.length; i < j; i++) { // this way we are not checking the length
                                                // of the array every single iteration.
    console.log(myArr[i]);
}

// using separators (not recommended)

console.log("\nUsing Separators");
let i = 0;
for (; ;) {
    if (i >= myArr.length) {
        break;
    }

    console.log(myArr[i]);
    i += 1;
}

// for-in Loop: used for iterating values inside an object

console.log("\nFor-in Loop");
let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log('key is:', prop, 'value is:', obj[prop]);
    }
}

// for in loop are only able to iterate over properties that are marked as
// enumerable.

// In for loop elements are accessed sequentially, from 0 to last index
// for-in loop do not guarantee the order the properties are accessed. 


// for-of loop

console.log("\nFor of loop");

// Instead of keys being iterated of a object, values are iterated.
// In for-of loop we can't iterate objects.

// used to iterate over true array or array-like object (aruguments)

for (let val of myArr) {
    console.log("The value is:", val);
}

// can iterate any kind of iterable not just arrays

let mySet = new Set([1, 2, 3, 4, 4, 5, 6, 7, 5, 3]);

for (let val of mySet) {
    console.log("The values in mySet are:", val);
}

let myMap = new Map();

myMap.set('key1', 'value1').set('key2','value2').set('key3','value3');

for (let val of myMap) {
    console.log("The values in myMap are:", val[1]); // returns array and 2nd element or at index = 1 are values
}

// In terms of performance, for of loop is slightly faster both for-in and for loop.


// forEach loop

console.log('-----------------ForEach-----------------');

var numbers = [45, 4, 9, 16, 25];
numbers.forEach( (value, index, array) => { return console.log(`At index ${index}: ${value} is present.`) // Arrow function / fat arrow
});

numbers.forEach((val, index) => console.log('At ', index, 'value is ', val));

// function myFunction(value, index, array) {
//      console.log('value');
// }

// for-in with Array
console.log('Usage for-in loop Array:')
for(let val in numbers) {
    console.log(numbers[val]);
}

// Loop backwards

console.log('\n\n\nLoop backwards')
newArr = [1, 2, 3, 4, 5];

for (let i = newArr.length - 1; i >= 0; i--) {
    console.log(newArr[i]);
}

// Reference: https://www.techiedelight.com/loop-through-array-backwards-javascript/