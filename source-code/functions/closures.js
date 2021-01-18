// Closures: Is just an inner function that remembers all the variables
// in the scope of the outer function that it is within

// Once a function returns its scope is usually destroyed!

function Order() { // Outer function, constructor function
    let total = 0;

    return function addProduct(price) { // Inner function, name is only for debugging purposes
        let goodServicesTax = price * 0.18;
        let deliveryCharge = price * 0.05;

        total = total + price + goodServicesTax + deliveryCharge;

        return total;
    }
}

let myOrder = new Order();

console.log(myOrder(100));
console.log(myOrder(150)); 

// addProduct protected the total variable which in the Order constructor scope
// even after the Order constructor had returned, the inner function addProduct 
// protected the total variable and each time we invoke the addProduct method
// the total variable is accessible through this closure.

// A scope and a function that remembers that scope.
// Inner functions remember the scope of containing functions

