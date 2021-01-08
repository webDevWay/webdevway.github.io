$(document).ready(function(){
  $('.header__slider-wrap').slick({
    dots: true
  });
  $('.part__slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 390,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
   ////////////////////
     $('.menu-burger').click(function(){
      $('.menu-burger').toggleClass('active');
      $('.header__menu').toggleClass('active');
    });
    ///////////////////
});


