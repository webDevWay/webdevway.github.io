;(function autocomplete() {
//Массив строк.
    var listArr = [
        'Toyota',
        'Opel',
        'Suzuki',
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
    var longestWord;
    function findLongestWord(arr) {
        longestWord = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > longestWord) {
                longestWord = arr[i].length;
            } else i++;
        }
        return longestWord;
    }
    findLongestWord(listArr);

//обработчик на нажатие клавиши в input
    var allLi = document.getElementsByTagName('li');
    var ulForLiRem = document.getElementsByTagName('ul')[0];
    var firstLetter;
    var choiceArr = [];
    inputTag.addEventListener("keyup", function() {
        for (let i = 0; i < listArr.length; i++) {
            if (input.value[i] == listArr[i][i]) {
                choiceArr.push()
            }

                }
            }); console.log(choiceArr);

}) (); //конец модуля