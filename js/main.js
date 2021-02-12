//CAROUSEL
$('.carousel .owl-carousel').owlCarousel({
  margin: 0,
  loop: true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  navContainer: '.carousel .custom-nav',
  responsive:{
      0:{
          items: 1
      },
  }
});