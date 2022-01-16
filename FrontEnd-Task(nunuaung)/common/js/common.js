$(window).on("scroll", function() {
    const height = $('.banner').height();
    if($(window).scrollTop() > height-80) {
        $(".navbar").addClass("active");
        $(".lang-menu").addClass("changed-onscroll");
    } else {
       $(".navbar").removeClass("active");
       $(".lang-menu").removeClass("changed-onscroll");
    }
});
$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        speed: 600,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        autoplay: true,
    });
    $('.ads-slider').slick({
        autoplay: false,
        cssEase: 'linear',
        speed: 1000,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '270px',
        slidesToShow: 1,
        slideToScroll: 1,
        prevArrow: $('.arrow-pre'),
        nextArrow: $('.arrow-next'),
        responsive: [{
            breakpoint: 1040,
            settings: {
              centerPadding: '190px',
            }
          },
          {
          breakpoint: 768,
          settings: {
            centerPadding: '120px',
          }
        },
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
            }
          
        }]
      });
  });
// language selector
$(function(){
  $('.select-field').click(function(){
    $('.lang-list').toggleClass("active");
  })
});
$(function(){
  $('.us').click(function(){
    $('.selected-lang').text("$");
    $('.selected-lang').addClass("changed-us");
    $('.lang-list').toggleClass("active");
  })
});
$(function(){
  $('.mm').click(function(){
    $('.selected-lang').text("Ks");
    $('.selected-lang').addClass("changed-mm");
    $('.lang-list').toggleClass("active");
  })
});