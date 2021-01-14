// Syntactic improvements to object literals

let id = 43,
    course = 'CS201'
    firstName = 'Anupam'.toLowerCase(),
    lastName = 'Chakrawarti'.toLowerCase()

let myObj = {
    id,
    course,
    firstName,
    lastName, 
    passwd() {
        return `${lastName}${id}`;
    },
    [course + firstName]: `Course ${course}`
};

console.log(myObj);
// console.log(myObj.passwd());

let copyObj = Object.assign({}, myObj, { emailId: `${firstName}.${lastName}@crownstack.com`});
console.log(copyObj);