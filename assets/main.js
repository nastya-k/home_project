$( document ).ready(function() {
     $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
    
});
$('.slider-nav').slick({
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  infinite: true,
  variableWidth: true,
    draggable: true,
    centerPadding: '0',
    slidesToShow: 7,
    swipeToSlide: true
});


    
//add a class when the document loads 
    
$('.slider-nav__item').each(function(){ 
  if ($(this).hasClass('slick-current')){
    $(this).children(".slider-nav__overlay").addClass("active__overlay");
    $(this).children(".slider-nav__title").addClass("active__title");
    $(this).children(".slider-nav__button").addClass("active__button"); 
  }
});
 
 //slick-slider overlays after slides change  

$('.slider-nav').on('afterChange', function(event, slick, currentSlide, nextSlide){ 
$(".slider-nav__overlay").removeClass('active__overlay');
$(".slider-nav__title").removeClass('active__title');
$(".slider-nav__button").removeClass('active__button');
$('.slick-current .slider-nav__overlay').addClass('active__overlay');
$('.slick-current .slider-nav__title').addClass('active__title'); 
$('.slick-current .slider-nav__button').addClass('active__button');  
});    
 
// masonry main

    $('.mansory-wrapper').masonry({
  itemSelector: '.grid-item',
   columnWidth: '.grid-sizer',
  percentPosition: true,
    gutter: 30
});
    
   // mansory         
$('.grid-fancy__wrapper1').masonry({
  itemSelector: '.grid-fancy__item',
   columnWidth: '.grid-sizer2',
   gutter: 3,
  percentPosition: true

});

$('.grid-fancy__wrapper2').masonry({
  itemSelector: '.fancy-item--small',
  columnWidth: '.grid-sizer',
  percentPosition: true,
   gutter: 3
}); 
    
// fancy-box
 $("[data-fancybox]").fancybox({	
});   

});

// объявить отдельно функцию 

$( window ).resize(function() {

     $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
    
});
$('.slider-nav').slick({
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  infinite: true,
  variableWidth: true,
    draggable: true,
    centerPadding: '0',
    slidesToShow: 7,
    swipeToSlide: true
});  
});

