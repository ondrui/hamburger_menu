let menu = document.querySelector('.header__menu');
let menuItem = document.querySelectorAll('.header__item');
let burger = document.querySelector('.header__burger');
let body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
});

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
  })
})