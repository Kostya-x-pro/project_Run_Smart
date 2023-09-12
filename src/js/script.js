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

  // modal
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

    // validate forms
  validateForms('#consultation-form');
  validateForms('#order form');
  validateForms('#consultation form');

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: 'required',
        email: {
          required: true,
          email: true,
        }
      },
      messages: {
        name: {
          required: "Пожалуйств введите своё имя",
          minlength: jQuery.validator.format("Введите {0} символов!")
        },
        phone: "Пожалуйств введите свой номер телефона",
        email: {
          required: "Введите свою почту",
          email: "Неверно введён адрес почты"
        }
      }
    });
  }
  // masked input (opcional)
  $('input[name=phone]').mask("(+7) 999-9999");

  // send form from mallerPHP
  $('form').submit((e) => {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });

  // btn page up, smoth scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href=#up]").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  // animate + wow.js
  new WOW().init();

});