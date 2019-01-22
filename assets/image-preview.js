$(document).ready(function() {
  $(".collection-list__link--with-image").hover(function() {
    var minimumTop = 183;
    var calculatedTop = $(this).offset().top - 480;
    var imageTop = calculatedTop < minimumTop ? minimumTop : calculatedTop;

    if (window.innerWidth > 749 && window.innerWidth < 1024) {
      $(this).parent().next().css({ 'display': 'block', 'top': imageTop });
    }

    if (window.innerWidth > 1023) {
      $(this).parent().next().css({ 'display': 'block', 'top': imageTop });
      $(this).parent().next().next().css({ 'display': 'block', 'top': imageTop });
    }
  });

  $(".collection-list__link--with-image").mouseout(function() {
    $(".collection-list__image-preview").css('display', 'none');
    $(".collection-list__image-preview--featured").css('display', 'none');
  });
});
