let a = 'Anupam';

if (a == undefined) { 
    throw new Error('This is undefined.'); // throw custom error, for example server has not provided the data in correct format
} else {
    console.log('This is not undefined!')
}

try {
    console.log('We are inside try block!')
    undefined();
    
} catch (error) { // catch if there is an error inside the try block
    console.log('The error is', error.name, '! The reason being', error.message);    
} finally {
    console.log('This is finally of try-catch block');
}
