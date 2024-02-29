document.addEventListener('DOMContentLoaded', function() {
var tasks = [];
document.querySelector('#new-task').onsubmit = function (event){
event.preventDefault();
const li = document.createElement('li');
let task_text = document.querySelector('#task-title').value;
let task_priority = document.querySelector('#task-priority').value;
let task_status;// = document.querySelectorAll('name[task-status]').value;
let task_status_inputs = document.querySelectorAll('[name=task-status]');

for (let i = 0; i< task_status_inputs.length;i++){
if (task_status_inputs[i].checked){
task_status = task_status_inputs[i].value;
}
}

let new_task_html = `<div class = "new-task-html"> <span> ${task_text} </span> <span>| ${task_priority} </span> <span> | ${task_status} </span> </div>

<button class = "mark-complete"> Mark as Complete </button> <button class = "remove"> Remove </button>`;
//let new_task_priority = ` <span> ${task_priority} </span>`;
//let new_task_status = `<span> ${task_status} </span>`;

li.innerHTML = new_task_html

//li.innerHTML = document.querySelector('#task').value;
tasks.push(task_text);
document.querySelector('#task_list').append(li);
document.querySelector('#task-title').value = '';

return false;

}

document.addEventListener('click', function(event){
element = event.target;
if (element.className === 'remove'){
element.parentElement.remove();
//tasks.remove(element);
}
if (element.className === 'mark-complete' || element.className === 'completed'){
//document.querySelector('#task-title').strike();
element.parentElement.querySelector('.new-task-html').style.textDecoration = "line-through";
element.task_status = "completed";
}
})


});
