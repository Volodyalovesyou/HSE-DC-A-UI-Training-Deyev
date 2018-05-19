$(function() {
  setButtonText()
  
  $(".A_PerPageButton").click(function(e) {
    e.stopPropagation()
    $(".O_PerPageMenu").toggleClass("open")
  });

  $("body").click(function(e) {
    $(".O_PerPageMenu").removeClass("open")
  });

  $(".O_PerPageMenu .A_DropdownMenuItem").click(function(e) {
    $(".O_PerPageMenu .A_DropdownMenuItem").removeClass("active")
    $(e.target).addClass("active")
    setButtonText()
  });
});


function setButtonText() {
  let buttonText = $(".O_PerPageMenu .A_DropdownMenuItem.active").text()
  $(".A_PerPageButton span").text(buttonText)
}
