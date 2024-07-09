addEventListener("scroll", (event) => {
  currentScroll = $(window).scrollTop();

  if (currentScroll > 0) {
    $(".header-new").addClass("fixed");
  } else {
    $(".header-new").removeClass("fixed");
  }

  // console.log("currentScroll", currentScroll);
});

$(document).ready(function () {
  // if ($(".burger").length > 0) {
  //   let menu = $(".header .menu");
  //   let burger = $(".burger");
  //   let burgerСlose = $(".menu .btn-close");
  //   burger.on("click", function () {
  //     if (menu.hasClass("opened")) {
  //       closeMenu();
  //     } else {
  //       burger.addClass("opened");
  //       menu.addClass("opened").slideDown();
  //       $(document).mouseup(function (e) {
  //         if (
  //           !menu.is(e.target) &&
  //           menu.has(e.target).length === 0 &&
  //           !burger.is(e.target)
  //         ) {
  //           closeMenu();
  //         }
  //       });
  //     }
  //   });
  //   burgerСlose.on("click", function () {
  //     closeMenu();
  //   });
  //   function closeMenu() {
  //     burger.removeClass("opened");
  //     menu.removeClass("opened").slideUp();
  //     $(document).off("mouseup");
  //   }
  // }
});

$(window).on("resize", function () {});
