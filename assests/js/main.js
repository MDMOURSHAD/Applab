 
 // Partners-section Slider //

 var swiper1 = new Swiper('.swiper1', {
      slidesPerView: 'auto',
      spaceBetween: 45, 
      speed:3300,
      loop: true,     
       autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  // Testimonial-section Slider //

  var swiper2 = new Swiper('.swiper2', {
         autoplay: {
        delay: 4000,
        speed: 70000,
        disableOnInteraction: false,
        },
        loop: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


 // Pricing Button //

 $(document).ready(function(){

  $('.btn-1').click(function(){

    $('.btn-1').addClass('active-effect');
    $('.btn-2').removeClass('active-effect');
    $('.free-service').addClass('price-box-shadow');
    $('.premium-service').removeClass('price-box-shadow');

  });

    $('.btn-2').click(function(){

    $('.btn-2').addClass('active-effect');
    $('.btn-1').removeClass('active-effect');
    $('.premium-service').addClass('price-box-shadow');
    $('.free-service').removeClass('price-box-shadow');

  });



 });