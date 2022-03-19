const form = document.querySelector('form');
const input = document.querySelector("[name='todo-textbox']");
const list = document.querySelector('.list');
const clear = document.querySelector("[name='clear']")

const existingTodos = JSON.parse(localStorage.getItem('.list'));

let todoList = existingTodos || [];

todoList.forEach(todo => {
    addTodoItem(todo);
})

function addTodoItem(text) {
    //data
    todoList.push(text);

    //UI
    let todoEntry = document.createElement('li');
    todoEntry.appendChild(document.createTextNode(text));
    list.appendChild(todoEntry);
    localStorage.setItem('.list', JSON.stringify(todoList));
}

function clearAll() {
    todoList = [];

    list.innerHTML = '';
    localStorage.clear();
}

form.onsubmit = (event) => {
    event.preventDefault();
    addTodoItem(input.value);
}
clear.addEventListener('click', clearAll);