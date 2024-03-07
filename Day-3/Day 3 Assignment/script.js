 function sign(){

document.getElementById("mail").textContent='';
document.getElementById("pass").textContent='';

 let email=document.getElementById("email").value;
 let pass=document.getElementById("password").value;

if(!/^\S+@\S+\.\S+$/.test(email)){
    document.getElementById("mail").textContent='Enter Valid Email';
}

if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}/.test(pass)){
    document.getElementById("pass").textContent='Enter Valid Password';
}

if(/^\S+@\S+\.\S+$/.test(email) && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}/.test(pass)){
   
   window.location.href = "todoList.html";
   
   
}


 }
 