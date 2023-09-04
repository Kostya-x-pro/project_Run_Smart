window.addEventListener('DOMContentLoaded', () => {
  // slick slider
    $('.carusel__inner').slick({
      speed: 1000,
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

    // tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function togleSlide(item) {
      $(item).each(function(i){
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    }

    togleSlide('.catalog-item__link');
    togleSlide('.catalog-item__back');

  //Bureger menu
  const burgerBtn = document.querySelector('#burger');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-menu_active');
  });


});