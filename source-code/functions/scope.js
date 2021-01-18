// Scope defines the visibility of variables in different places in our code.
// Global Scope: Top-Level scope that contains all other scope which is technically the
// window object which represents the browser that has loaded the page in which the
// code is running.

// The global scope is visible to every other script file attached to the page.
// Thats we we should avoid setting variables in global scope if possible.

// Global scope has very useful properties as well, 
// Location object which is a property of global window object: 
// has a href property which has value of url.

(function () {
    'use strict';

    let myVar = 'hello'; // here myVar is in IIFE scope

    function local() { 
        var localVar = 'local'; // despite localVar being var, it is function scoped
        console.log(myVar, localVar);
    }

    local();
    // console.log(localVar); // ReferenceError: localvar is not defined


    for (let prop in { prop1: 'prop'}) { // here prop is block-scoped but if we change
                                         // change let to var that will be in IIFE scope.
        console.log(prop);
    }

    // console.log(prop); // ReferenceError: prop is not defined
})();