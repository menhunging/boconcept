addEventListener("scroll", (event) => {
  currentScroll = $(window).scrollTop();

  if (currentScroll > 0) {
    $(".header-new").addClass("fixed");
  } else {
    $(".header-new").removeClass("fixed");
  }
});

$(document).ready(function () {
  if ($(".menu-sections").length > 0) {
    const btnSections = $(".btn-sections");
    const wrapperMenuSections = $(".menu-sections__wrapper");
    const closeMenuSection = $(".menu-sections__close");
    const menuSections = $(".menu-sections");
    const subLink = $(".menu-sections__subLink");
    const body = $("body");

    btnSections.on("click", function () {
      openMenuSection();
    });

    closeMenuSection.on("click", function () {
      closeMenuSections();
    });

    wrapperMenuSections.on("click", function (e) {
      if (
        !menuSections.is(e.target) &&
        wrapperMenuSections.has(e.target).length === 0
      ) {
        closeMenuSections();
      }
    });

    subLink.on("click", function () {
      toggleSubMenu($(this));
    });

    function toggleSubMenu(link) {
      const menu = link
        .parents(".menu-sections__sub")
        .find(".menu-sections__sub-menu");

      if (link.hasClass("opened")) {
        closeSubMenu();
      } else {
        openSubMenu();
      }

      function openSubMenu() {
        link.addClass("opened");
        menu.addClass("opened").stop().slideDown();

        $(document).mouseup(function (e) {
          if (
            !menu.is(e.target) &&
            menu.has(e.target).length === 0 &&
            !link.is(e.target)
          ) {
            closeSubMenu();
            $(document).off("mouseup");
          }
        });
      }

      function closeSubMenu() {
        link.removeClass("opened");
        menu.removeClass("opened").stop().slideUp();
        $(document).off("mouseup");
      }
    }

    function openMenuSection() {
      wrapperMenuSections.addClass("opened");
      menuSections.addClass("opened");
      body.addClass("hidden");
    }

    function closeMenuSections() {
      wrapperMenuSections.removeClass("opened");
      menuSections.removeClass("opened");
      body.removeClass("hidden");
    }
  }

  if ($(".header-new .btn-search").length > 0) {
    const wrapperSearchBlock = $(".search-block__wrapper");
    const searchBlock = $(".search-block");
    const btnSearch = $(".header-new .btn-search");
    const btnSearchClose = $(".search-block__close");
    const body = $("body");

    btnSearch.on("click", function () {
      openSearch();
    });

    btnSearchClose.on("click", function () {
      closeSearch();
    });

    wrapperSearchBlock.on("click", function (e) {
      if (
        !searchBlock.is(e.target) &&
        wrapperSearchBlock.has(e.target).length === 0
      ) {
        closeSearch();
      }
    });

    function openSearch() {
      wrapperSearchBlock.addClass("opened");
      searchBlock.addClass("opened");
      body.addClass("hidden");
    }

    function closeSearch() {
      wrapperSearchBlock.removeClass("opened");
      searchBlock.removeClass("opened");
      body.removeClass("hidden");
    }
  }

  if ($(".header__catalog").length > 0) {
    movingHeaderCatalog();
  }

  if ($(".cardInStorkBl").length > 0) {
    const block = $(".cardInStorkBl");
    const listItems = block.find("ul li");
    const moreBtn = block.find(".cardInStorkBl__more");
    const countVisible = 3;

    if (listItems.length > countVisible) {
      listItems.slice(countVisible).hide();
      moreBtn.addClass("visible");
      moreBtn.find(".cardInStorkBl__num").text(listItems.length - countVisible);
    }

    moreBtn.on("click", function () {
      listItems.show();
      moreBtn.removeClass("visible");
    });
  }

  if ($(".modalNew").length > 0) {
    $("[data-popup]").on("click", function (event) {
      event.preventDefault();
      const modalId = $(this).data("popup");
      $("#" + modalId).addClass("visible");
      $("body").addClass("hidden");
    });

    $(".modalNew__close, .modalNew__overlay").on("click", function () {
      $(this).closest(".modalNew").removeClass("visible");
      $("body").removeClass("hidden");
    });

    $(".modalNew__inner").on("click", function (event) {
      if (event.target === this) {
        $(this).closest(".modalNew").removeClass("visible");
        $("body").removeClass("hidden");
      }
    });

    // Закрытие по ESC
    $(document).on("keydown", function (event) {
      if (event.key === "Escape") {
        $(".modalNew.visible").removeClass("visible");
        $("body").removeClass("hidden");
      }
    });
  }
});

function movingHeaderCatalog() {
  if ($(".btn-catalog").length > 0) {
    const btn = $(".btn-catalog");
    const offsetLeft = `left: ${btn.offset().left}px`;
    $(".header__catalog").attr("style", offsetLeft);
  }
}

$(window).on("resize", function () {
  if ($(".header__catalog").length > 0) {
    movingHeaderCatalog();
  }
});

// cookies
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  let cookieArr = document.cookie.split("; ");
  for (let cookie of cookieArr) {
    let [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) return cookieValue;
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function () {
  let notificationBlock = document.getElementById("notification-cookie");
  let closeBtn = document.getElementById("notification-cookie__btn");

  if (getCookie("notificationBOCO")) {
    notificationBlock.style.display = "none";
  } else {
    notificationBlock.style.display = "flex";
  }

  closeBtn.addEventListener("click", function () {
    notificationBlock.style.display = "none";
    setCookie("notificationBOCO", "true", 30); // Запоминаем на 30 дней
  });
});
