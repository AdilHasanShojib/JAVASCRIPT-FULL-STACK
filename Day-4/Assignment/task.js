

let input = document.getElementById("input-box");
let ul = document.getElementById("list-container");
let filter = document.getElementById("tagfilter");
let task = [];
let currentTag = "all"; 
function addTask() {
  let taskText = input.value;
  let strSplit = taskText.split('@');
  let tagName = strSplit[1];
  if (taskText) {
    task.push({ text: taskText, tag: tagName });
    renderTask();
    input.value = "";
  }
}

function filterTask() {
  currentTag = filter.value; 
  renderTask();
}

function renderTask() {
  ul.innerHTML = "";

  task.forEach(taskItem => {
    if (currentTag === "all" || taskItem.tag === currentTag) {
      let li = document.createElement("li");
      li.innerHTML = taskItem.text;
      ul.appendChild(li);
    }
  // if(!taskItem.tag === currentTag){
  //    let select=document.createElement("select");
  //    select.innerHTML=filter.

  // }


  });
}


renderTask();


