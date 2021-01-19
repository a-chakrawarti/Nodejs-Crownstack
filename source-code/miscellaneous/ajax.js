// AJAX ( Asynchronous JavaScript and XML )

// make a request to the server, and process the response from the server without reloading the page
// which allows us to update part of the page in response without reloading the page
// AJAX is limited by browser for security reason: is only able to access data from same domain
// files can be uploaded and downloaded over AJAX 

let num = prompt('Fun number fact, Enter a number')
let xhr = new XMLHttpRequest();
xhr.open('GET', `http://numbersapi.com/${num}`, true);
xhr.send();

xhr.onload = function() {
    console.log(xhr.responseText);
    window.alert(xhr.responseText);
}