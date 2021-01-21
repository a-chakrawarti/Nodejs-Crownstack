// saving persistent data is rather limited

// store small amount of text in cookies, stored locally in the users machine
// session storage: store-key value pairs of data that persists while the window that stored the
// data stays open.
// local storage: data persists between sessions and can be used to store data as long
// as user chose to keep it. of same domain

// both are global.

// all methods are same for localStorage.

console.log(window.sessionStorage.setItem('testItem', true)); // will be lost only when we close the browser window

console.log(window.sessionStorage.setItem('JSONData', JSON.stringify({ testData: "This is test data"})));

console.log(window.sessionStorage.getItem('JSONData'));

let liveServer = window.sessionStorage.key(0);

console.log(liveServer);

console.log(window.sessionStorage.removeItem('JSONData')); // doesn't work for some reason

