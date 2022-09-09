const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
