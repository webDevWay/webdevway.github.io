$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  easing:	'linear',
  appendArrows: $('.slider_btn'),
  prevArrow: '<span id="slider_btn_prev" class="slider_btn_left"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
  nextArrow: '<span id="slider_btn_next" class="slider_btn_right"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>'
});