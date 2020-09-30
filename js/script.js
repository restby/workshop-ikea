'use strict';

// получение переменных:
const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');

// создание элемента оверлей, добавление ему класса,вставка в разметку
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);

// объявление функции которая: отображает меню, добавляет оверлей
const openMenu = () => {
  catalog.classList.add('open');
  overlay.classList.add('active');
};

// объявление функции которая: скрывает меню, скрывает оверлей, скрывает подменю
const closeMenu = () => {
  catalog.classList.remove('open');
  overlay.classList.remove('active');
  closeSubMenu();
}

// объявление функции которая: открывает подменю по клику на ссылки меню (делегирование событий) и "глушит" стандартное поведение браузера, а так же вставляет в название подменю верстку из ссылки меню
const openSubMenu = (e) => {
  e.preventDefault();
  const itemList = e.target.closest('.catalog-list__item');
  if (itemList) {
    subCatalogHeader.innerHTML = itemList.innerHTML;
    subCatalog.classList.add('subopen');
  }
}

// объявление функции которая: скрывает подменю
const closeSubMenu = () => {
  subCatalog.classList.remove('subopen');
}

// вызов обработчиков по клику
btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);


// закрытие меню по клавише escape
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    closeMenu();
  }
});