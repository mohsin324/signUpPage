// getting values into Dom
// firstName
const firstName = document.getElementById('firstName');
// console.log(firstName);
//lastName
const lastName = document.getElementById('lastName');
// console.log(lastName);
//email
const email = document.getElementById('email');
// console.log(email);
//password
const password = document.getElementById('password');
// console.log(password);
//confirmPassword
const confirmPassword = document.getElementById('confirmPassword');
// console.log(confirmPassword);
const form = document.getElementById('form');
console.log(form);
//show error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'firstName error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//show success 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'firstName success';
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(firstName.value == ''){
       showError(firstName, 'firstName is required');
    }else{
        showSuccess(firstName)
    }
    if(lastName.value == ''){
        showError(lastName, 'lastName is required');
     }else{
         showSuccess(lastName)
     }
     if(email.value == ''){
        showError(email, 'email is required');
     }else{
         showSuccess(email)
     }
     if(password.value == ''){
        showError(password, 'password is required');
     }else{
         showSuccess(password)
     }
     if(confirmPassword.value !== password.value){
        showError(confirmPassword, 'password not matched');
     }else{
         showSuccess(confirmPassword)
     }

})
