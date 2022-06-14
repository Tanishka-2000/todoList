let today = new Date();
let date = document.querySelector('.header div');
date.textContent = today.toDateString();

const projectIcon = document.querySelector('form .addProject');
const priorityIcon = document.querySelector('form .addPriority');

const projectDiv = document.querySelector('form .addProject div');
const priorityDiv = document.querySelector('form .addPriority div');
const duedateIcon = document.querySelector('form .addDueDate');
const dateInput = document.querySelector('form .addDueDate input');

projectDiv.addEventListener('click',function(e){
    let projectName = e.target.textContent;
    e.target.parentElement.nextElementSibling.value = projectName;
    e.target.parentElement.style.display = 'none';
    e.stopPropagation();
});

priorityDiv.addEventListener('click',function(e){
    let priority = e.target.textContent;
    e.target.parentElement.nextElementSibling.value = priority;
    e.target.parentElement.style.display = 'none';
    e.stopPropagation();
});

// -------------------------------
projectIcon.addEventListener('click', function(e){
    e.target.parentElement.querySelector('div').style.display = 'block';

});

priorityIcon.addEventListener('click', function(e){
    e.target.parentElement.querySelector('div').style.display = 'block';
});

// ---------------------------------
duedateIcon.addEventListener('click',function(e){
    if(e.target.classList.contains('material-symbols-outlined')){
    e.target.nextElementSibling.style.display = 'block';
    }
});

dateInput.addEventListener('input',function(e) {
    e.target.style.display = 'none';
    console.log(e.target.value);
});
// sidebar--------------

const addProject = document.querySelector('.sidebar button');
addProject.addEventListener('click',function(e){
    e.target.nextElementSibling.style.display = "block";
});
