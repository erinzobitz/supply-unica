$(document).ready(function() {
  $(".collection-list__link--with-image").hover(function() {
    if (window.innerWidth > 749 && window.innerWidth < 981) {
      $(this).parent().next().css('display', 'block');
    }

    if (window.innerWidth > 980) {
      $(this).parent().next().css('display', 'block');
      $(this).parent().next().next().css('display', 'block');
    }
  });

  $(".collection-list__link--with-image").mouseout(function() {
    $(".collection-list__image-preview").css('display', 'none');
    $(".collection-list__image-preview--featured").css('display', 'none');
  });
});
