window.addEventListener('DOMContentLoaded', () => {
  // slick slider
    $('.carusel__inner').slick({
      speed: 1000,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg"></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1,
          }
        },
        
      ]
    });


  //Bureger menu
  const burgerBtn = document.querySelector('#burger');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-menu_active');
  });


});