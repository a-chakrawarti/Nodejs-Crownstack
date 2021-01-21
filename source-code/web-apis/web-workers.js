// isn't working in mozilla firefox
// its a way to execute code in a different thread than the main UI thread
// move heavy processing to avoid blocking the user Interface

let worker = new Worker('worker.js');
worker.postMessage('Hello from the other side');
worker.onmessage = event => console.log(event.data);

setTimeout(() => worker.terminate(), 200);