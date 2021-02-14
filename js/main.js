//mobile
$('.mobile__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
});

//CAROUSEL
$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  autoplay: false,
  nextArrow: '<button type="button" data-role="none" class="slick-nexts slick-arrow" aria-label="Next"></button>',
  prevArrow: '<button type="button" data-role="none" class="slick-prevs slick-arrow" aria-label="Prev"></button>',

});


