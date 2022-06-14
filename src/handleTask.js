import formControls from './formControls.js';
import database from './database.js';
export default const handleTask = {
    id : 0,
    projects : ['Personal','Home','Work'],
    tasks : [],
    getId: function(){
                id++;
                return id;
            },
    task: function(title, duedate, priority, project){
                let id = getId();
                return {id, title, duedate, priority, project};
            },
    addTask: function(task){
                tasks.push(task);
                database.updateLocalStorage();
            },
    deleteTask: function(id){
                    let index = this.findIndex(id);
                    tasks.splice(index, 1);
                    database.updateLocalStorage();
                },
    findIndex: function(id){
                    let index = null;
                    for (let i = 0; i < tasks.length; i++) {
                        if(task[i].id === id){
                            index = i;
                            break;
                        }
                    }
                    return index;
                },
    addnewTask: function(){
                    let task = this.makeTask();
                    formControls.hideForm();
                    formControls.resetForm();
                    this.addTask(task);
                },
    makeTask: function(){
                let o = formControls.getFormInputs();
                let newTask = this.task(o.task.value, o.duedate.value || null, o.priority.value || null, o.project.value || null);
                return newTask;
            }
};
// function getId(){
//     id++;
//     return id;
// }
// // factory function
// function task(title, duedate, priority, project){
//     let id = getId();
//     return {id, title, duedate, priority, project};
// }
//
// function addTask(task){
//     tasks.push(task);
//     updateLocalStorage();
// }
// // private function
// function deleteTask(id){
//     let index = findIndex(id);
//     tasks.splice(index, 1);
//     updateLocalStorage();
// }
// // private function
// function findIndex(id){
//     let index = null;
//     for (let i = 0; i < tasks.length; i++) {
//         if(task[i].id === id){
//             index = i;
//             break;
//         }
//     }
//     return index;
// }
//
// function addnewTask(){
//     let task = makeTask();
//     hideForm();
//     resetForm();
//     addTask(task);
// }
//
// function makeTask(){
//     let o = getFormInputs();
//     let newTask = task(o.task.value, o.duedate.value || null, o.priority.value || null, o.project.value || null);
//     return newTask;
// }
