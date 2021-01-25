// Button with id fetchBtn
let fetchBtn = document.getElementById('fetchBtn');

// Div with id content
let content = document.getElementById('content');

function getDataOne() {
    url = 'data.txt';
    fetch(url).then((response) => {
        return response.text();
    }).then((data) => {
        console.log(data);
    })
}

// getDataOne();

function getData() {
    url = 'https://api.github.com/users';
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}

// getData();

function postData() {
    url = 'https://crossorigin.me/http://dummy.restapiexample.com/create';
    data = {"name":"Raju Kulkharni","salary":"$71K","age":"25"}
    params =  {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response => response.json())
    .then(data => console.log(data)
    )
}

postData();