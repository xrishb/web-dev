const form = document.querySelector("#myform");
const todo = document.querySelector("#todo");
const addTodo = document.querySelector(".add");

let tasks=[];

function addTask() {
    event.preventDefault();

    const taskText = todo.value.trim();

    if(taskText!== '') {
        // append the value to the end
        tasks.push(taskText);

        // clear the todo input value
        todo.value = '';

    }
}

form.addEventListener('submit', addTask);