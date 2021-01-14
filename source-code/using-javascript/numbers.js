(function () {
    'use strict';

    console.log(Number.isNaN(5 * 'hello')); // outputs true

    // isNaN is a static method is invoked directly on the Number object rather than Number
    // instances.
    // Other methods are isFinite, isInterger, isSafeInteger


    let floatString = "1.5kilograms";
    let intString = '3good morning';

    // Number needs to come at the start of the string to successfully parse, or else will
    // return NaN.

    // if we do typeof with a NaN, it will show us number which is why its hard to detect
    // a NaN. Technically, NaN is a type of Number.

    console.log(Number.parseFloat(floatString)); // outputs 1.5, typeof number
    console.log(Number.parseInt(intString)); // outputs 3, typeof number

    let num = 5.402065784;
    console.log(num.toFixed(2)); // truncate number instance to 2 decimal places.

    // Instance methods: toFixed, toExponential, toLocaleString, toPrecision, toString

    // toFixed rounds to a fixed no of decimal places
    // toPrecision formats a number to a given no of significant digits.
    
})();