onmessage = event => {
    console.log(event.data);
    postMessage('I must have called you thousand times');
}