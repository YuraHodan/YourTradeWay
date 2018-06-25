
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

$('.slider-nav-small').slick({
 autoplay: true,
 autoplaySpeed: 2000,
 dots: false,
 prevArrow: false,
 nextArrow: false
});


/// goood slider 1

$('.goode1-slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.goode1-slider-nav'
});
$('.goode1-slider-nav').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 asNavFor: '.goode1-slider-for',
 focusOnSelect: true,
 autoplay: true,
 autoplaySpeed: 2000,
 nextArrow: $('.mainlidet').find('.next-btn'),
 prevArrow: $('.mainlidet').find('.prev-btn')

});



/// goood slider 2


$('.goode2-slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 asNavFor: '.goode2-slider-nav'
});
$('.goode2-slider-nav').slick({
 slidesToShow: 3,
 slidesToScroll: 3,
 asNavFor: '.goode2-slider-for',
 dots: true,
 autoplay: true,
 autoplaySpeed: 2000,
 nextArrow: false,
 prevArrow: false

});


//// advertisingSlider

$('.advertising-slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: false,
 asNavFor: '.advertising-slider-nav'
});
$('.advertising-slider-nav').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 asNavFor: '.advertising-slider-for',
 focusOnSelect: false,
 autoplay: true,
 autoplaySpeed: 2000,
 nextArrow: false,
 prevArrow: false,
 dots: false,

});



/// one goodsslider

    $(function() {
  $('.slider-for2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    // autoplay: true,
    asNavFor: '.slider-nav2'
  });
  $('.slider-nav2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for2',
    dots: true,
    // centerMode: true,
    focusOnSelect: true
  });
});
/// one oneproducter

$('.producter-slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 asNavFor: '.producter-slider-nav'
});
$('.producter-slider-nav').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 asNavFor: '.producter-slider-for',
 dots: true,
 autoplay: true,
 autoplaySpeed: 2000,
 nextArrow: false,
 prevArrow: false

});

/// premiym smollle
$('.slider-smolle-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider-smolle-nav'
});
$('.slider-smolle-nav').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 asNavFor: '.slider-smolle-for',
 dots: false,
 centerMode: true,
 focusOnSelect: true,
 autoplay: true,
 autoplaySpeed: 2000,
 nextArrow: false,
 prevArrow: false

});
