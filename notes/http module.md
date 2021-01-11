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