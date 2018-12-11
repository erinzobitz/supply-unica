$(document).ready(function() {
  $("#shop-link").click(function(event) {
    event.preventDefault();

    var expandedHeader = $("header").hasClass("site-header--expanded");

    if (!expandedHeader) {
      $(".site-header__site-nav").slideDown("fast");
      $("header").addClass("site-header--expanded");
      $(this).blur();
    } else {
      $(".site-header__site-nav").slideUp("fast");
      $("header").removeClass("site-header--expanded");
      $(this).blur();
    }
  });

  $("#mobile-shop-link").click(function(event) {
    event.preventDefault();

    var mobileNavExpanded = $(".mobile-nav").hasClass("mobile-nav--expanded");

    if (!mobileNavExpanded) {
      $(".mobile-nav__site-nav").slideDown("fast");
      $(".mobile-nav").addClass("mobile-nav--expanded");
      $(this).blur();
    } else {
      $(".mobile-nav__site-nav").slideUp("fast");
      $(".mobile-nav").removeClass("mobile-nav--expanded");
      $(this).blur();
    }
  });
});
