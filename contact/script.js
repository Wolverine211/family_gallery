var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var massageError = document.getElementById('massage-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'name is required';
        return false;
    }
    if(!name.match(/^[a-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name'; 
        return false;  
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatePhone(){
    var name = document.getElementById('contact-phone').value;

    if (phone.length == 0){
        phoneError.innerHTML = 'Phone in required state';
        return false;
    }
    if (!phone.length !== 10){
        phoneError.innerHTML = 'Phone is should be 10 digits';
        return false;
    }
    if (!phone.match (/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if (email.length == 0){
        emailError.innerHTML = 'Email in required ';
        return false;
    }
    if (!email.length !== 10){
        phoneError.innerHTML = 'Phone is should be 10 digits';
        return false;
    }
    if (!email.match (/^[a-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left =required -message.length;

    if (left > 0){
        massageError.innerHTML = left + 'more characters required';
        return false;
    }
    massageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
