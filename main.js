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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day (and year and month)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n * \n * @example\n * // Are 4 September and 4 October in the same day?\n * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n * \n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\n\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * var result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\n\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\n\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todolist/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/isToday */ \"./node_modules/date-fns/esm/isToday/index.js\");\n\r\n// helper functions of date fns\r\n// differenceInDays\r\n// isToday\r\n// isTomorrow\r\n\r\n// sorting project\r\nconst sortTasks = (function(){\r\n    function today(tasks){\r\n        let todayTask = []\r\n        for (let i = 0; i < tasks.length; i++) {\r\n            if(tasks[i].duedate){\r\n                let date = new Date(tasks[i].duedate);\r\n                if((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date)){\r\n                    todayTask.push(tasks[i]);\r\n                }\r\n\r\n            }else{\r\n                todayTask.push(tasks[i]);\r\n            }\r\n        }\r\n        console.log(todayTask);\r\n    }\r\n    return {today};\r\n})();\r\n// geeting and returning dom domElements\r\nconst domElements = {\r\n     heading : document.querySelector('.main>h1'),\r\n     taskList : document.querySelector('.main .list'),\r\n     projectList : document.querySelector('.sidebar .projects'),\r\n     projectInput : document.querySelector('.sidebar input'),\r\n     form : document.querySelector('.header form'),\r\n }\r\n\r\n // form utility functions\r\n const formControls = {\r\n     showForm: function(){\r\n                 let form = domElements.form;\r\n                 form.style.display = 'flex';\r\n             },\r\n     hideForm: function(){\r\n                 let form = domElements.form;\r\n                 form.style.display = 'none';\r\n             },\r\n     cancelForm: function(){\r\n                 this.hideForm();\r\n                 this.resetForm();\r\n             },\r\n     resetForm: function(){\r\n                 let o = this.getFormInputs();\r\n                 o.task.value = '';\r\n                 o.duedate.value = '';\r\n                 o.priority.value = '';\r\n                 o.project.value = '';\r\n             },\r\n     getFormInputs: function(){\r\n                 let form = domElements.form;\r\n                 let task = form.querySelector('input#task');\r\n                 let project = form.querySelector('input[name=\"projectName\"]');\r\n                 let priority = form.querySelector('input[name=\"priority\"]');\r\n                 let duedate = form.querySelector('input[type=\"date\"]');\r\n\r\n                 return {task, project, priority, duedate};\r\n             }\r\n };\r\n\r\n// database\r\nconst database = {\r\ngetData: function(){\r\n            if(localStorage.getItem('tasks')) {\r\n                let projects = localStorage.getItem('projects');\r\n                let tasks = localStorage.getItem('tasks');\r\n                let taskId = localStorage.getItem('taskId');\r\n\r\n                projects = JSON.parse(projects);\r\n                tasks = JSON.parse(tasks);\r\n                taskId = JSON.parse(taskId);\r\n\r\n                return {projects, tasks, taskId};\r\n            }\r\n            return {projects:[], tasks:[], taskId:0};\r\n        },\r\nupdateTask: function(tasks){\r\n                    let taskString = JSON.stringify(tasks)\r\n                    localStorage.setItem('tasks', taskString);\r\n                },\r\nupdateProject: function(projects){\r\n                    let projectString = JSON.stringify(projects);\r\n                    localStorage.setItem('projects', projectString);\r\n                },\r\nupdateId: function(taskId){\r\n                let taskIdString = JSON.stringify(taskId);\r\n                localStorage.setItem('taskId', taskIdString);\r\n            }\r\n}\r\n\r\n// loading all tasks\r\nconst load = (function(){\r\n    const projectList = domElements.projectList;\r\n    const taskList = domElements.taskList;\r\n    let projectTemplate = projectList.querySelector('template');\r\n    let taskTemplate = taskList.querySelector('template');\r\n\r\n    function loadScreen(){\r\n\r\n        let {projects, tasks, taskId} = database.getData();\r\n\r\n        if(projects) projects.forEach(project => loadProject(project));\r\n        if(tasks) tasks.forEach(task => loadTask(task));\r\n\r\n        handleTask.setTask({projects, tasks, taskId});\r\n        sortTasks.today(tasks);\r\n    }\r\n\r\n    function loadTask(task){\r\n        let div = taskTemplate.content.cloneNode(true);\r\n        div.querySelector('h3').textContent = task.title;\r\n        div.querySelectorAll('p')[0].textContent = task.project;\r\n        div.querySelectorAll('p')[1].textContent = task.duedate;\r\n\r\n        let delBtn = div.querySelector('.deleteBtn');\r\n        delBtn.setAttribute('data-taskId',task.id);\r\n        delBtn.addEventListener('click', handleTask.deleteTask);\r\n\r\n        taskList.appendChild(div);\r\n    }\r\n\r\n    function loadProject(project){\r\n        let div = projectTemplate.content.cloneNode(true);\r\n        let delBtn = div.querySelectorAll('span')[1];\r\n\r\n        delBtn.addEventListener('click', handleTask.deleteProject);\r\n        div.querySelector('div').insertBefore(document.createTextNode(project), delBtn);\r\n        projectList.appendChild(div);\r\n    }\r\n\r\n    // function removeTask(id){\r\n    //     let index = 0;\r\n    //     let tasks = taskList.querySelectorAll('div');\r\n    //     for (let i = 0; i < tasks.length; i++) {\r\n    //         let taskId = tasks[i].querySelector('.deleteBtn').getAttribute('data-taskId');\r\n    //         if(taskId == id){\r\n    //             index = i;\r\n    //             break;\r\n    //         }\r\n    //      }\r\n    //     tasks[index].remove();\r\n    // }\r\n    return {loadScreen, loadTask, loadProject};\r\n})();\r\n\r\n// utility functions to handle task\r\nconst handleTask = (function(){\r\n    let id = 0;\r\n    let projects = [];\r\n    let tasks = [];\r\n    function getId(){\r\n        id++;\r\n        database.updateId(id);\r\n        return id;\r\n    }\r\n    function task(title, duedate, priority, project){\r\n        let id = getId();\r\n        return {id, title, duedate, priority, project};\r\n    }\r\n    function addTask(task){\r\n        tasks.push(task);\r\n        database.updateTask(tasks);\r\n    }\r\n    function deleteTask(e){\r\n        e.target.classList.add('deleted');\r\n        let id = e.target.getAttribute('data-taskId');\r\n        let index = findIndex(id);\r\n        tasks.splice(index, 1);\r\n        database.updateTask(tasks);\r\n        e.target.parentElement.remove();\r\n        // load.removeTask(id);\r\n    }\r\n    function deleteProject(e){\r\n        let index = 0;\r\n        let name = e.target.parentElement.textContent;\r\n        for (let i = 0; i < projects.length; i++) {\r\n            if(name.includes(projects[i])){\r\n                index = i;\r\n                break;\r\n            }\r\n        }\r\n        projects.splice(index, 1);\r\n        database.updateProject(projects);\r\n        e.target.parentElement.remove();\r\n    }\r\n    function findIndex(id){\r\n        let index = null;\r\n        for (let i = 0; i < tasks.length; i++) {\r\n\r\n            if(tasks[i].id == id){\r\n                index = i;\r\n                break;\r\n            }\r\n        }\r\n        return index;\r\n    }\r\n    function addNewTask(){\r\n        let task = makeTask();\r\n        formControls.cancelForm();\r\n        addTask(task);\r\n        load.loadTask(task);\r\n    }\r\n    function makeTask(){\r\n        let o = formControls.getFormInputs();\r\n        let newTask = task(o.task.value, o.duedate.value || null, o.priority.value || null, o.project.value || null);\r\n        return newTask;\r\n    }\r\n    function setTask(temp){\r\n        projects = temp.projects;\r\n        tasks = temp.tasks;\r\n        id = temp.taskId;\r\n    }\r\n    function addProject(e){\r\n        let projectName = e.target.value;\r\n        projects.push(projectName);\r\n        database.updateProject(projects);\r\n        load.loadProject(projectName);\r\n        e.target.value = '';\r\n        e.target.style.display = 'none';\r\n    }\r\n    return {addNewTask, deleteTask, setTask, addProject, deleteProject};\r\n})();\r\n\r\n\r\n// ----------adding event listeners to buttons\r\nconst headerButtons = document.querySelectorAll('.header button');\r\nconst headerFormCancelBtn = headerButtons[0];\r\nconst headerformAddTaskBtn = headerButtons[1];\r\nconst headerShowFormBtn = headerButtons[2];\r\nconst projectInput = document.querySelector('.sidebar #projectInput');\r\n\r\nheaderShowFormBtn.addEventListener('click', formControls.showForm);\r\nheaderformAddTaskBtn.addEventListener('click', handleTask.addNewTask);\r\nheaderFormCancelBtn.addEventListener('click', function(){formControls.cancelForm()});\r\nprojectInput.addEventListener('change', handleTask.addProject);\r\n\r\nload.loadScreen();\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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