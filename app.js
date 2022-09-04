const addButton = document.querySelector(".button");
const toDoInput = document.querySelector(".to-do-text-box");
const toDoList = document.querySelector(".to-do-list");

addButton.addEventListener('click', addToDo);

function addToDo (event) {

    event.preventDefault();
    createListItem();
    toDoInput.value = "";
}

function createListItem () {

    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('to-do-item');

    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('to-do-content');
    toDoDiv.appendChild(newToDo);

    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = "checkbox";
    completeCheckbox.classList.add('complete-button');
    completeCheckbox.addEventListener('change', completeToDo);
    toDoDiv.appendChild(completeCheckbox);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<span>&#10006;</span>';
    deleteButton.addEventListener('click', deleteToDo);
    toDoDiv.appendChild(deleteButton);

    toDoList.appendChild(toDoDiv);
}

function deleteToDo (event) {

    const deletedItem = event.target.parentElement;
    deletedItem.remove();
}

function completeToDo (event) {

    const completedItem = event.target.parentElement;
    completedItem.classList.toggle("completed");
}