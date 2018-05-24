//
// $(".slider").slick({
//
//   infinite: true,
//   dots: true,
//   arrows: true,
//   autoplay: false,
//   nextArrow: $('.slider-container').find('.next-btn'),
//   prevArrow: $('.slider-container').find('.prev-btn')
// });
$('.slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 asNavFor: '.slider-for',
 dots: false,
 centerMode: true,
 focusOnSelect: true,
 autoplay: true,
 autoplaySpeed: 2000,
 nextArrow: $('.mainlidet').find('.next-btn'),
 prevArrow: $('.mainlidet').find('.prev-btn')

});

// if ( width < 640) {
//   $('.slider-nav').slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    asNavFor: '.slider-for',
//    dots: false,
//    centerMode: false,
//    focusOnSelect: false,
//    autoplay: false,
//    autoplaySpeed: 1000,
//    nextArrow: $('.mainlidet').find('.next-btn'),
//    prevArrow: $('.mainlidet').find('.prev-btn')
// }


$('.slider-nav-small').slick({
 autoplay: true,
 autoplaySpeed: 2000,
 dots: false,
 prevArrow: false,
 nextArrow: false
});
