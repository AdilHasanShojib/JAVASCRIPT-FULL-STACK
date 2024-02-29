function registrationForm(){

document.getElementById("firstNameError").textContent='';
document.getElementById("lastNameError").textContent='';
document.getElementById("usernameError").textContent='';
document.getElementById("emailError").textContent='';
document.getElementById("passwordError").textContent='';


let fname=document.getElementById("firstName").value;
let lname=document.getElementById("lastName").value;
let uname=document.getElementById("userName").value;
let email=document.getElementById("email").value;
let pass=document.getElementById("password").value;


if(!/^[a-zA-Z]+$/.test(fname)){
    
    document.getElementById("firstNameError").textContent='Invalid First Name';

}

if(!/^[a-zA-Z]+$/.test(lname)){
    
    document.getElementById("lastNameError").textContent='Invalid Last Name';

}

if(!/^[a-zA-Z0-9]{4,}$/.test(uname)){

    document.getElementById("usernameError").textContent='Invalid Username';

}

if(!/^\S+@\S+\.\S+$/.test(email)){
    document.getElementById("emailError").textContent='Invalid Email'; 
}


if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}/.test(pass)){

    document.getElementById("passwordError").textContent='Invalid Password';

}


if (/^[a-zA-Z]+$/.test(fname) && /^[a-zA-Z]+$/.test(lname) && /^[a-zA-Z0-9]{4,}$/.test(uname) && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}/.test(pass) && /^\S+@\S+\.\S+$/.test(email)) {
    alert('Registration Successful!');
}




}