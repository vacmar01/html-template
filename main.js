$(document).ready(function() {

  //prevent collapsing menu from disappearing when changing the viewport sizes
  $(window).on('resize', function() {
    if (!isMobile()) {
      $('.collapse').show();
      return;
    }

    $('.collapse').hide();
  });

  //toggles menu
  $('#menu-button').on('click', function() {
    $('.collapse').slideToggle();
    $(this).toggleClass('open');
  });

  //smooth scrolling menu
  $('.menu-link').on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');

    scrollTo(href);
    if ($(window).width() < 767) {
      $('.collapse').slideUp();
      console.log('hiding menu');
    }
  })
});

//scroll back to top
$('.up-button').on('click', function() {
  scrollTo('/');
})

function scrollTo(target) {
  console.log('scrollin');

  if (target == "/") {
    $('html, body').animate({
      scrollTop: 0
    },1000);
    return;
  }

  $('html, body').animate({
    scrollTop: $(target).offset().top
  },1000);
}

function isMobile() {
  return $(window).width() < 767
}
