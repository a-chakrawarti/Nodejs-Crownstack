function testFunction(arg1, arg2) {
    return arg1 + arg2;
}

// Length property
console.log(testFunction.length); // outputs 2, no of named parameters

// Methods

// call, apply and bind methods

let person = {
    name: 'Anupam',
    job: 'Trainee',
    company: 'Crownstack'
}; 

function introduce(lastName) {
    console.log(`My name is ${this.name} ${lastName} and I am ${this.job} at ${this.company}.`);
}

introduce.call(person, 'Chakraborty'); // c for call, c for comma to remember

// when we use the call method, we specify what the this object inside the function we are
// calling should point to. comma-separated arguments

introduce.apply(person, ['Chakraborty']); // a for apply, a for array

// The difference between call() and apply() method is how we pass arguments.
// apply() takes only 2 arguments, 1st the object for this inside the function and
// 2nd argument is an array containing all the arguments that we can to pass the function
// that we are applying.

function addTocart(price, shipping) {
    if (!this.total) {
        this.total = 0;
    }

    this.total += price += shipping || 0;
    return `${this.name}'s cart total is $${this.total}`;
}

let anupamsCart = addTocart.bind(person, 1);

console.log(anupamsCart(1.99));
console.log(anupamsCart(4.99));