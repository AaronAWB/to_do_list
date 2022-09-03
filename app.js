let listItems = [];

const button = document.querySelector(".button");
const textBox = document.queryselector(".to-do-text-box");
const list = document.querySelector(".list");

function addListItem (text) {
    const listItem = {
        text: text,
        checked: false,
    };
listItems.append(listItem);
}