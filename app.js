const addButton = document.querySelector(".button");
const toDoTextBox = document.querySelector(".to-do-text-box");
const toDoList = document.querySelector(".to-do-list");

addButton.addEventListener('click', addToDo);

function addToDo (event) {

    event.preventDefault();
    createListItem();
}

function createListItem () {

    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('to-do-item');

    const newToDo = document.createElement('li');
    newToDo.innerText = "testing";
    newToDo.classList.add('to-do-content');
    toDoDiv.appendChild(newToDo);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    toDoDiv.appendChild(deleteButton);

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-button');
    toDoDiv.appendChild(completeButton);

    toDoList.appendChild(toDoDiv);
}