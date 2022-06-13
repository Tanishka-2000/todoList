import loadScreen from './loadScreen.js';

let id = 0;
const projects = ['Personal','Home','Work'];
const tasks = [];

// private function
function getId(){
    id++;
    return id;
}
// factory function
function task(title, duedate, priority, project){
    let id = getId();
    return {id, title, duedate, priority, project};
}


// private function
function addTask(task){
    tasks.push(task);
    updateLocalStorage();
}
// private function
function deleteTask(id){
    let index = findIndex(id);
    tasks.splice(index, 1);
    updateLocalStorage();
}
// private function
function findIndex(id){
    let index = null;
    for (let i = 0; i < tasks.length; i++) {
        if(task[i].id === id){
            index = i;
            break;
        }
    }
    return index;
}

function showForm(){
    let form = domElements.getForm();
    form.style.display = 'flex';
}

function hideForm(){
    let form = domElements.getForm();
    form.style.display = 'none';
}
function resetForm(){
    let o = getFormInputs();
    o.task.value = '';
    o.duedate.value = '';
    o.priority.value = '';
    o.project.value = '';
}

function cancelForm(){
    hideForm();
    resetForm();
}

function addnewTask(){
    let task = makeTask();
    hideForm();
    resetForm();
    addTask(task);
}

function makeTask(){
    let o = getFormInputs();
    let newTask = task(o.task.value, o.duedate.value || null, o.priority.value || null, o.project.value || null);
    return newTask;
}
// private function
function getFormInputs(){
    let form = domElements.getForm();
    let task = form.querySelector('input#task');
    let project = form.querySelector('input[name="projectName"]');
    let priority = form.querySelector('input[name="priority"]');
    let duedate = form.querySelector('input[type="date"]');

    return {task, project, priority, duedate};
}

// returning dom elements to work with
const domElements = (function getDOMElements() {
    const heading = document.querySelector('.main>h1')
    const taskList = document.querySelector('.main .list');
    const projectList = document.querySelector('.sidebar .projects');
    const projectInput = document.querySelector('.sidebar input');
    const form = document.querySelector('.header form');

    function getTaskList(){
        return taskList;
    }
    function getProjectList(){
        return projectList;
    }
    function getForm(){
        return form;
    }
    function getHeading(){
        return heading;
    }
    function getProjectInput(){
        return projectInput;
    }

    return {getTaskList, getProjectList, getForm, getHeading, getProjectInput};
})();


// ----------adding event listeners to buttons
const headerButtons = document.querySelectorAll('.header button');
const headerFormCancelBtn = headerButtons[0];
const headerformAddTaskBtn = headerButtons[1];
const headerShowFormBtn = headerButtons[2];

headerShowFormBtn.addEventListener('click', showForm);
headerformAddTaskBtn.addEventListener('click', addnewTask);
headerFormCancelBtn.addEventListener('click', cancelForm);

loadScreen(domElements.getProjectList(), domElements.getTaskList());
