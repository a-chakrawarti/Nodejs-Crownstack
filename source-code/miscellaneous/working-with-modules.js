

// all modules run in 'strict mode' all the time.

// unlike like regular JS file, values and variables we declare inside the module
// will never become part of the global scope.


import { str } from "./es-module.js"; // we don't get to decide the imported token which is
// str 
import strOne from "./default-es-module.js"; // we can name the token anything since its default

console.log(str);

console.log(strOne);