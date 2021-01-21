// Gives us ability use CSS selectors in order to select elements from the page
// JQuery, now supported by default

let heading = document.querySelector('#heading');

console.log(heading);

// first child of the list

let list = document.querySelector('ul li:first-child'); // only first child even if we omit ":first-child"
list = document.querySelectorAll('ul li'); // gets all the childrens
console.log(list);
