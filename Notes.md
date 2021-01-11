### JavaScript/ ECMAScript (ECMA-262)

- European Computer Manufacturer's Association: ECMAScript or ECMA-262 is a standard for a scripting language. It specifies the core features that a scripting language should provide and how those features should be implemented.
- JavaScript is basically ECMAScript at its core but builds upon it.
- JavaScript is the most popular implementation of ECMA-262 standard.
- Netscape proposed JavaScript to ECMA for standarlization but due trademark issue with name JavaScript, standard became ECMAScript.

- Javascript is a dynamically type language.
- Typecript is a statically typed language.

> Reference: https://stackoverflow.com/questions/4269150/what-is-ecmascript

### Difference between `var`, `let` and `const`.

Hoisting is a JavaScript mechanism where variables and function declarartions are moved to the top of their scope before execution.

- `var` : function-scoped and can be updated and redeclared.

```javascript
console.log (greeter);
var greeter = "say hello"
```

when it is interpreted, it becomes

```javascript
var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"
```

So `var` variables are hoisted to the top of their scope and initialized with a value of `undefine`. `var` can be de declared without being initialized.


- `let` : block-scoped, can be updated, but cannot be redeclared.

`let` variables are not initialized.

```javascript
function fallActivities(activity) {
  for (let i = 0; i < activity.length; i++) {
    let name = activity[i]
  }  
  
  console.log(i) // ReferenceError: i is not defined
  console.log(name) 
}

activity = ['hiking', 'Halloween', 'Pumpkin Patch', 'Read Snoopy Fall Comics', 'Jack O Lantern'];

fallActivities(activity);
```

Here, `i` and `name` is define within the block `{}` so when we call these variables outside the  code-block `{}` we get `ReferenceError`. Thats the **block-scoped**.


- `const` : block-scoped, cannot be updated and redeclared.

`const` must be intialized during declaration.

```javascript
let welcome = 'Welcome to Sweater Season'
const snoopy = 'Snoopy looks so cute with sweaters!!'
welcome = 'Pumpkin Spice Latte! Halloween! Red Leaves!'
snoopy = 'Snoopy looks ugly in sweaters!' // TypeError: Assignment to constant variable.
```

If we try to redeclare the value of a `const` variable we are greeted with `TypeError`.

> Reference: https://medium.com/swlh/the-difference-of-var-vs-let-vs-const-in-javascript-abe37e214d66

> Reference: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/#:~:text=var%20declarations%20are%20globally%20scoped%20or%20function%20scoped%20while%20let,be%20updated%20nor%20re%2Ddeclared.




#### HTTP Request and HTTP Response

```javascript
const = require('http')
```

- `require` function is used to manage dependencies.
Here, `http` is a built-in node module/library.

```javascript

const server = http.createServer((req, res) => {
    res.end('Hello World\n');
});
```
Here, the parameter passed to `createServer` function is an anonymous function (listener) and in JavaScript we can pass function into another as a parameter. `req` is a object which is coming from the client. `res` is a HTTP Response object which server sends back to the client after doing some modification i.e; here the `end` function. So basically, `end'` function writes the data and ends the connection.

```javascript
server.listen(4242, () => {
    console.log('Server is running ...');
}); 
```

Once we call `listen` function the server gets activated. Accepts several parameters like what port to use for the server, here it is 4242. And the second here is a function, but it has no parameter, just a body which prints `'Server is running ...'`

To terminate the server press Ctrl+

When server is up and running it listens to all the HTTP Connections (HTTP Request). Node will only use V8 which a Virtual Machine to execute Javascript only when there is established HTTP Connection other-wise V8 will remain idle.

> Source: https://www.youtube.com/watch?v=3XyeDxw_6KA