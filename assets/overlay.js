$(document).ready(function() {
  if (window.location.hash.substring(1) == 'interview') {
    openOverlay();
  }

  $('.js-interview-overlay-open').click(function() {
    openOverlay();
  });

  $('.js-interview-overlay-close').click(function() {
    closeOverlay();
  });

  function openOverlay() {
    $('.interview-overlay').addClass('interview-overlay--is-visible');
  }

  function closeOverlay() {
    $('.interview-overlay').removeClass('interview-overlay--is-visible');
  }
});
