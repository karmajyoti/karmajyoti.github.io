$(function () {
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // Fix for Firefox and Safari
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});
