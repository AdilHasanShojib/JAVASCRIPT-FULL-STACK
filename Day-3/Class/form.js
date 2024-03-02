function  validation(){

let i= document.forms["myForm"]["fname"].value;
 if(i==""){
    alert("Name must be filled out");
    return false;
 }

 else{
    alert(i);
    
 }
 



}