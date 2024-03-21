let input =document.getElementById("input-box");

let btn =document.getElementById("forButton");

let ul =document.getElementById("list-container");

function addList(){

    if(input.value===''){
     
        alert("Please write something");
    }

 else{
    let list=document.createElement("li");
    list.innerHTML = input.value;
    ul.appendChild(list);

   //create button
   let delButton = document.createElement("button");
   delButton.textContent="Delete";
   
   delButton.addEventListener("click",()=>{
    list.remove();

   });
   delButton.classList.add("delete-button");
   list.appendChild(delButton);
   

 }

 input.value="";

}

ul.addEventListener("click",(e)=>{

if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
}



});

