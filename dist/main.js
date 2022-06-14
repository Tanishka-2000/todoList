/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// geeting and returning dom domElements\r\nconst domElements = {\r\n     heading : document.querySelector('.main>h1'),\r\n     taskList : document.querySelector('.main .list'),\r\n     projectList : document.querySelector('.sidebar .projects'),\r\n     projectInput : document.querySelector('.sidebar input'),\r\n     form : document.querySelector('.header form'),\r\n }\r\n\r\n // form utility functions\r\n formControls = {\r\n     showForm: function(){\r\n                 let form = domElements.form;\r\n                 form.style.display = 'flex';\r\n             },\r\n     hideForm: function(){\r\n                 let form = domElements.form;\r\n                 form.style.display = 'none';\r\n             },\r\n     cancelForm: function(){\r\n                 this.hideForm();\r\n                 this.resetForm();\r\n             },\r\n     resetForm: function(){\r\n                 let o = this.getFormInputs();\r\n                 o.task.value = '';\r\n                 o.duedate.value = '';\r\n                 o.priority.value = '';\r\n                 o.project.value = '';\r\n             },\r\n     getFormInputs: function(){\r\n                 let form = domElements.form;\r\n                 let task = form.querySelector('input#task');\r\n                 let project = form.querySelector('input[name=\"projectName\"]');\r\n                 let priority = form.querySelector('input[name=\"priority\"]');\r\n                 let duedate = form.querySelector('input[type=\"date\"]');\r\n\r\n                 return {task, project, priority, duedate};\r\n             }\r\n };\r\n\r\n// database\r\nconst database = {\r\ngetData: function(){\r\n            if(localStorage.getItem('tasks')) {\r\n                let projects = localStorage.getItem('projects');\r\n                let tasks = localStorage.getItem('tasks');\r\n\r\n                tasks = JSON.parse(tasks);\r\n                projects = JSON.parse(projects);\r\n\r\n                return {projects, tasks};\r\n            }\r\n            return {projects:[], tasks:[{}]};\r\n        },\r\nupdateLocalStorage: function(tasks){\r\n                    let data = JSON.stringify(tasks)\r\n                    localStorage.setItem('tasks', data);\r\n                }\r\n}\r\n\r\n// loading all tasks\r\nfunction loadScreen(){\r\n    const projectList = domElements.projectList;\r\n    const taskList = domElements.taskList;\r\n\r\n    let {projects, tasks} = database.getData();\r\n    let projectTemplate = projectList.querySelector('template');\r\n\r\n    if(projects){\r\n        projects.forEach((project) => {\r\n            let div = projectTemplate.content.cloneNode(true);\r\n            div.querySelector('div').appendChild(document.createTextNode(project));\r\n            projectList.appendChild(div);\r\n        });\r\n    }\r\n\r\n    let taskTemplate = taskList.querySelector('template');\r\n    if(tasks){\r\n        tasks.forEach((task) => {\r\n            let div = taskTemplate.content.cloneNode(true);\r\n            div.querySelector('h3').textContent = task.title;\r\n            div.querySelectorAll('p')[0].textContent = task.project;\r\n            div.querySelectorAll('p')[1].textContent = task.duedate;\r\n            taskList.appendChild(div);\r\n        });\r\n    }\r\n    handleTask.setTask({projects, tasks});\r\n}\r\n\r\nfunction loadTask(task){\r\n    const taskList = domElements.taskList;\r\n    let taskTemplate = taskList.querySelector('template');\r\n\r\n    let div = taskTemplate.content.cloneNode(true);\r\n    div.querySelector('h3').textContent = task.title;\r\n    div.querySelectorAll('p')[0].textContent = task.project;\r\n    div.querySelectorAll('p')[1].textContent = task.duedate;\r\n    taskList.appendChild(div);\r\n}\r\n// utility functions to handle task\r\nconst handleTask = (function(){\r\n    let id = 0;\r\n    let projects = [];\r\n    let tasks = [];\r\n    function getId(){\r\n        id++;\r\n        return id;\r\n    }\r\n    function task(title, duedate, priority, project){\r\n        let id = getId();\r\n        return {id, title, duedate, priority, project};\r\n    }\r\n    function addTask(task){\r\n        tasks.push(task);\r\n        database.updateLocalStorage(tasks);\r\n    }\r\n    function deleteTask(id){\r\n        let index = findIndex(id);\r\n        tasks.splice(index, 1);\r\n        database.updateLocalStorage();\r\n        loadScreen();\r\n    }\r\n    function findIndex(id){\r\n        let index = null;\r\n        for (let i = 0; i < tasks.length; i++) {\r\n            if(task[i].id === id){\r\n                index = i;\r\n                break;\r\n            }\r\n        }\r\n        return index;\r\n    }\r\n    function addNewTask(){\r\n        let task = makeTask();\r\n        formControls.cancelForm();\r\n        addTask(task);\r\n        loadTask(task);\r\n    }\r\n    function makeTask(){\r\n        let o = formControls.getFormInputs();\r\n        let newTask = task(o.task.value, o.duedate.value || null, o.priority.value || null, o.project.value || null);\r\n        return newTask;\r\n    }\r\n    function setTask(temp){\r\n        projects = temp.projects;\r\n        tasks = temp.tasks;\r\n    }\r\n    return {addNewTask, deleteTask, setTask};\r\n})();\r\n\r\n\r\n// ----------adding event listeners to buttons\r\nconst headerButtons = document.querySelectorAll('.header button');\r\nconst headerFormCancelBtn = headerButtons[0];\r\nconst headerformAddTaskBtn = headerButtons[1];\r\nconst headerShowFormBtn = headerButtons[2];\r\n\r\nheaderShowFormBtn.addEventListener('click', formControls.showForm);\r\nheaderformAddTaskBtn.addEventListener('click', handleTask.addNewTask);\r\nheaderFormCancelBtn.addEventListener('click', formControls.cancelForm);\r\n\r\nloadScreen();\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;