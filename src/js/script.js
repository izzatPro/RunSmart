$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
            // adaptiveHeight:true,
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
            nextArrow:'<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      dots:true,
                      arrows:false
                    }
                  }
            ]
          }
    );

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    function toggleSlide(item) {
      $(item).each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal
    //Открываем модальные окна в хедере
    $('[data-modal = consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn('slow');
      $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
      //Закрываем модальные окна везде где кликнем на крестик
      $('.modal__close').on('click',function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
        $('html, body').css({
          overflow: 'auto',
          height: 'auto'
      });
      });
    });
    //Открываем а разделе купить пульсометры
    $('.button_mini').on('click', function(){
      $('.overlay, #order').fadeIn('slow');
      $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
    });
    $('.button_mini').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });

    
    $('#consultation-form').validate();
    $('#consultation form').validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста введите свое имя",
        phone: "Номер введи номер бля",
        email: {
        required:" Введи почту я сказал",
        email: "Неправильно введен твой адресс"
        }
      }
    });
    $('#order form').validate();
  });