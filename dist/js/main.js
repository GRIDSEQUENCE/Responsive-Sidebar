const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const content = document.querySelector('.container__content');

menu.addEventListener('click', () => {
  menu.classList.toggle('menu--animate');
  nav.classList.toggle('nav--slide');
  content.classList.toggle('container__content--slide');
});
