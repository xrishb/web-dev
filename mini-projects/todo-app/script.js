const form = document.querySelector("#myform");
const todo = document.querySelector("#todo");
const todoList = document.querySelector("#todoList"); // Reference to the container
const addTodo = document.querySelector(".add");

let tasks = [];

function addTask(event) {
    event.preventDefault();

    const taskText = todo.value.trim();

    if (taskText !== '') {
        tasks.push(taskText);
        todo.value = '';
        updateTodoList(); // Call the function to update the UI
        console.log(tasks);
    }
}

function updateTodoList() {
    // Clear previous todo list items
    todoList.innerHTML = '';

    // Create new todo list items and append them to the container
    tasks.forEach(task => {
        const todoItem = document.createElement('div');
        todoItem.textContent = task;
        todoList.appendChild(todoItem);
    });
}

form.addEventListener('submit', addTask);
