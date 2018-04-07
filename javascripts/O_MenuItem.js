$(function() {
  $(".A_MenuItemButton").click(function(e) {
    let container = $(e.target).closest(".O_MenuItem")

    if (container.hasClass("active")) {
      container.removeClass("active");
    } else {
      $(".O_MenuItem").removeClass ("active");
      container.addClass("active");
    }

  });
});
