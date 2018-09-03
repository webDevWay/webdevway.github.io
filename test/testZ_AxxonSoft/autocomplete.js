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
        datalistTag = document.createElement('datalist');

    inputTag.setAttribute('list', 'namesList');
    inputTag.setAttribute('placeholder', 'Click for car choice ...');
    datalistTag.setAttribute('id', 'namesList');

    document.body.appendChild(divTag);
    divTag.appendChild(inputTag);
    divTag.appendChild(datalistTag);
//Функция и цикл заполнения вариантов выбора
    function createChoiceOption(n) {
        var optionTag = document.createElement('option');
        optionTag.innerText = listArr[n];
        datalistTag.appendChild(optionTag);
    }
    for (let i = 0; i < listArr.length; i++) {
        createChoiceOption(i);
    }
}) ();