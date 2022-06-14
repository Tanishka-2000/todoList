import database from './database.js';
import domElements form './domElements.js';

export default function loadScreen(){
    const projectList = domElements.getProjectList();
    const taskList = domElements.getTaskList();

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

}
