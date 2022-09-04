const btn = document.getElementById('btn');
console.log(btn);
const cnic = document.getElementById('cnic');
const email = document.getElementById('email');
const password = document.getElementById('password');
const small1 = document.getElementById('small1');
console.log(small1)
btn.addEventListener('click', (e)=>{
    // e.preventDefault();
    if(cnic.value != null && email.value != null && password.value != null){
        small1.style.display = 'block'
        console.log(cnic.value);
    }else{
        console.log('there is no value')
    }

})
// small.innerHtml = "Hello World"