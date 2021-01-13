if (1 + 1 === 3) {
    console.log("The condition is true.");
} else {
    console.log("This condition is false.");
}

// Max of 2 numbers:

function maxOfTwo(num1, num2) {
    if (typeof num1 == typeof num2 && typeof num1 === 'number') {
        if (num1 > num2) {
            return num1;
        }
        else if (num1 < num2) {
            return num2;
        }
        else {
            console.log('Both values provided are same!');
            return num1;
        }
    }
    else {
        return 'Comparing 2 different datatypes!';
    }
}

console.log(maxOfTwo('a',89));
console.log(maxOfTwo(67,85));

// ternary Statement: Its a shortcut/compact/shorthand for a conditional that contains a single if, else
// Its a special operator that conatins 3 operands

(true) ? console.log('log for truthy') : console.log('log for falsey');

// Pass and Fail condition

let totalMarks = 500
let marksScored = 150


let result = (marksScored/totalMarks*100 >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);
