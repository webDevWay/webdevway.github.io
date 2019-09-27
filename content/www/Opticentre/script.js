//Ждем загрузки DOM`a
window.addEventListener('DOMContentLoaded', function () {
//Объявляем переменные
  let d = document,
    container = d.querySelector('.container'),
    headerPrice = d.querySelector('.header-icon_totalprice'),
    cardPrice = d.querySelector('.card_price').textContent.replace(/\s+/g, ''),//regex убирает пробелы
    cartIcon = d.querySelector('.header-icon_cart'),
    cartBlock = d.querySelector('.header-cart'),
    cartCloseBtn = d.querySelector('.hidden-cart_close'),
    cartSum = d.querySelector('.cart_sum'),
    cartList = d.querySelector('.cart-list'),
    cleanCart = d.querySelector('.header-cart_cleancart'),
    burgerBtn = d.querySelector('.header-burger_menu'),
    burgerBlock = d.querySelector('.hidden-burger');

    //класс для корзины
  class ShopingCart {
    constructor() {

    }
    //Метод добавленния товаров в корзину
    static addItem(x) {
      let li = document.createElement('li');
      li.className = 'cart-list_text';
      li.innerHTML = x + ': ' + cardPrice + '<span>&#8381;</span>';
      cartList.appendChild(li);
    };
    static clearCart(e) {
      let cartListText = e.target.parentNode.querySelectorAll('.cart-list_text');
      for (let i = 0; i < cartListText.length; i++) {
        cartList.removeChild(cartListText[i]);
      }
      localStorageArr = [];
      localStorage.clear();
      headerPrice.textContent = cartSum.textContent = '0';
    }

  }

//При загрузке страницы проверить Local Storage, если он не пустой, добавить элементы в корзину
    let localStorageArr = JSON.parse(localStorage.getItem('cart-items')) || []; //load list from LocalStorage if it not null
  if (localStorage.length > 0 && localStorage.getItem('cart-items')) {
    cartSum.textContent = headerPrice.textContent = localStorage.getItem('cart-sum');
    for (let i = 0; i < localStorageArr.length; i++) {
      ShopingCart.addItem(localStorageArr[i]);
    }
  }

  /* Обработчик на container, если клик был по кнопке "Купить":
   подсчет суммы заказа в header + сумма заказа в корзине (Итого)
  + добавление элемента в корзину */
  container.addEventListener('click', function (e) {
      if (e.target.dataset.button === 'button-add') {
        headerPrice.textContent = Number(cardPrice) + Number(headerPrice.textContent);
        cartSum.textContent = headerPrice.textContent;
        let title = e.target.parentNode.parentNode.querySelector('.card_title').textContent;

        ShopingCart.addItem(title);

        saveListInLocalStorage(title, cartSum.textContent, localStorageArr);
      }
    }
  );

  //Обработчик на иконку корзины - показать / скрыть корзину
  cartIcon.addEventListener('click', function () {
    cartBlock.classList.toggle('hidden-cart');
  });

  //Обработчик на крестик в корзине - скрыть корзину
  cartCloseBtn.addEventListener('click', function () {
    cartBlock.classList.toggle('hidden-cart');
  });

    //Обработчик на бургер
  burgerBtn.addEventListener('click', function () {
    burgerBlock.classList.toggle('d-block')
  });

//Сохранение элемента в Local Storage
  function saveListInLocalStorage(item, sum, arr) {
    if (item) {
      arr.push(item);
      localStorage.setItem('cart-items', JSON.stringify(arr));
    }
    if (sum) {
      localStorage.setItem('cart-sum', sum);
    }
  }

//кнопка - очистить корзину - очищает список, Local Storage, общую цену.
  cleanCart.addEventListener('click', function (e) {
    ShopingCart.clearCart(e);
  });
});