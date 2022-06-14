// geeting and returning dom domElements
const domElements = {
     heading : document.querySelector('.main>h1'),
     taskList : document.querySelector('.main .list'),
     projectList : document.querySelector('.sidebar .projects'),
     projectInput : document.querySelector('.sidebar input'),
     form : document.querySelector('.header form'),
 }

 // form utility functions
 formControls = {
     showForm: function(){
                 let form = domElements.form;
                 form.style.display = 'flex';
             },
     hideForm: function(){
                 let form = domElements.form;
                 form.style.display = 'none';
             },
     cancelForm: function(){
                 this.hideForm();
                 this.resetForm();
             },
     resetForm: function(){
                 let o = this.getFormInputs();
                 o.task.value = '';
                 o.duedate.value = '';
                 o.priority.value = '';
                 o.project.value = '';
             },
     getFormInputs: function(){
                 let form = domElements.form;
                 let task = form.querySelector('input#task');
                 let project = form.querySelector('input[name="projectName"]');
                 let priority = form.querySelector('input[name="priority"]');
                 let duedate = form.querySelector('input[type="date"]');

                 return {task, project, priority, duedate};
             }
 };

// database
const database = {
getData: function(){
            if(localStorage.getItem('tasks')) {
                let projects = localStorage.getItem('projects');
                let tasks = localStorage.getItem('tasks');

                tasks = JSON.parse(tasks);
                projects = JSON.parse(projects);

                return {projects, tasks};
            }
            return {projects:[], tasks:[{}]};
        },
updateLocalStorage: function(tasks){
                    let data = JSON.stringify(tasks)
                    localStorage.setItem('tasks', data);
                }
}

// loading all tasks
function loadScreen(){
    const projectList = domElements.projectList;
    const taskList = domElements.taskList;

    let {projects, tasks} = database.getData();
    let projectTemplate = projectList.querySelector('template');

    if(projects){
        projects.forEach((project) => {
            let div = projectTemplate.content.cloneNode(true);
            div.querySelector('div').appendChild(document.createTextNode(project));
            projectList.appendChild(div);
        });
    }

    let taskTemplate = taskList.querySelector('template');
    if(tasks){
        tasks.forEach((task) => {
            let div = taskTemplate.content.cloneNode(true);
            div.querySelector('h3').textContent = task.title;
            div.querySelectorAll('p')[0].textContent = task.project;
            div.querySelectorAll('p')[1].textContent = task.duedate;
            taskList.appendChild(div);
        });
    }
    handleTask.setTask({projects, tasks});
}

function loadTask(task){
    const taskList = domElements.taskList;
    let taskTemplate = taskList.querySelector('template');

    let div = taskTemplate.content.cloneNode(true);
    div.querySelector('h3').textContent = task.title;
    div.querySelectorAll('p')[0].textContent = task.project;
    div.querySelectorAll('p')[1].textContent = task.duedate;
    taskList.appendChild(div);
}
// utility functions to handle task
const handleTask = (function(){
    let id = 0;
    let projects = [];
    let tasks = [];
    function getId(){
        id++;
        return id;
    }
    function task(title, duedate, priority, project){
        let id = getId();
        return {id, title, duedate, priority, project};
    }
    function addTask(task){
        tasks.push(task);
        database.updateLocalStorage(tasks);
    }
    function deleteTask(id){
        let index = findIndex(id);
        tasks.splice(index, 1);
        database.updateLocalStorage();
        loadScreen();
    }
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
    function addNewTask(){
        let task = makeTask();
        formControls.cancelForm();
        addTask(task);
        loadTask(task);
    }
    function makeTask(){
        let o = formControls.getFormInputs();
        let newTask = task(o.task.value, o.duedate.value || null, o.priority.value || null, o.project.value || null);
        return newTask;
    }
    function setTask(temp){
        projects = temp.projects;
        tasks = temp.tasks;
    }
    return {addNewTask, deleteTask, setTask};
})();


// ----------adding event listeners to buttons
const headerButtons = document.querySelectorAll('.header button');
const headerFormCancelBtn = headerButtons[0];
const headerformAddTaskBtn = headerButtons[1];
const headerShowFormBtn = headerButtons[2];

headerShowFormBtn.addEventListener('click', formControls.showForm);
headerformAddTaskBtn.addEventListener('click', handleTask.addNewTask);
headerFormCancelBtn.addEventListener('click', formControls.cancelForm);

loadScreen();
