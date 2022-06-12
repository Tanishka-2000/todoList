let id = 0;
const projects = [];
const tasks = [];

function getId(){
    id++;
    return id;
}
function task(title, duedate, priority, project){
    let id = getId();
    return {id, title, duedate, priority, project};
}
function getData(){
    if(localStorage.getItem('tasks')) {
        let temp = localStorage.getItem('tasks');
        let data = JSON.parse(temp);
        return data;
    }
    return 'data not found';
}
function updateLocalStorage(){
    let data = JSON.stringify(tasks)
    localStorage.setItem('tasks', data);
}
function addTask(task){
    tasks.append(task);
    updateLocalStorage();
}
function deleteTask(id){
    let index = findIndex(id);
    tasks.splice(index, 1);
    updateLocalStorage();
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
