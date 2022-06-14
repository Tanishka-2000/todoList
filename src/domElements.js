export default const domElements = (function getDOMElements() {
    const heading = document.querySelector('.main>h1')
    const taskList = document.querySelector('.main .list');
    const projectList = document.querySelector('.sidebar .projects');
    const projectInput = document.querySelector('.sidebar input');
    const form = document.querySelector('.header form');

    function getTaskList(){
        return taskList;
    }
    function getProjectList(){
        return projectList;
    }
    function getForm(){
        return form;
    }
    function getHeading(){
        return heading;
    }
    function getProjectInput(){
        return projectInput;
    }

    return {getTaskList, getProjectList, getForm, getHeading, getProjectInput};
})();
