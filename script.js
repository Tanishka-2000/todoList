const button = document.querySelector('button');
const input = document.querySelector('input');
const template = document.querySelector('template');
const list =  document.querySelector('.list');
button.addEventListener('click',function(){
    let todo = input.value;
    let item = template.content.cloneNode(true);
    item.querySelector('div').textContent = todo;
    list.appendChild(item);
});
