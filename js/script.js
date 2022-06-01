const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 15,
  

  breakpoints: {
    767: {
      slidesPerView: 4.1,
      spaceBetween: 40,
      autoplay: {
       delay: 3000,
      },
    },
  },
});
