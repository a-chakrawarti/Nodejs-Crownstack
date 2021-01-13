let limit = 0;

while (limit < 5) {
    if (limit == 3) {
        break; // exit loop early, condition met
    }
    console.log(limit += 1);
}

// Do-while

let condition = true;

do {
    console.log("Executed atleast once");
    condition = false;
}
while (condition);