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

    const completeButton = document.createElement('input');
    completeButton.type = "checkbox";
    completeButton.classList.add('complete-button');
    toDoDiv.appendChild(completeButton);

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

}