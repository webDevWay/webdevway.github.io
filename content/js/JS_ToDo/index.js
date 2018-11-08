'use strict';

var buttonAdd = document.getElementById('add');
var mainUl = document.getElementById('mainUl');
var newTask = document.getElementById('newTask');
var date = new Date();

function createItem(task) {
    if (newTask.value) {
        var li = document.createElement('li');
        var buttonDel = document.createElement('i');
        buttonDel.className = "fas fa-trash-alt delete";
        var spanText = document.createElement('span');
        spanText.innerHTML = newTask.value;
        var br = document.createElement('br');
        var spanDate = document.createElement('span');
        spanDate.className = "date";
        spanDate.innerHTML = date.toLocaleString('ru', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
        mainUl.appendChild(li);
        li.appendChild(spanText);
        li.appendChild(buttonDel);
        li.appendChild(br);
        li.appendChild(spanDate);

        buttonDel.addEventListener('click', removeItem);
        newTask.value = "";
        return li;
    }
    save();
}
function addItem() {
    var li = createItem(newTask.value);
}
buttonAdd.onclick = addItem;
function removeItem() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}