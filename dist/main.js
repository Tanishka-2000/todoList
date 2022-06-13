/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/database.js":
/*!*************************!*\
  !*** ./src/database.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getData(){\r\n    if(localStorage.getItem('tasks')) {\r\n        let projects = localStorage.getItem('projects');\r\n        let tasks = localStorage.getItem('tasks');\r\n\r\n        tasks = JSON.parse(tasks);\r\n        projects = JSON.parse(projects);\r\n        console.log({projects, tasks});\r\n        return {projects, tasks};\r\n    }\r\n    return {projects:[], tasks:[{}]};\r\n}\r\n\r\nfunction updateLocalStorage(tasks){\r\n    let data = JSON.stringify(tasks)\r\n    localStorage.setItem('tasks', data);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({getData, updateLocalStorage});\r\n\n\n//# sourceURL=webpack://todolist/./src/database.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadScreen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadScreen.js */ \"./src/loadScreen.js\");\n\r\n\r\nlet id = 0;\r\nconst projects = ['Personal','Home','Work'];\r\nconst tasks = [];\r\n\r\n// private function\r\nfunction getId(){\r\n    id++;\r\n    return id;\r\n}\r\n// factory function\r\nfunction task(title, duedate, priority, project){\r\n    let id = getId();\r\n    return {id, title, duedate, priority, project};\r\n}\r\n\r\n\r\n// private function\r\nfunction addTask(task){\r\n    tasks.push(task);\r\n    updateLocalStorage();\r\n}\r\n// private function\r\nfunction deleteTask(id){\r\n    let index = findIndex(id);\r\n    tasks.splice(index, 1);\r\n    updateLocalStorage();\r\n}\r\n// private function\r\nfunction findIndex(id){\r\n    let index = null;\r\n    for (let i = 0; i < tasks.length; i++) {\r\n        if(task[i].id === id){\r\n            index = i;\r\n            break;\r\n        }\r\n    }\r\n    return index;\r\n}\r\n\r\nfunction showForm(){\r\n    let form = domElements.getForm();\r\n    form.style.display = 'flex';\r\n}\r\n\r\nfunction hideForm(){\r\n    let form = domElements.getForm();\r\n    form.style.display = 'none';\r\n}\r\nfunction resetForm(){\r\n    let o = getFormInputs();\r\n    o.task.value = '';\r\n    o.duedate.value = '';\r\n    o.priority.value = '';\r\n    o.project.value = '';\r\n}\r\n\r\nfunction cancelForm(){\r\n    hideForm();\r\n    resetForm();\r\n}\r\n\r\nfunction addnewTask(){\r\n    let task = makeTask();\r\n    hideForm();\r\n    resetForm();\r\n    addTask(task);\r\n}\r\n\r\nfunction makeTask(){\r\n    let o = getFormInputs();\r\n    let newTask = task(o.task.value, o.duedate.value || null, o.priority.value || null, o.project.value || null);\r\n    return newTask;\r\n}\r\n// private function\r\nfunction getFormInputs(){\r\n    let form = domElements.getForm();\r\n    let task = form.querySelector('input#task');\r\n    let project = form.querySelector('input[name=\"projectName\"]');\r\n    let priority = form.querySelector('input[name=\"priority\"]');\r\n    let duedate = form.querySelector('input[type=\"date\"]');\r\n\r\n    return {task, project, priority, duedate};\r\n}\r\n\r\n// returning dom elements to work with\r\nconst domElements = (function getDOMElements() {\r\n    const heading = document.querySelector('.main>h1')\r\n    const taskList = document.querySelector('.main .list');\r\n    const projectList = document.querySelector('.sidebar .projects');\r\n    const projectInput = document.querySelector('.sidebar input');\r\n    const form = document.querySelector('.header form');\r\n\r\n    function getTaskList(){\r\n        return taskList;\r\n    }\r\n    function getProjectList(){\r\n        return projectList;\r\n    }\r\n    function getForm(){\r\n        return form;\r\n    }\r\n    function getHeading(){\r\n        return heading;\r\n    }\r\n    function getProjectInput(){\r\n        return projectInput;\r\n    }\r\n\r\n    return {getTaskList, getProjectList, getForm, getHeading, getProjectInput};\r\n})();\r\n\r\n\r\n// ----------adding event listeners to buttons\r\nconst headerButtons = document.querySelectorAll('.header button');\r\nconst headerFormCancelBtn = headerButtons[0];\r\nconst headerformAddTaskBtn = headerButtons[1];\r\nconst headerShowFormBtn = headerButtons[2];\r\n\r\nheaderShowFormBtn.addEventListener('click', showForm);\r\nheaderformAddTaskBtn.addEventListener('click', addnewTask);\r\nheaderFormCancelBtn.addEventListener('click', cancelForm);\r\n\r\n(0,_loadScreen_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(domElements.getProjectList(), domElements.getTaskList());\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/loadScreen.js":
/*!***************************!*\
  !*** ./src/loadScreen.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadScreen)\n/* harmony export */ });\n/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database.js */ \"./src/database.js\");\n\r\n\r\nfunction loadScreen(projectList, taskList){\r\n\r\n    let {projects, tasks} = _database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData();\r\n    let projectTemplate = projectList.querySelector('template');\r\n\r\n    if(projects){\r\n        projects.forEach((project) => {\r\n            let div = projectTemplate.content.cloneNode(true);\r\n            div.querySelector('div').appendChild(document.createTextNode(project));\r\n            projectList.appendChild(div);\r\n        });\r\n    }\r\n\r\n\r\n    let taskTemplate = taskList.querySelector('template');\r\n    if(tasks){\r\n        tasks.forEach((task) => {\r\n            let div = taskTemplate.content.cloneNode(true);\r\n            div.querySelector('h3').textContent = task.title;\r\n            div.querySelectorAll('p')[0].textContent = task.project;\r\n            div.querySelectorAll('p')[1].textContent = task.duedate;\r\n            taskList.appendChild(div);\r\n        });\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/loadScreen.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;