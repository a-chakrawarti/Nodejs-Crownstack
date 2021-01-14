/*
Getters and setters are special functions that are invoked automatically whenever a 
property is accessed or assigned to.
*/

let myCompany = {
    role: 'Software Developer Trainee',

    get position() {
        return `The current position in your company is ${this.role}.`;
    },

    set position(new_role) {
        console.log('\nAssigning new role ...');
        console.log(`The new assigned role is ${new_role}.`);
        this.role = new_role;
    }
}

console.log(myCompany.position)

myCompany.position = 'Jr. Software Developer';

console.log(myCompany);
