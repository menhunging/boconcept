addEventListener("scroll", (event) => {
  currentScroll = $(window).scrollTop();

  if (currentScroll > 0) {
    $(".header-new").addClass("fixed");
  } else {
    $(".header-new").removeClass("fixed");
  }
});

$(document).ready(function () {
  $(".subcatalog-filter__checkboxes input").on("click", function () {
    $(".btn-invis").hide();
  });

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

  if ($("[data-btn-disabled]").length > 0) {
    $("[data-btn-disabled]").on("click", function () {
      const formBlock = $(this).parents("form");
      const btn = formBlock.find("[data-for-disabled]");
      const isDisabled = btn.prop("disabled");

      btn.prop("disabled", !isDisabled);
    });
  }

  if ($(".btn-visible-form").length > 0) {
    $(".btn-visible-form").on("click", function () {
      $(this)
        .hide()
        .parents(".form-parent")
        .addClass("opened")
        .find(".form-hidden")
        .slideDown(500);
    });
  }

  if ($(".datepicker").length > 0) {
    // settings global
    $.datepicker.regional["ru"] = {
      closeText: "Закрыть",
      prevText: "Предыдущий",
      nextText: "Следующий",
      currentText: "Сегодня",
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      monthNamesShort: [
        "Янв",
        "Фев",
        "Мар",
        "Апр",
        "Май",
        "Июн",
        "Июл",
        "Авг",
        "Сен",
        "Окт",
        "Ноя",
        "Дек",
      ],
      dayNames: [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
      ],
      dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      weekHeader: "Не",
      dateFormat: "dd.mm.yy",
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: "",
    };

    $.datepicker.setDefaults($.datepicker.regional["ru"]);
    // /settings global

    initDatePicter();
  }
});

function movingHeaderCatalog() {
  if ($(".btn-catalog").length > 0) {
    const btn = $(".btn-catalog");
    const offsetLeft = `left: ${btn.offset().left}px`;
    $(".header__catalog").attr("style", offsetLeft);
  }
}

function initDatePicter() {
  $(".datepicker").each(function () {
    $(this).datepicker({
      dateFormat: "dd.mm.yy",
    });
  });
}

$(window).on("resize", function () {
  if ($(".header__catalog").length > 0) {
    movingHeaderCatalog();
  }
});

document.querySelector("#title-search").addEventListener("submit", (evt) => {
  console.log("search-input");
  ym(61478635, "reachGoal", "search-input");
});

document.querySelectorAll("a.btn-search.header-top__search").forEach((item) =>
  item.addEventListener("click", (evt) => {
    console.log("search-click");
    ym(61478635, "reachGoal", "search-click");
  })
);

document.querySelectorAll(".header-new-social a").forEach((item) =>
  item.addEventListener("click", (evt) => {
    ym(61478635, "reachGoal", "click-mes");
  })
);
