class Employee { // class declaraction, are not hoisted to the top unlike function declaration
    constructor(name) {
        this.name = name;
    }

    shoutName() {
        return this.name.toUpperCase();
    }

    static reverseName(employee) { // static method
        return employee.name.split('').reverse().join('');
    }

    work() {
        console.log(this.name, 'is just an Employee.')
    }

    // staic methods can't be called via instances but can be called via class itself
}

// subclass extends base class using extends keyword

class Boss extends Employee {
    work() {
        console.log(this.name, 'is our Boss!');
        console.log(super.shoutName()); // invoke method of the base class from the subclass
    }
}

let emp = new Employee('ashok');
console.log(emp.shoutName());

console.log(Employee.reverseName(emp));

let emp2 = new Boss('Rahul Saxena');
emp2.work()

// class expression can be named or unnamed.