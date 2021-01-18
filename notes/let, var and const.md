### Difference between `var`, `let` and `const`.
***

// var, let and const create non-configurable properties that cannot be deleted with the delete operator:

Hoisting is a JavaScript mechanism where variables and function declarartions are moved to the top of their scope before execution.

`var` : function-scoped and can be updated and redeclared.

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

***


`let` : block-scoped, can be updated, but cannot be redeclared.

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

***

`const` : block-scoped, cannot be updated and redeclared.

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