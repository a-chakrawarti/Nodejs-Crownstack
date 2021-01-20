// Regular expression

log = console.log;

let reg = /apple/; // regular expression literal
reg = /apple/g; // g means global flag
// using global flag, when there are multiple occurrences matches, it will indices for those
reg = /apple/i; // i means case insensitive flag

log(reg.source); // this returns the value of regex literal

let s = 'This is an apple is an apple that is an apple which costs 999';

// Functions to match expressions

// exec() - This function will return an array for match or null for no match
reg = /apple/g;
let result = reg.exec(s)
log(result); // under global flag: 11 --> we can use multiple exec() with global flag
log(result.input)
log(result.index)



result = reg.exec(s)
log(result); // under global flag: 23
result = reg.exec(s)
log(result) // under global flag: 40
result = reg.exec(s)
log(result); // return null on global flag, helps to iterate using loop

// test() : returns true or false

let result2 = reg.test(s)
log(result2) // this will output true if the reg is there in the string s


// match() : returns an array of results or null

// let result3 = reg.match(s) // wrong 

let result3 = s.match(reg);
log(result3);


// search() : returns index of first match else -1

let result4 = s.search(reg) 
log(result4); // returns 11

// replace() : return new replaced string with all the replacements
// if global flag is not given, only first match will be replaced.
reg = /apple/;

let result5 = s.replace(reg, 'orange');
log(result5);

// metacharacter symbols:


reg = /^This/; // ^ (carrot) means expression will match if string starts with

reg = /apple$/; // $ at the end of the string means "string ends with"

reg = /a.ple/; // . matches any one character

reg = /a*ple/; // matches any 0 or more characters

reg = /ap?ples?/; // ? after character means that character is optional

// character set [] : a-zA-z

reg = /a[a-z]ple/;

reg = /a[pzx]ple/; // can be a p, z, x

reg = /a[^pzx]ple/; // cannot be p, z, x // output false

reg = /a[a-zA-Z]p[labe][djje]/;


// Quantifiers {}

reg = /ap{2}le/; // p cab occur exactly 2 times

reg = /ap{0,2}le/; // p can occur 0 or 1 or 2

// Groupings : we use parantheses for groupings

reg = /a(p){2}le/; // grouping and quantify

reg = /a([prs]){2}le/;

// character classes :

reg = /\wle/; // word charcater _ or alphanumeric (one character)

reg = /\w+e is/; // \w+ means one or more word characters

reg = /\Wthis/; // Non word character

reg = /\W+this/; // \W+ means more than one Non word character

reg = /costs \d+/; // \d means digit and d+ means more than one digit

// \D and \D+ are non digits and more than one non digit

reg = /\sapple/; // \s matches whitespace characters (eg space, \t)

// \s+ matches one or more than one whitespace characters

reg = /\Sapple/; // match non whitespace characters

reg = /\S+ple/; // match one or more than one non whitespace characters

reg = /is\b/; // word boundary


// Assertions

reg = /a(?=p)/; // after a we need a character p

// Positive lookahead, will only match if theregular expression is
// followed by the lookahead string

let javaCheck = /java(?=script)/i; // java is followed by script
log(javaCheck.test('Java'))

reg = /a(?!p)/; // anything but p after a // "an" // Negative Lookahead


// Console-log outputs

if (reg.test(s)) {
    log(reg.exec(s));
    log('The string matches.');
} else {
    log('The string doesn\'t matches.');
}

// Reference: https://www.youtube.com/watch?v=vyMlFKRfrNk