function getData(){
    if(localStorage.getItem('tasks')) {
        let projects = localStorage.getItem('projects');
        let tasks = localStorage.getItem('tasks');

        tasks = JSON.parse(tasks);
        projects = JSON.parse(projects);
        console.log({projects, tasks});
        return {projects, tasks};
    }
    return {projects:[], tasks:[{}]};
}

function updateLocalStorage(tasks){
    let data = JSON.stringify(tasks)
    localStorage.setItem('tasks', data);
}
export default {getData, updateLocalStorage};
