const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    767: {
      slidesPerView: 4.1,
      spaceBetween: 40,
    }
  },
});