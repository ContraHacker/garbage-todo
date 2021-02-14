let todos = [];

function capitalize(text) {
    return `${text[0].toUpperCase()}${text.slice(1)}`;
}

function createLi(text, id) {
    const element = document.createElement('li');
    element.innerHTML = text;

    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'X';
    removeButton.id = id;
    removeButton.addEventListener('click', e => removeTodo(e.target.id));

    element.appendChild(removeButton);
    return element;
}

function createTodoList(todos) {
    const todoList = document.createElement('ul');
    todos.map((todo, id) => todoList.appendChild(createLi(todo, id)));
    return todoList;
}

function render() {
    document.querySelector('.container').innerHTML = null;
    document.querySelector('.container').appendChild(createTodoList(todos));
}

function addTodo(event) {
    event.preventDefault();

    const todoInput = document.querySelector('#todoInput');
    const newTodo = capitalize(todoInput.value);

    if (newTodo) {
        todos = [...todos, newTodo];
        todoInput.value = '';
        render();
    }
}

function removeTodo(id) {
    todos.splice(id, 1);
    render();
}

document.addEventListener('load', render());