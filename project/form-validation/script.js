function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}


function setError(id, error) {
    // sets error inside tag of id
    element = document.getElementById(id);
    console.log('Setting error message');
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    clearErrors();
    console.log('Validating ...');
    var returnval = true;

    // perform validation and if it fails, set value of returnval to false
    var name = document.forms["myForm"]["fname"].value;
    if (name.length < 5) {
        // console.log(name);
        setError("name", "*Length of the name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        // console.log(name);
        setError("name", "*Name cannot be empty!");
        returnval = false;
    }
    var email = document.forms["myForm"]["femail"].value;
    if (email.length > 30) {
        setError("email", "*Email-id is too long")
        returnval = false;
    }

    var phone = document.forms["myForm"]["fphone"].value;
    if (phone.length!=10) {
        setError("phone", "*Phone number should be of 10 digits")
        returnval = false;
    }

    var password = document.forms["myForm"]["fpass"].value;
    if (password.length < 6) {
        setError("pass", "*Password should be atleast 6 characters long");
        returnval = false;
    }
    
    var cpassword = document.forms["myForm"]["fcpass"].value;
    if (cpassword != password) {
        setError("cpass","*Both password should match!");
        returnval = false;
    } 
    return returnval
}