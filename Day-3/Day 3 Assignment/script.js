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
 
 let Ulist=document.getElementById('list-group');

 function addChapter(){
   
  let input=document.getElementById('input').value;
  //console.log(Ulist.children[0]);
 
  if(Ulist.children[0].className == "emptyMsg"){
    Ulist.children[0].remove();
  }
  
   if(input !== ""){

      let li=document.createElement('li');
      li.className="list-group-item d-flex justify-content-center";

      li.innerHTML=`<input type="checkbox"> 
                    <h3 id="tag">${input}</h3> 
      <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
      <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`;
      
      Ulist.appendChild(li);
      
      input.value='';


  }

  
    


 }

 function removeChapter(currentElement){
  
    
    currentElement.parentElement.remove();
    //let Ulist=document.getElementById('list-group');

    if(Ulist.children.length <= 0){
        let empMsg=document.createElement("h3");
        empMsg.classList.add("emptyMsg");
        empMsg.textContent="Add New Chapter";
        Ulist.appendChild(empMsg);

    }

    

}

function editChapter(currentElement){
    //console.log(currentElement);
    
    
    if(currentElement.textContent=='Edit'){
        currentElement.textContent='Save';
        let htag=document.getElementById("tag").textContent;
        let input=document.createElement("input");
        

         
        //console.log(htag);
        
        input.type="text";
        input.id="input";
        input.placeholder="Chapter name";
        input.value=htag;
    
        currentElement.parentElement.replaceChild(input,document.getElementById("tag"));





    }

    else{
        currentElement.textContent='Edit';
        let text=currentElement.previousElementSibling.value;
        let newHtag=document.createElement("h3");
        //console.log(newHtag);
        
        newHtag.id="tag";
        newHtag.textContent=text;
        //console.log(newHtag.textContent);
        
        currentElement.parentElement.replaceChild(newHtag,currentElement.previousElementSibling);






    }
 



   }