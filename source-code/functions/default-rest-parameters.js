// Default parameters are a way to specify a value or a parameter

function setName(name='Anonymous') {
    console.log(name);
}


setName();
setName('Rahul Rastogi');


// Rest parameter

function joinStuff(...stuffs) { // spread operator
    console.log(stuffs.join(' '));
}

joinStuff('rest', 'params', 'rule');

// arguments object is array-like but not array so it doesn't have methods like join
