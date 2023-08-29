window.addEventListener('DOMContentLoaded', () => {
  //Bureger menu
  const burgerBtn = document.querySelector('#burger');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-menu_active');
  });


});