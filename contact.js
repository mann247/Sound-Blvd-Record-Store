//Nia Manning
//August 13th, 2025
//Sound Blvd. Records

"use strict";
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('comment');
//errors
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function showError(inputElement, errorElement, message){
    errorElement.textContent = message;
    inputElement.classList.add('input-error');
    inputElement.classList.remove('input-ok');
}
function clearError(inputElement, errorElement){
    errorElement.textContent = '';
    inputElement.classList.remove('input-error');
    inputElement.classList.add('input-ok');
}

//name validation
function validateName(){
    const value = nameInput.value.trim();
    if (value === ''){
        showError(nameInput, nameError, 'Please enter your name.');
        console.log('invalid name');
        return false;
    }
    clearError(nameInput, nameError);
    return true;
}

//email validation
function validateEmail(){
    const value = emailInput.value.trim();
    if (value === ''){
        showError(emailInput, emailError, 'Please enter your email.');
        console.log('invalid email');
        return false;
    }
    //email check for users
    const emailAttempt = value.includes('@') && value.includes('.');
    if(!emailAttempt){
        showError(emailInput, emailError, 'Please enter a valid email address.');
        return false;
    }
    clearError(emailInput, emailError);
    return true;
}

//message validation
function validateMessage(){
    const value = messageInput.value.trim();
    if (value ===''){
        showError(messageInput, messageError, 'Please enter your message.');
        console.log('No message.');
        return false;
    }
    clearError(messageInput, messageError);
    return true;
}

//Live Validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

//Submit validation
form.addEventListener('submit', function(e){
    const okName = validateName();
    const okEmail = validateEmail();
    const okMsg = validateMessage();
    if (!(okName && okEmail && okMsg)){
        e.preventDefault();
        console.log('Invalid Input.');
        alert('Please fill out the required information!');
    }else{
        alert('Thank you for filling out the form! You will hear from us soon!');
        console.log('Information Submitted.');
    }
});
