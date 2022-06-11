const button = document.querySelector('button');

const template = document.querySelector('template');
const list =  document.querySelector('.list');

const title = document.querySelector('input[name="title"]');
const description = document.querySelector('input[name="description"]');
const dueDate = document.querySelector('input[name="duedate"]');
const priority = document.querySelector('select[name="priority"]');

let temp = [title, description, dueDate, priority]
button.addEventListener('click',function(){
    let item = template.content.cloneNode(true);
    let paras = item.querySelectorAll('div p');
    for (let i = 0; i < paras.length; i++) {
        paras[i].textContent += temp[i].value;
        temp[i].value = '';
    }
    list.appendChild(item);
});
