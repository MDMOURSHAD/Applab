// Scroll to Top

$(window).scroll(function () {

  if ($(this).scrollTop() > 100) {
    $('.scroll-top').fadeIn();
  } else {
    $('.scroll-top').fadeOut();
  }

  // MENU STICKY //
  var windows = $(window);
  var sticky = $('.sticky')
  windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 120) {
      sticky.removeClass('stick');
    } else {
      sticky.addClass('stick');
    }
  });


});
// MOBILE MENU //

const menuIcon = document.querySelector('.hamburger-menu');
const navlist = document.querySelector('.nav-list');

menuIcon.addEventListener("click", () => {

  menuIcon.classList.toggle('change');
  navlist.classList.toggle('slide-menu');

});

function myFunction() {

  menuIcon.classList.remove('change');
  navlist.classList.remove('slide-menu');

}

// Partners-section Slider //

var swiper1 = new Swiper('.swiper1', {
  spaceBetween: 30,
  slidesPerView: 2,
  speed: 3300,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 45,
    },
  }
});

// Magnific popup video //
$('.video').magnificPopup({
            type: 'iframe',
            // other options
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',

                patterns: {
                    youtube: {
                        index: 'youtube.com/',

                        id: 'v=',

                        src: 'https://www.youtube.com/embed/%id%'
                    },
                },

             srcAction: 'iframe_src', 
            }
  });

// Testimonial-section Slider //

var swiper2 = new Swiper('.swiper2', {
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  speed:1200,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Pricing Button //

$(document).ready(function () {

  $('.btn-1').click(function () {

    $('.btn-1').addClass('active-effect');
    $('.btn-2').removeClass('active-effect');
    $('.free-service').addClass('price-box-shadow');
    $('.premium-service').removeClass('price-box-shadow');

  });

  $('.btn-2').click(function () {

    $('.btn-2').addClass('active-effect');
    $('.btn-1').removeClass('active-effect');
    $('.premium-service').addClass('price-box-shadow');
    $('.free-service').removeClass('price-box-shadow');

  });


});