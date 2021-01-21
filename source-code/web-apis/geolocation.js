// must accept prompt

// navigator.geolocation, asynchronous
// another method: watchPosition(): invokes success or error handlers everytime the position
// changes, returns numerical id
// clearWatch(numerical_id) -> to stop watchPosition

navigator.geolocation.getCurrentPosition(
    location => console.log(location),
    err => console.log(err),
    {
        timeout: 0
    }
);