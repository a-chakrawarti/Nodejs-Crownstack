// Date object can only be generated using a constructor and so the new keyword

log = console.log;

let now = new Date() // object
let nowString = Date() // string
console.log(nowString);

let dob = new Date('july 01 2000');
console.log(dob);

let notADate = new Date('?');
console.log(notADate);


// methods. getters, setters and converters

// getters: getDay, getDate, getMonth, getFullyear
log(dob.getUTCDay());

// converters

log(now.toString()); // equal to Date()

log(now.toUTCString()); 

log(now.toDateString());

log(now.toTimeString());

log(now.toISOString());

log(now.toLocaleString());