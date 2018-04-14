$(function() {
  $(".A_MenuItemButton").click(function(e) {
    e.preventDefault()

    let container = $(e.target).closest(".O_MenuItem");

    console.log(container);

    let subItems = container.find(".A_SubmenuItem");

    console.log(subItems);

    let item = subItems[0];



    let height = 0;

    if (item) {
      let itemHeight = $(item).height()
      height = subItems.length * itemHeight
    };

    container.find(".M_Submenu").height(height);


    if (container.hasClass("active")) {
      container.removeClass("active");

      container.find(".M_Submenu").height(0);
    } else {
      $(".O_MenuItem").removeClass ("active");
      $(".M_Submenu").height(0);

      container.addClass("active");

      container.find(".M_Submenu").height(height);
    }
  });
});
