// AJAX ( Asynchronous JavaScript and XML )

// make a request to the server, and process the response from the server without reloading the page
// which allows us to update part of the page in response without reloading the page
// AJAX is limited by browser for security reason: is only able to access data from same domain
// files can be uploaded and downloaded over AJAX 

// let num = prompt('Fun number fact, Enter a number')
// let xhr = new XMLHttpRequest(); // XHR object
// xhr.open('GET', `http://numbersapi.com/${num}`, true);
// xhr.send();

// xhr.onload = function() {
//     console.log(xhr.responseText);
//     window.alert(xhr.responseText);
// }

// AJAX is not a programming language, rather it is a set of existing technologies.
// No page reload/ refresh
// Modern websites use JSON instead of XML for data transfer.
// Saves network bandwidth
// very interactive

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickedHandler);

function buttonClickedHandler() {
    console.log('Fetch Button Clicked!');
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true); // true: async or not // non-blocking
    // Post request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);

    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onprogress = function () {
        console.log('On progress!'); // Spinner animation
    }

    xhr.onreadystatechange = function () {
        console.log('Ready state is: ', xhr.readyState);
    }

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        } else {
            console.log('Some error occured!');
        }

    }
    // send the request
    data = { "name": "Rahul Sharma", "salary": "$73K", "age": "25" };
    xhr.send(data);
}

console.log('Despite having this command after XHR, this runs before because "async" is set to TRUE!')

// http://dummy.restapiexample.com/api/v1/employees

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('Populate DOM Clicked!');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            let data = obj['data'];
            for (idx in data) {
                str += `<li>${data[idx].employee_name}</li>`;
            }
            list.innerHTML = str;
        } else {
            console.log('Some error occured!');
        }
    }

    xhr.send();
    console.log('Fetching employee data ...');

}