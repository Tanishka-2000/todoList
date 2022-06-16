import isToday from 'date-fns/isToday';
import isTomorrow from 'date-fns/isTomorrow';
import differenceInDays from 'date-fns/differenceInDays'
// helper functions of date fns
// differenceInDays
// isToday
// isTomorrow

// sorting project
const sortTasks ={
    tasks: [],
    byDate: function(){
        let tasks = this.tasks;
        let today = [];
        let tomorrow = [];
        let upcoming = [];
        let anytime = [];
        let todayDate = new Date();
        for (let i = 0; i < tasks.length; i++) {
            if(tasks[i].duedate){
                let date = new Date(tasks[i].duedate);
                if(isToday(date)) today.push(tasks[i]);
                else if(isTomorrow(date)) tomorrow.push(tasks[i]);
                else if(differenceInDays(date, todayDate) < 7) upcoming.push(tasks[i]);
                else anytime.push(tasks[i]);

            }else{
                today.push(tasks[i]);
            }
        }
        return {today, tomorrow, upcoming, anytime};
    },
    byProject: function(){
        let tasks = this.tasks;
        let taskByPprojects = {};
        for (let i = 0; i < tasks.length; i++) {
            if(tasks[i].project){
                if(!taskByPprojects.hasOwnProperty(tasks[i].project)) taskByPprojects[tasks[i].project] = [];
                taskByPprojects[tasks[i].project].push(tasks[i]);
            }
        }
        return taskByPprojects;
    },
    important: function(){
        let tasks = this.tasks;
        let important = [];
        for (let i = 0; i < tasks.length; i++) {
            if(tasks[i].priority == 'priority high') important.push(tasks[i]);
        }
        return important;
    },
    byInput: function(string){
        let tasks = this.tasks;
        let result = [];
        for (let i = 0; i < tasks.length; i++) {
            if(tasks[i].title.includes(string)) result.push(tasks[i]);
        }
        return result;
    }
};
// geeting and returning dom domElements
const domElements = {
     heading : document.querySelector('.main>h1'),
     taskList : document.querySelector('.main .list'),
     projectList : document.querySelector('.sidebar .projects'),
     projectInput : document.querySelector('.sidebar input'),
     form : document.querySelector('.header form'),
     addTaskBtn: document.querySelector('.main button'),
     searchInput: document.querySelector('.sidebar #search')
 };

 // form utility functions
 const formControls = {
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
                let taskId = localStorage.getItem('taskId');

                projects = JSON.parse(projects);
                tasks = JSON.parse(tasks);
                taskId = JSON.parse(taskId);

                return {projects, tasks, taskId};
            }
            return {projects:[], tasks:[], taskId:0};
        },
updateTask: function(tasks){
                    let taskString = JSON.stringify(tasks)
                    localStorage.setItem('tasks', taskString);
                },
updateProject: function(projects){
                    let projectString = JSON.stringify(projects);
                    localStorage.setItem('projects', projectString);
                },
updateId: function(taskId){
                let taskIdString = JSON.stringify(taskId);
                localStorage.setItem('taskId', taskIdString);
            }
}

// loading all tasks
const load = (function(){
    const projectList = domElements.projectList;
    const taskList = domElements.taskList;
    let projectTemplate = projectList.querySelector('template');
    let taskTemplate = taskList.querySelector('template');
    const projectDropDown = domElements.form.querySelector('.addProject div');

    function loadScreen(){

        let {projects, tasks, taskId} = database.getData();

        if(projects) projects.forEach(project => loadProject(project));
        if(tasks) tasks.forEach(task => loadTask(task));

        handleTask.setTask({projects, tasks, taskId});
        sortTasks.tasks = tasks;
        // console.log(sortTasks.byDate());
        // console.log(sortTasks.byProject());
        // console.log(sortTasks.important());
    }

    function loadTask(task){
        let div = taskTemplate.content.cloneNode(true);
        div.querySelector('h3').textContent = task.title;
        div.querySelectorAll('p')[0].textContent = task.project;
        div.querySelectorAll('p')[1].textContent = task.duedate;

        let delBtn = div.querySelector('.deleteBtn');
        delBtn.setAttribute('data-taskId',task.id);
        delBtn.addEventListener('click', handleTask.deleteTask);

        taskList.appendChild(div);
    }

    function loadProject(project){
        let div = projectTemplate.content.cloneNode(true);
        let delBtn = div.querySelectorAll('span')[1];

        delBtn.addEventListener('click', handleTask.deleteProject);
        div.querySelector('div').insertBefore(document.createTextNode(project), delBtn);
        projectList.appendChild(div);

        // adding event listeners to projects
        let allDivs = Array.from(projectList.querySelectorAll('div'));
        allDivs[allDivs.length -1].addEventListener('click', loadTaskByProject);

        // adding projects to form dropdown
        let p = document.createElement('p');
        p.appendChild(document.createTextNode(project))
        projectDropDown.appendChild(p);
    }

    function loadTaskByDate(e){
        let tasksToShow = [];
        let heading = '';
        if(e.target.textContent.toLowerCase().includes('important')){
            tasksToShow = sortTasks.important();
            heading = 'Important';
        }else{
            let sortedTasks = sortTasks.byDate();
            for(let prop in sortedTasks){
                if(e.target.textContent.toLowerCase().includes(prop)){
                    tasksToShow = sortedTasks[prop];
                    heading = prop;
                }
            }
        }
        // console.log(tasksToShow);
        taskList.innerHTML = '';
        domElements.heading.textContent = heading;
        tasksToShow.forEach(item => loadTask(item));
    }

    function loadTaskByProject(e){
        let tasksToShow = [];
        let proj = e.target.textContent.slice(11,-6);
        // console.log(proj);
        let sortedProjects = sortTasks.byProject();
        console.log(sortedProjects);
        for(let prop in sortedProjects){
            if(proj === prop) tasksToShow = sortedProjects[prop];
        }
        taskList.innerHTML = '';
        domElements.heading.textContent = proj;
        tasksToShow.forEach(task => loadTask(task));

    }
    function loadTaskByInput(e){
        let string = e.target.value;
        let filteredTask = sortTasks.byInput(string);
        taskList.innerHTML = '';
        filteredTask.forEach(task => loadTask(task));

    }
    // function removeTask(id){
    //     let index = 0;
    //     let tasks = taskList.querySelectorAll('div');
    //     for (let i = 0; i < tasks.length; i++) {
    //         let taskId = tasks[i].querySelector('.deleteBtn').getAttribute('data-taskId');
    //         if(taskId == id){
    //             index = i;
    //             break;
    //         }
    //      }
    //     tasks[index].remove();
    // }
    return {loadScreen, loadTask, loadProject, loadTaskByDate, loadTaskByInput};
})();

// utility functions to handle task
const handleTask = (function(){
    let id = 0;
    let projects = [];
    let tasks = [];
    function getId(){
        id++;
        database.updateId(id);
        return id;
    }
    function task(title, duedate, priority, project){
        let id = getId();
        return {id, title, duedate, priority, project};
    }
    function addTask(task){
        tasks.push(task);
        database.updateTask(tasks);
    }
    function deleteTask(e){
        e.target.classList.add('deleted');

        let id = e.target.getAttribute('data-taskId');
        let index = findIndex(id);
        tasks.splice(index, 1);
        database.updateTask(tasks);
        e.target.parentElement.remove();
        // load.removeTask(id);
    }
    function deleteProject(e){
        let index = 0;
        let name = e.target.parentElement.textContent;
        for (let i = 0; i < projects.length; i++) {
            if(name.includes(projects[i])){
                index = i;
                break;
            }
        }
        projects.splice(index, 1);
        database.updateProject(projects);
        e.target.parentElement.remove();
    }
    function findIndex(id){
        let index = null;
        for (let i = 0; i < tasks.length; i++) {

            if(tasks[i].id == id){
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
        load.loadTask(task);
    }
    function makeTask(){
        let o = formControls.getFormInputs();
        let newTask = task(o.task.value, o.duedate.value || null, o.priority.value || null, o.project.value || null);
        return newTask;
    }
    function setTask(temp){
        projects = temp.projects;
        tasks = temp.tasks;
        id = temp.taskId;
    }
    function addProject(e){
        let projectName = e.target.value;
        projects.push(projectName);
        database.updateProject(projects);
        load.loadProject(projectName);
        e.target.value = '';
        e.target.style.display = 'none';
    }
    return {addNewTask, deleteTask, setTask, addProject, deleteProject};
})();


// ----------adding event listeners
// form buttons
const headerButtons = document.querySelectorAll('.header button');
const headerFormCancelBtn = headerButtons[0];
const headerformAddTaskBtn = headerButtons[1];
const headerShowFormBtn = headerButtons[2];

headerShowFormBtn.addEventListener('click', formControls.showForm);
headerformAddTaskBtn.addEventListener('click', handleTask.addNewTask);
headerFormCancelBtn.addEventListener('click', function(){formControls.cancelForm()});

// input field for new project
const projectInput = document.querySelector('.sidebar #projectInput');
projectInput.addEventListener('change', handleTask.addProject);

// options  to sort task
const options = document.querySelectorAll('.sidebar .options div');
options.forEach(item => {
    item.addEventListener('click', load.loadTaskByDate);
});
// showing  form on clicking add task button on main Screen
domElements.addTaskBtn.addEventListener('click',formControls.showForm);

// search bar
domElements.searchInput.addEventListener('input', load.loadTaskByInput);

// loading Screen
load.loadScreen();
