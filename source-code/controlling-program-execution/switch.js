// Switch can perform faster than an equivalent if. Also construct is more readable.
// if is used for boolean, truthy or false conditions whereas, 
// switch can be used with other values such as strings.

// let switcher = 'two';
let switcher = 'ok';
switch (switcher) {
    case 'one':
        console.log('Inside one!')
        break;
    case 'two':
        console.log('Inside two!');
        break;
    case 'three':
        console.log('Inside three!');
        break;
    default:
        console.log('Didn\'t match any case!');
}

// In absence of break; statement, all cases will run.