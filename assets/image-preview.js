$(document).ready(function() {
  $(".collection-list__link--with-image").hover(function() {
    if (window.innerWidth > 768) {
      $(this).parent().next().css('display', 'block');
    }
  });

  $(".collection-list__link--with-image").mouseout(function() {
    $(".collection-list__image-preview").css('display', 'none');
  });
});
