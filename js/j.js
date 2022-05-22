var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('number-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var buttonError = document.getElementById('submit-error');


function validateName() {

    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (name.length < 3) {
        nameError.innerHTML = 'Write correct name';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)) {
        nameError.innerHTML = 'Write correct name';
        return false;
    }
    if (name.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)) {
        nameError.innerHTML = '<i class="fa-solid fa-circle-check text-info"></i>';
        return true;
    }
}

function validateNumber() {
    var number = document.getElementById('contact-number').value;
    if (number.length != 10) {
        phoneError.innerHTML = 'Enter correct number';
        return false;
    }
    if (!number.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Enter correct number';
        return false;
    }
    if (number.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check text-info"></i>';
        return true;
    }
}
function validateEmail() {
    var email = document.getElementById('contact-mail').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Enter correct email id';
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = 'Enter correct email id';
        return false;
    }
   
        emailError.innerHTML = '<i class="fa-solid fa-circle-check text-info"></i>';
        return true;
    
}
function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required =33;
    var left=required-message.length;
    if(left>0)
    {
        messageError.innerHTML =left+'more characters need';
        return false;
    }
   
    messageError.innerHTML = '<i class="fa-solid fa-circle-check text-info"></i>';
    return true;
}
 function validateform()
 {
     if (!validateName()||!validateEmail()||!validateNumber()||!validateMessage())
 
 {
    buttonError.innerHTML ='correct the error';
    return false;}
 
}