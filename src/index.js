import isToday from 'date-fns/isToday';
import isTomorrow from 'date-fns/isTomorrow';
import differenceInDays from 'date-fns/differenceInDays'

const data ={
    id : 0,
    projects : [],
    tasks : [],
};
// sorting project
const sortTasks ={
    byDate: function(){
        let tasks = data.tasks;
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
        let tasks = data.tasks;
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
        let tasks = data.tasks;
        let important = [];
        for (let i = 0; i < tasks.length; i++) {
            if(tasks[i].priority == 'priority high') important.push(tasks[i]);
        }
        return important;
    },
    byInput: function(string){
        let tasks = data.tasks;
        let result = [];
        for (let i = 0; i < tasks.length; i++) {
            if(tasks[i].title.includes(string)) result.push(tasks[i]);
        }
        return result;
    }
};

// getting and returning dom domElements
const domElements = {
     heading : document.querySelector('.main>h1'),
     taskList : document.querySelector('.main .list'),
     projectList : document.querySelector('.sidebar .projects'),
     form : document.querySelector('.header form'),
     addTaskBtn: document.querySelector('.main button'),
     searchInput: document.querySelector('.sidebar #search'),
     headerButtons: document.querySelectorAll('.header button'),
     projectInput: document.querySelector('.sidebar #projectInput'),
     options: document.querySelectorAll('.sidebar .options div')
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

 // functions to interact with database
const database = {
getData: function(){
                let projects = localStorage.getItem('projects');
                let tasks = localStorage.getItem('tasks');
                let taskId = localStorage.getItem('taskId');

                projects = JSON.parse(projects) ?? [];
                tasks = JSON.parse(tasks) ?? [];
                taskId = JSON.parse(taskId) ?? 0;

                return {projects, tasks, taskId};
        },
updateTask: function(){
                    let taskString = JSON.stringify(data.tasks)
                    localStorage.setItem('tasks', taskString);
                },
updateProject: function(){
                    let projectString = JSON.stringify(data.projects);
                    localStorage.setItem('projects', projectString);
                },
updateId: function(){
                let taskIdString = JSON.stringify(data.id);
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

        data.id = taskId;
        data.projects = projects;
        data.tasks = tasks;
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
        allDivs[allDivs.length -1].addEventListener('click', function(e){
            let proj = e.target.textContent.slice(11,-6);
            loadTaskByProject(proj)
        });

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

    function loadTaskByProject(proj){
        let tasksToShow = [];
        // console.log(proj);
        let sortedProjects = sortTasks.byProject();
        // console.log(sortedProjects);
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
        domElements.heading.textContent = 'Tasks';
        filteredTask.forEach(task => loadTask(task));

    }
    return {loadScreen, loadTask, loadProject, loadTaskByDate, loadTaskByProject, loadTaskByInput};
})();

// utility functions to handle task
const handleTask = (function(){
    function getId(){
        data.id++;
        database.updateId();
        return data.id;
    }
    function task(title, duedate, priority, project){
        let id = getId();
        return {id, title, duedate, priority, project};
    }
    function addTask(task){
        data.tasks.push(task);
        database.updateTask();
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
    function deleteTask(e){
        // e.target.classList.add('deleted');
        let id = e.target.getAttribute('data-taskId');
        data.tasks = data.tasks.filter(task => task.id != id);
        database.updateTask();
        e.target.parentElement.remove();
    }
    function addProject(e){
        let projectName = e.target.value;
        data.projects.push(projectName);
        database.updateProject();
        load.loadProject(projectName);
        e.target.value = '';
        e.target.style.display = 'none';
    }
    function deleteProject(e){
        let index = 0;
        let name = e.target.parentElement.textContent.slice(11,-6);
        // console.log(sortTasks.byProject()[name]);
        if(sortTasks.byProject()[name]) load.loadTaskByProject(name);
        else{
            data.projects = data.projects.filter(project => project != name);
            database.updateProject();
            e.target.parentElement.remove();
        }
        e.stopPropagation();
     }
    return {addNewTask, deleteTask, addProject, deleteProject};
})();


// ----------adding event listeners

// form buttons
const headerFormCancelBtn = domElements.headerButtons[0];
const headerformAddTaskBtn = domElements.headerButtons[1];
const headerShowFormBtn = domElements.headerButtons[2];

headerShowFormBtn.addEventListener('click', formControls.showForm);
headerformAddTaskBtn.addEventListener('click', handleTask.addNewTask);
headerFormCancelBtn.addEventListener('click', function(){formControls.cancelForm()});

// input field for new project
domElements.projectInput.addEventListener('change', handleTask.addProject);

// options  to sort task
domElements.options.forEach(item => {
    item.addEventListener('click', load.loadTaskByDate);
});
// showing  form on clicking add task button on main Screen
domElements.addTaskBtn.addEventListener('click',formControls.showForm);

// search bar
domElements.searchInput.addEventListener('input', load.loadTaskByInput);

// loading Screen
load.loadScreen();
