"use strickt";
$(document).ready(function () {
  $(".loader").delay(600).fadeOut();

  $(".modal").on("shown.bs.modal", function () {
    console.log("modal show");
    $(".tooltips").tooltip({
      container: $(this),
    });
  });

  // Home Slider
  var owl = $("#slider-home");
  // Carousel initialization
  owl.owlCarousel({
    // animateOut: 'slideOutDown',
    // animateIn: 'fadeInDown',
    // rtl: true,
    loop: false,
    margin: 0,
    navSpeed: 500,
    dots: true,
    nav: false,
    navText: [
      "<i class='fas fa-arrow-left'></i>",
      "<i class='fas fa-arrow-right'></i>",
    ],
    // dotsData: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    smartSpeed: 500,
    items: 1,
    /* info: true,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter //When the translation of the stage has finished. */
    responsiveClass: true,
    responsive: {
      0: {},
      767: {},
    },
  });
  // add animate.css class(es) to the elements to be animated
  function setAnimation(_elem, _InOut) {
    // Store all animationend event name in a string.
    // cf animate.css documentation
    var animationEndEvent =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    _elem.each(function () {
      var $elem = $(this);
      var $animationType = "animated " + $elem.data("animation-" + _InOut);

      $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
      });
    });
  }
  // Fired before current slide change
  owl.on("change.owl.carousel", function (event) {
    var $currentItem = $(".owl-item", owl).eq(event.item.index);
    var $elemsToanim = $currentItem.find("[data-animation-out]");
    setAnimation($elemsToanim, "out");
  });
  // Fired after current slide has been changed
  owl.on("changed.owl.carousel", function (event) {
    var $currentItem = $(".owl-item", owl).eq(event.item.index);
    var $elemsToanim = $currentItem.find("[data-animation-in]");
    setAnimation($elemsToanim, "in");
  });

  $(".slides-partner").owlCarousel({
    dots: false,
    nav: false,
    loop: true,
    slideTransition: "linear",
    margin: 15,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    // autoplaySpeed: 4500,
    navText: [
      "<i class='fa fa-chevron-left fa-lg'></i>",
      "<i class='fa fa-chevron-right fa-lg'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      500: {
        items: 2,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    thumbs: {
      autoStart: true,
    },
    // Close existing modals
    // Set this to false if you do not need to stack multiple instances
    closeExisting: false,

    // Enable infinite gallery navigation
    loop: false,

    // Enable keyboard navigation
    keyboard: true,

    // Should display navigation arrows at the screen edges
    arrows: true,

    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom-in-out",

    // Duration in ms for open/close animation
    animationDuration: 366,

    // Should image change opacity while zooming
    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
    zoomOpacity: "auto",

    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "zoom-in-out",

    // Duration in ms for transition animation
    transitionDuration: 366,

    // Container is injected into this element
    parentEl: "body",

    // Hide browser vertical scrollbars; use at your own risk
    hideScrollbar: true,

    fullScreen: {
      autoStart: false,
    },

    // Set `touch: false` to disable panning/swiping
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true, // Continue movement after releasing mouse/touch when panning
    },

    slideShow: {
      autoStart: false,
      speed: 3000,
    },
    protect: true,
  });

  // Select
  $(".selectric-custom").selectric({
    // multiple: {
    //   separator: ", ",
    //   keepMenuOpen: true,
    //   maxLabelEntries: false,
    // },
  });

  // WOW JS
  new WOW().init();

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 120) {
      $(".header").addClass("is-sticky");
    } else {
      $(".header").removeClass("is-sticky");
    }
  });
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

function onLoadPage() {
  // Mobile Toggle Menu
  let menuUl = document.querySelector("nav");
  let btnToggleMenu = document.querySelector(".toggle-navmenu");
  if (btnToggleMenu) {
    btnToggleMenu.onclick = () => {
      menuUl.classList.toggle("show");
    };
    $(document).mouseup(e => {
      if (!$("nav").is(e.target) // if the target of the click isn't the container...
        &&
        $("nav").has(e.target).length === 0) // ... nor a descendant of the container
      {
        $("nav").removeClass("show");
      }
    });
  }

  // Mobile Toggle Filter
  let sidebarFilter = document.querySelector(".sidebar");
  let btnToggleFilter = document.querySelector(".title-btn-filter-mobile button");
  let btnHideFilter = document.querySelector(".btn-hide-filter");
  if ((btnToggleFilter, btnHideFilter)) {
    btnToggleFilter.onclick = () => {
      sidebarFilter.classList.add("show");
    };
    btnHideFilter.onclick = () => {
      sidebarFilter.classList.remove("show");
    };
  }
  // Mobile Toggle Filter
  let sidebarFilter2 = document.querySelector(".sidebar-profile > ul");
  let btnToggleFilter2 = document.querySelector(".btn-toggle-menu");
  if ((sidebarFilter2, btnToggleFilter2)) {
    btnToggleFilter2.onclick = () => {
      sidebarFilter2.classList.toggle("show");
    };
    window.addEventListener("mouseup", function (e) {
      if (e.target != sidebarFilter2 && e.target.parentNode != sidebarFilter2) {
        sidebarFilter2.classList.remove("show");
      }
    });
  }

  // Happy Clients
  var swiper1 = new Swiper(".swiper-testimonials", {
    allowTouchMove: true,
    preventClicks: false,
    slidesPerColumn: 1,
    spaceBetween: 0,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination-second",
      clickable: true,
    },
    on: {
      resize: function () {
        swiperSecond.update();
      },
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  var swiper2 = new Swiper(".slides-schools", {
    allowTouchMove: true,
    preventClicks: true,
    slidesPerColumn: 1,
    spaceBetween: 0,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination-second",
    //   clickable: true,
    // },
    on: {
      resize: function () {
        swiperSecond.update();
      },
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  var swiper3 = new Swiper(".slides-featured-schools", {
    allowTouchMove: true,
    preventClicks: true,
    slidesPerColumn: 1,
    spaceBetween: 0,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination-second",
    //   clickable: true,
    // },
    on: {
      resize: function () {
        swiperSecond.update();
      },
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  var swiper4 = new Swiper(".slides-news-schools", {
    allowTouchMove: true,
    preventClicks: true,
    slidesPerColumn: 1,
    spaceBetween: 0,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination-second",
    //   clickable: true,
    // },
    on: {
      resize: function () {
        swiperSecond.update();
      },
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  var galleryThumbs = new Swiper(".gallery-thumbs", {
    // spaceBetween: 15,
    // slidesPerView: 5,
    // freeMode: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      400: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      580: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
  var galleryTop = new Swiper(".gallery-top", {
    spaceBetween: 0,
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  var galleryThumbs2 = new Swiper(".gallery-thumbs2", {
    // spaceBetween: 15,
    // slidesPerView: 5,
    // freeMode: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      280: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
  var galleryTop2 = new Swiper(".gallery-top2", {
    spaceBetween: 0,
    thumbs: {
      swiper: galleryThumbs2,
    },
  });

  // var galleryDesc = new Swiper(".gallery-desc", {
  //   spaceBetween: 0,
  //   thumbs: {
  //     swiper: galleryThumbs,
  //   },
  // });
  // const myCustomSlider = document.querySelectorAll('.slides-item');

  // for( i=0; i< myCustomSlider.length; i++ ) {

  //   myCustomSlider[i].classList.add('slides-item-' + i);

  //   // var slider = new Swiper('.swiper-container-' + i, {
  //   // /* Options */
  //   // });
  //   var slider = new Swiper('.slides-item-' + i, {
  //     allowTouchMove: true,
  //     preventClicks: true,
  //     slidesPerColumn: 1,
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //     keyboard: {
  //       enabled: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     }
  //   });
  // }

  // Range Price

  var parent = document.querySelector(".range-slider");
  if (!parent) return;
  var rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");
  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);
      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }
      numberS[0].value = slide1;
      numberS[1].value = slide2;
    };
  });
  numberS.forEach(function (el) {
    el.oninput = function () {
      var number1 = parseFloat(numberS[0].value),
        number2 = parseFloat(numberS[1].value);
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }
      rangeS[0].value = number1;
      rangeS[1].value = number2;
    };
  });

  var elms = document.querySelectorAll("[id='checkbox']");
  var elmsFor = document.querySelectorAll("[for='checkbox']");
  // console.log(elms)
  // console.log(elmsFor)
  for (var i = 0; i < elms.length; i++) {
    elms[i].id += i + 1;
  }
  for (var i = 0; i < elmsFor.length; i++) {
    elmsFor[i].htmlFor += i + 1;
  }
}
onLoadPage();
