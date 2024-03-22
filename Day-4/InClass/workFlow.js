let input=document.getElementById("input-box");
let ul=document.getElementById("list-container");
let task=[];


function addTask()
{
  let taskInput=input.value.trim();
  if(taskInput){
    task.push(taskInput);
    renderTask();
    input.value="";

  }






}

function renderTask(){
 ul.innerHTML="";
 task.forEach((task,index)=>{
  let list=document.createElement("li");
  list.innerHTML= `<span>${task}</span>
                   <button class="delete-button" onclick=(removeTask(${index}))>Remove</button>`;
   ul.appendChild(list);



 });

}


function removeTask(index){
task.splice(index,1);
renderTask();



}

ul.addEventListener('click', (e)=>{
  
    if (e.target.tagName=== "LI"){
     e.target.classList.toggle("checked");
    }
   
   
   });