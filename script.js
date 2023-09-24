const username = document.getElementById('username')
const email = document.getElementById('email')
const pass1 = document.getElementById('password1')
const pass2 = document.getElementById('password2')
const term = document.getElementById('term')
var flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag5 = 0;

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
    if(flag1 == 0 && flag2 == 0 && flag3 == 0 && flag4 == 0 && flag5 == 0){
        alert("Account succesfully created!");
        location.href="homepage.html";
    }
})

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value.trim();
    const pass1Value = pass1.value.trim();
    const pass2Value = pass2.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'username must be filled');
        flag1 = 1;
    } else if(usernameValue.length < 5 || usernameValue.length > 20){
            setErrorFor(username, 'username must be between 5-20 characters')
            flag1 = 1;
    } else{
        setSuccessFor(username);
        flag1 = 0;
    }

    if(emailValue === ''){
        setErrorFor(email, 'email must be filled');
        flag2 = 1;
    } else if(!emailValue.endsWith("@gmail.com")){
        setErrorFor(email, 'email must end with @gmail.com');
        flag2 = 1;
    } else{
        setSuccessFor(email);
        flag2 = 0;
    }

    if(pass1Value === ''){
        setErrorFor(pass1, 'please fill this field');
        flag3 = 1;
    } else if(pass1Value.length < 6){
        setErrorFor(pass1, 'password must have minimum 6 characters');
        flag3 = 1;
    } else{
        setSuccessFor(pass1);
        flag3 = 0;
    }

    if(pass2Value === ''){
        setErrorFor(pass2, 'please fill this field');
        flag4 = 1;
    } else if(pass1Value !== pass2Value){
        setErrorFor(pass2, "password doesn't match");
        flag4 = 1;
    } else{
        setSuccessFor(pass2);
        flag4 = 0;
    }

    if(term.checked == false){
        const formControl = term.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = 'Please check this field';
        formControl.className = 'check-box error';
        flag5 = 1;
    }else{
        const formControl = term.parentElement;
        formControl.className = 'check-box success';
        flag5 = 0;
    }    
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'input-box error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'input-box success';
}