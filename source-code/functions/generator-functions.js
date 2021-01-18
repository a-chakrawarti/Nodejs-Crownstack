// Generator functions
// Don not return to completion, return a value, pause and resumed any time later.
// Can be picked up from where they are left off and continue processing.
// sometimes returing many values before they actually end. 

// regular functions are blocking while they are running i.e; no other code can run
// so generator function are only blocking while they are running not all the time.
// we can the the genrator function using a "yield" keyword.

function* square(x) {
    yield x * x; // pause and return a value
    console.log('Generator resuming!');
}

// We don't invoke generator function like regular functions,
// We invoke generator to get an iterator and the iterator which invokes the generator.

let squareIterator = square(5); // returns an iterator when invoked to gather yielded values
console.log(squareIterator.next()); // resumes generator, optionally passes data back in
console.log(squareIterator.next());

function* squareTwo(x) {
    let val = (yield x * x) * x;
    console.log('Generator resuming with new value', val);
}


let squareTwoIterator = squareTwo(5);
console.log(squareTwoIterator.next()); // if passed here it wont be evaluted as yet to eval yield
console.log(squareTwoIterator.next(10)); // yield expr is replaced with 10

