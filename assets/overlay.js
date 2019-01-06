$(document).ready(function() {
  $('.js-interview-overlay-open').click(function() {
    $('.interview-overlay').addClass('interview-overlay--is-visible');
  });

  $('.js-interview-overlay-close').click(function() {
    $('.interview-overlay').removeClass('interview-overlay--is-visible');
  });
});
