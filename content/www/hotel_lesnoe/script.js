window.onload = function () {
  //burger - menu show / hide
  let burger = document.querySelector(".main-nav-burger-wrapper");
  let burgerMenu = document.querySelector('.main-nav-burger');
  let burgerLine = document.querySelector(".main-nav-burger_line");
  burger.addEventListener('click', function () {
    burgerMenu.classList.toggle('hidden');
    burgerLine.classList.toggle('burger_transform');
  });
  //Pop-Up
  let popUp = document.querySelector(".popUp-window");
  let popUpOpen = document.querySelector(".booking_btn");
  let popUpCloser = document.querySelector(".popUp-window_close");
  popUpOpen.addEventListener('click', function () {
    popUp.style.display = 'block';
    document.documentElement.scrollTop = 0;
  });
  popUpCloser.addEventListener('click', function () {
    popUp.style.display = 'none';
  });
  //установим текущую дату в инпуты
  let today = new Date();
  document.querySelector('.jsCheckIn').value = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;
  document.querySelector('.jsCheckOut').value = `${today.getDate() + 1}.${today.getMonth() + 1}.${today.getFullYear()}`;
  //логика добавления / удаления гостей
  let bookingGuest = document.querySelector('.booking-guest');
  let hiddenCounter = document.querySelector('.jsChangeCounter');
  let closeHiddenCounter = document.querySelector('.changeCounter_close');
  bookingGuest.addEventListener('click', function () {
    hiddenCounter.classList.add('hidden');
  }, false);
  closeHiddenCounter.addEventListener('click', function () {
    event.stopImmediatePropagation();
    hiddenCounter.classList.remove('hidden');
  }, false);
  let bookingGuestCounter = document.querySelector('.booking-guest_number');
  bookingGuestCounter.textContent = '1';
  let changeCounterPlus = document.querySelector('.changeCounter_plus');
  let changeCounterMinus = document.querySelector('.changeCounter_minus');
  changeCounterPlus.addEventListener('click', function () {
    return bookingGuestCounter.textContent = Number(bookingGuestCounter.textContent) + 1;
  });
  changeCounterMinus.addEventListener('click', function () {
    if (bookingGuestCounter.textContent > 1) {
      return bookingGuestCounter.textContent = Number(bookingGuestCounter.textContent) - 1;
    }
  });
  /* Локализация datepicker */
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);
  $(function () {
    $(".datepicker").datepicker({
      minDate: 0
    });
  });
};
