$(function() {
  $(".A_PaginationButton.page").click(function(e) {
    e.preventDefault();
    $(".A_PaginationButton.page").removeClass("active");
    $(this).addClass("active");
  });
});
