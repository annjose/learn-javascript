'use strict';

console.log(`index.js file!`);

class Todo {
    constructor(title, category) {
        this.title = title;
        this.category = category;
    }
}


const init = () => {
    console.log(`in init`);

    const todoForm = document.querySelector("#todo-form");
    todoForm.addEventListener("submit", (event) => {

        event.preventDefault();

        console.log("in submit event");
        const todoTitleText = document.querySelector("#todo-title");
        const todoCategoryDropdown = document.querySelector("#todo-category");

        const title = todoTitleText.value;
        const category = todoCategoryDropdown.value;
        console.log(`New Todo title=${title}, category=${category}`);

        const newTodo = new Todo(title, category);
        saveTodo(newTodo);
    });

    // test code
    // const todos = [new Todo(1, "task 1", "work"), 
    // new Todo(2, "task 2", "personal")]
    // showTodos(todos);
    fetchAndShowTodos();

}

const fetchAndShowTodos = () => {

    const url = "https://api.learnjavascript.online/demo/todos";
    fetch(url)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                const error = `fetch failed with server error response: ${response.status}`;
                throw error;
            } else {
                return response.json();
            }
        })
        .then(data => {
            console.log(data);
            data.error ? showError(data.error) : showTodos(data.todos);
        })
        .catch(error => {
            showError(error);
        });

    let todos = [];

    return todos;
}

const showTodos = (todos) => {
    const todoListElement = document.querySelector("#todos-list");

    todoListElement.innerHTML = "";
    todos.forEach(todo => {
        todoListElement.insertAdjacentHTML("beforeend", `<li><div class="card">[${todo.category}] ${todo.title}</div></li>`);
    });
}

const showError = (errorMessage) => {
    console.log(`showError: ${errorMessage}`);
    const errorPanel = document.querySelector("#error-panel");
    errorPanel.innerHTML = `ERROR: ${errorMessage}`;
}

const saveTodo = (todo) => {
    console.log(`Inside saveTodo(). todo title=${todo.title}, category=${todo.category}`);

    const url = "https://api.learnjavascript.online/demo/todos";
    const params = {
        method: "PUT",
        body: JSON.stringify({ title: todo.title, category: todo.category })
    }

    // disable the Add button before calling the fetch API to avoid double requests
    const addButton = document.querySelector("#button-add");
    addButton.setAttribute("disabled", "disabled");

    console.log(`before sending data to PUT. params=${JSON.stringify(params)}`);
    fetch(url, params)
        .then(response => response.json())
        .then(data => {
            addButton.removeAttribute("disabled");
            console.log(`PUT done. Response data=${JSON.stringify(data)}`);
            if (data.error) {
                throw data.error;
            } else {
                fetchAndShowTodos();
            }
        })
        .catch(error => {
            showError(error);
        });
}

const safeTodoTitles = ["walk the dog", "feed the cat", "learn javascript",
    "learn programming", "learn react", "prepare dinner",
    "prepare lunch", "review flashcards", "go for a run"];
