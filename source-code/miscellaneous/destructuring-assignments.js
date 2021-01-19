// Destructuring Assignment:

// Extract values held within object and arrays
// and store them in variables using a literal syntax
// in array we can chose not to pass the variable name for 1st element to access the 2nd
// this could be done using 

let [,y1] = ['value x', 'value y1'];
console.log(y1);

let [x,y] = ['a', 'b']; // array on the right is being destructured
console.log(x, y);


// with objects

let {a,b} = {a:'val1', b:'val2'}; // the variable name must match keys with the object which is
                                  // is being destructured.
console.log(a, b);

function returnMultiDimensionArr() {
    return [
        ['a', 'b', 'c'],
        [1, 2, 3]
    ];
}

let [arr1, arr2] = returnMultiDimensionArr();
console.log(arr1, arr2);

let [arr3, arr4] = [['d', 'e', 'f'],[4, 5, 6]];
console.log(arr3, arr4);

// The more complex the object we are trying to destructure is, the more complex is
// the assignment in the left hand part will be. And could get very very complex if the
// object we are destructuring is very complex

// useful and saves time but can get very complex very quickly

let { firstName, lastName, employment: { status }} = {
    firstName: 'Raju', lastName: 'Srivastav', employment: {status: 'Comedian'}
};

console.log(firstName, lastName, status);