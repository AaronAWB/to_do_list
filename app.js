const addButton = document.querySelector(".add-button");
const toDoInput = document.querySelector(".to-do-textbox");
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

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<span>&#10006;</span>';
    deleteButton.addEventListener('click', deleteToDo);
    toDoDiv.appendChild(deleteButton);

    newToDo.addEventListener ('click', completeToDo);

    toDoList.appendChild(toDoDiv);
}

function deleteToDo (event) {

    const deletedItem = event.target.parentElement;
    if (deletedItem.classList[1] === "completed") {
        deletedItem.remove();
    }
}

function completeToDo (event) {

    const completedItem = event.target.parentElement;
    completedItem.classList.toggle("completed");
}