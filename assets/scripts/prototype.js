console.log('Hello, world!');

let obj = {
    name: 'Sanjay Tripathi',
    age: '29',
    gender: 'Male',
    location: 'Faridabad'
}

function myObj(name) {
    this.name = name;
}

// to add prototype in object literal we will have to create a constructor
// obj.prototype.setName = function(name) {
//     name = this.name;
// }

// function obj() {

// }

// obj.prototype.setName = function(name) {
//     name = this.name;
// }

// let vikas = new obj();

// vikas.setName('Vikas Dhyani');
// console.log(vikas)

// avoid doing the below

// Object.prototype.getName = function() {
//     return this.name;
// } 

myObj.prototype.getName = function() {
    return this.name;
} 

let myObj2 = new myObj('Rahul Shirvastav');
console.log(myObj)

console.log(myObj2);

console.log(myObj2.getName())