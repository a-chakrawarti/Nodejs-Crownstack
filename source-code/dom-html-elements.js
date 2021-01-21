// DOM: Document Object Model which represents a webpage

// document object: webpage as a whole within the browser

// window object: represents the browser

let heading = document.getElementById('toBeScraped'); // null if not found

// get all of the elements of a particular class name, we can use

console.log(document.getElementsByClassName('item')); // array like collection, not array

console.log(document.getElementsByTagName('li')); // collections of list items like the above

// these return NodeLists, DOM elements


// Manipulating HTML elements once they have been selected from the page.

console.log(heading.id);

heading.id = 'heading';

heading.className = 'container-fluid';

heading.classList.add('bg-primary');

heading.classList.add('p-3');

heading.classList.remove('container-fluid');

console.log(heading.classList.contains('bg-primary'));

console.log(heading.tagName); // H3

// heading.innerHTML = '<span>Heading has been scraped!</span>';

// heading.outerHTML = '<h2>The heading you didn\'t expected!</h2>';

heading.textContent = 'Just changing the heading again! :<';

heading.setAttribute('contenteditable', true);

heading.removeAttribute('contenteditable')

// DOM Traversal

// childNode property

let ul = document.getElementsByTagName('ul')[0];
console.log(ul.childNodes.length); // (3) returns 7, line breaks in between each list items

// childern property

console.log(ul.children.length); // genuine elements, outputs 3 as expected!

console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);

// parentNode property

console.log(ul.parentNode); // direct child of <body>

// nextSibling & previousSiblings property

console.log(ul.firstElementChild.nextSibling); // nextElementSibling

console.log(ul.lastElementChild.previousSibling); // previousElementSibling

// Adding Elements

let newDiv = document.createElement('div'); 

document.body.appendChild(newDiv); // adds the new div at the end of parent element

let referenceElement = document.getElementById('heading');

document.body.insertBefore(newDiv, referenceElement);


// Removing elements

document.body.removeChild(newDiv); // removes the newDiv, if not find ERROR
if (document.body.contains(newDiv)) { // whether a parent contains the child
    document.body.removeChild(newDiv);
}

// Replace Element

document.body.replaceChild(newDiv, referenceElement);

// Create Element

let newElement = document.createElement('div');

newElement.textContent = 'new Element';

let comment = document.createComment('new Comment!');


// Document Fragment

let df = document.createDocumentFragment(); // smaller API to that of document and very 
                                            // lightweight.

// use document fragment as in-memory container to manipulate elements                                            

df.appendChild(newElement);
let target = document.getElementById('target');
target.appendChild(df);

// DOM Events: Interactive by responding to eventHandlers for different user actions on UI:

// Clicks on elements

let headingNew = document.getElementsByTagName('h2')[0];
headingNew.addEventListener('click', event => console.log('heading was clicked'));
// 'click' is name of the event, 2nd argument is a handler function, 3rd optional, bubbling or capture phase

// event delegation: bubble up

let list = document.getElementsByTagName('ul')[0];
list.addEventListener('click', event => {
    console.log('List was clicked!'); // would call body eventHandler if not stopped
    event.stopPropagation(); // will prevent travelling any furthur from this handler
});


function bodyClicked(event) {
    console.log('Body got clicked!');
}
document.body.addEventListener('click', bodyClicked);
document.body.removeEventListener('click', bodyClicked); // removes a named eventhandler function

// Event object has another useful method, prevent deault. it is useful when element is
// an anchor, when an anchor is clicked it goes to the href link. using this we can stop
// this default behaviour

let anchor = document.createElement('a');
anchor.textContent = 'Link to Crownstack';
anchor.setAttribute('href', 'https://crownstack.com');
document.body.appendChild(anchor);

anchor.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
});





