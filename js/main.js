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
});

$(window).on("resize", function () {});
