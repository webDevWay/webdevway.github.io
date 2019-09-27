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

    var divTag = document.createElement('div'),
        inputTag = document.createElement('input'),
        datalistTag = document.createElement('datalist');

    divTag.className = 'div';
    inputTag.className = 'input';
    inputTag.setAttribute('list', 'namesList');
    inputTag.setAttribute('placeholder', 'Click for car choice ...');
    datalistTag.id = 'namesList';

    document.body.appendChild(divTag);
    divTag.appendChild(inputTag);
    divTag.appendChild(datalistTag);

    function createChoiceOption(n) {
        var optionTag = document.createElement('option');
        optionTag.innerText = listArr[n];
        datalistTag.appendChild(optionTag);
    }
    for (let i = 0; i < listArr.length; i++) {
        createChoiceOption(i);
    }
}) ();