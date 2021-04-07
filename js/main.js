$(function () {
  var scrolled;
  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 400) {
      $(".header").css({ "background": "pink" })
    }
    if (400 > scrolled) {
      $(".header").css({ "background": "white" })
    }
  }
});

$(function () {
  $('.slider__box').slick({
    dots: true,
    arrows: false,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
  });

//$(function((){
//  $('.modal').афтснищч({
//    'width': "320px",
//  });
//});
  $('.header__hamburger').on('click', function() {
    $('.header__list').toggleClass('header__list--active');
  });

});

