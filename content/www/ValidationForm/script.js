//ждём загрузки дома
document.addEventListener('DOMContentLoaded', function () {
  //объявим переменные
  let d = document,
    inputName = d.querySelector('.input_name'),
    inputSurname = d.querySelector('.input_surname'),
    inputEmail = d.querySelector('.input_email'),
    inputPhone = d.querySelector('.input_phone'),
    inputAbout = d.querySelector('.input_about'),
    btnSubmit = d.querySelector('.button_submit'),
    form = d.getElementsByClassName('form-wrapper'),
    variantItems = d.querySelector('.variant-items');

  //Regexp для валидации
  let regexName = /^\D{3,50}$/, //только буквы от 3 до 50 символов
    regexEmail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/, //наличие @ и домена
    regexPhone = /^[0-9]{11}$/, //только цифры 11 символов
    regexAbout = /^[A-Za-zА-Яа-яЁё0-9]{3,500}$/; //от 3 до 500 символов

  //функция для создания всплывающего сообщения
  function createErrorSpan(el, msg) {
    if (!el.querySelector('.error')) {
      let errorSpan = document.createElement('span');
      errorSpan.textContent = msg;
      console.log(el.parentNode);
      el.parentNode.appendChild(errorSpan);
      errorSpan.className = 'error';
      errorSpan.setAttribute('contentEditable', 'false')
    }
  }

  //функция для установки аттрибутов свалидированныйх полей
  function setValidAttr() {
    if (inputName.textContent.match(regexName) && !inputName.hasAttribute('data-valid')) {
      console.log(inputName.textContent);
      inputName.setAttribute('data-valid', 'validated');
    }
    if (inputSurname.textContent.match(regexName) && !inputSurname.hasAttribute('data-valid')) {
      console.log('inputSurname');
      inputSurname.setAttribute('data-valid', 'validated');
    }
    if (inputEmail.textContent.match(regexName) && !inputEmail.hasAttribute('data-valid')) {
      console.log('inputEmail');
      inputEmail.setAttribute('data-valid', 'validated');
    }
    if (inputPhone.textContent.match(regexName) && !inputPhone.hasAttribute('data-valid')) {
      console.log('inputPhone');
      inputPhone.setAttribute('data-valid', 'validated');
    }
    if (inputAbout.textContent.match(regexName) && !inputAbout.hasAttribute('data-valid')) {
      console.log('inputAbout');
      inputAbout.setAttribute('data-valid', 'validated');
    }
  }

  //Проверка при отправке формы
  btnSubmit.addEventListener('click', function () {
    setValidAttr();
    //Проверка input`s
    if (!inputName.textContent.match(regexName)) {
      inputName.removeAttribute('data-valid');
      createErrorSpan(inputName, 'Введите имя. Только буквы');
    }
    if (!inputSurname.textContent.match(regexName)) {
      createErrorSpan(inputSurname, 'Введите фамилию. Только буквы');
      inputSurname.removeAttribute('data-valid');
    }
    if (!inputEmail.textContent.match(regexEmail)) {
      createErrorSpan(inputEmail, 'Введите e-mail');
      inputEmail.removeAttribute('data-valid');
    }
    if (!inputPhone.textContent.match(regexPhone)) {
      createErrorSpan(inputPhone, 'Введите номер. Только цифры');
      inputPhone.removeAttribute('data-valid');
    }
    if (!inputAbout.textContent.match(regexAbout)) {
      createErrorSpan(inputAbout, 'Минимум 3 символа');
      inputSurname.removeAttribute('data-valid');
    }

    console.log(form[0].querySelectorAll('[data-valid=validated]'));
  });

  //Проверка выбора только 2х карточек из 5ти
  variantItems.addEventListener('click', function (e) {
    //выбранные карточки
    let selectedCard = document.getElementsByClassName('selected-item').length;
    //Если меньше 2х карточек - убрать уведомление
    if (selectedCard <= 2 && variantItems.querySelector('.error')) {
      let el = variantItems.querySelector('.error');
      el.parentNode.removeChild(el);
    }
    //Если выбрано меньше двух карточек, выделить выбранную карточку
    // ИЛИ При повторном нажатии выюранной карточки, снять выделение
    if (selectedCard < 2 || selectedCard >= 2 && e.target.parentNode.classList.contains('selected-item')) {
      e.target.parentNode.classList.toggle('selected-item');
    }
    //При попытке выбора больше двух карточек, показать уведомление
    else if (selectedCard >= 2) {
      createErrorSpan(e.target.parentNode, 'Выбрать не больше двух');
    }
  });

  //Обработчик на удаление всплывающего уведомления
  form[0].addEventListener('click', function (e) {
    if (e.srcElement.className !== 'form-wrapper' && e.target.querySelector('.error')) {
      let el = e.target.querySelector('.error');
      el.parentNode.removeChild(el);
    }
  });
});