window.onload = function() {
    'use strict';
    function fullScreen(element) {
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.webkitrequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.mozRequestFullscreen) {
            element.mozRequestFullScreen();
        }
    }
    var html = document.documentElement;
    fullScreen(html);
//variables for existing HTML #id
    var buttonAdd = document.getElementById('add'),
        mainUl = document.getElementById('mainUl'),
        newTask = document.getElementById('newTask'),
        date = new Date(),
        // localStorageCount = localStorage.length,
        localStorageArr = JSON.parse(localStorage.getItem('123')) || [];
//load list from LocalStorage if it not null
    if (localStorage.length > 0 && localStorage.getItem('123')) {
        var getArr = JSON.parse(localStorage.getItem('123'));
            for (let i = 0; i < getArr.length; i++ ) {
                createItem(getArr[i]);
            }
    }
//create new LI item
    function createItem(val) {
        if(val === '') {
           return confirm("Заполните поле!");
        }
        else if (val) {
            var li = document.createElement('li');
            var buttonDel = document.createElement('i');
            buttonDel.className = "fas fa-trash-alt delete";
            var spanText = document.createElement('span');
            spanText.className = "text";
            spanText.innerHTML = val;
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
        }
        newTask.value = "";
    }
// button for create and add new LI item + save in LocalStorage
    function addItem() {
        saveArrInLocalStorage(newTask.value, localStorageArr);
        createItem(newTask.value);
    }
    buttonAdd.addEventListener('click', addItem);
//Save new item in Local Storage
    function saveArrInLocalStorage(item, arr) {
        if (item) {
            arr.push(item);
            localStorage.setItem('123', JSON.stringify(arr));
        }
    }
//EventListener on Del Button for add in created LI item
    function removeItem() {
        this.parentNode.parentNode.removeChild(this.parentNode);
        reloadLocalStorage();
    }
//reWrite LocalStorage, if one of item deleted
    function reloadLocalStorage() {
        var allLiTextArr = document.querySelectorAll('.text');
        localStorage.clear();
        if (allLiTextArr.length > 0) {
            var str = [];
            for (let i = 0; i < allLiTextArr.length; i++) {
                str.push(allLiTextArr[i].innerText);
            }
            localStorage.setItem('123', JSON.stringify(str));
        }
    }
};