$(document).ready(function() {
  $(".collection-list__link--with-image").hover(function() {
    if (window.innerWidth > 749) {
      $(this).parent().next().css('display', 'block');
    }

    if (window.innerWidth > 980) {
      $(this).parent().nextAll().css('display', 'block');
    }
  });

  $(".collection-list__link--with-image").mouseout(function() {
    $(".collection-list__image-preview").css('display', 'none');
    $(".collection-list__image-preview--featured").css('display', 'none');
  });
});
