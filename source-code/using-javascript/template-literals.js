// New type of string literals, introduced in ES2015
// Supports multiline strings and string expression interpolation.
// To create template literals we use backticks

// Line breaks with the new-line "\n" character

let template = `This is a template
literal`;

// Interpolation of data: evaluate expression inside the string

console.log(`Interpolation: ${template} and ${reverse('hello')} is reversed!`); // The token inside the curly braces is replaced
                                           // while template is evaluated at runtime.

// we can use function inside the token as well

function reverse(string) {
    return string.split('').reverse().join('');
}

// One of the most poweful use of template literal are tagged template strings.
// TO_DO: Tagged template strings.





