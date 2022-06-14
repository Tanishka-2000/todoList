import domElements form './domElements.js';
export default const formControls = {
    showForm: function(){
                let form = domElements.getForm();
                form.style.display = 'flex';
            },
    hideForm: function(){
                let form = domElements.getForm();
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
                let form = domElements.getForm();
                let task = form.querySelector('input#task');
                let project = form.querySelector('input[name="projectName"]');
                let priority = form.querySelector('input[name="priority"]');
                let duedate = form.querySelector('input[type="date"]');

                return {task, project, priority, duedate};
            }
};
