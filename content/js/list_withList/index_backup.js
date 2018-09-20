;(function autocomplete() {
//Массив строк.
    var listArr = [
        'Toyota',
        'Opel',
        'BMW',
        'Pontiac',
        'Subaru',
        'Renault',
        'Audi'];

//Переменные - создание, атрибуты и добавление
    var divTag = document.createElement('div'),
        inputTag = document.createElement('input'),
        ulTag = document.createElement('ul'),
        liTag;

    inputTag.setAttribute('type', 'text');
    inputTag.setAttribute('placeholder', 'Click for car choice ...');
    inputTag.setAttribute('id', 'input');

    document.body.appendChild(divTag);
    divTag.appendChild(inputTag);
    divTag.appendChild(ulTag);
//Функция и цикл заполнения списка с обработчиком по нажатию мыши
    function createChoiceOption(n) {
        liTag = document.createElement('li');
        liTag.setAttribute('class', 'chocelist');
        liTag.innerText = listArr[n];
        ulTag.appendChild(liTag);
        liTag.onmousedown = function () {
            inputTag.value = this.innerHTML;
        }
    }
    for (let i = 0; i < listArr.length; i++) {
        createChoiceOption(i);
    }
//Обработчики на фокус
    inputTag.addEventListener('focusin', function() {
        ulTag.style.display = 'block';
    });
    inputTag.addEventListener('focusout', function() {
        ulTag.style.display = 'none';
    });
//Сортировка по нажатию
    //определим самое длинное слово
    var longestWord = 0;
    function findLongestWord {
        for (let i = 0; i < listArr; i++) {
            if (listArr[i].length > longestWord) {
                longestWord = listArr[i].length
            }
        }
    }

    var allLi = document.getElementsByTagName('li');
    inputTag.value = "";
    inputTag.addEventListener("keyup", function() {
        let i = inputTag.value.length;
        for ( let i = inputTag.value.length; i < allLi.length; )
            console.log('input', inputTag.value[0]);
        console.log('liTag', allLi.innerText[0]);
        // console.log('hi');
        if (inputTag.value[i] === allLi[i].innerText[0]) {
        }



    })


}) (); //конец модуля