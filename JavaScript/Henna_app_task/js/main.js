document.querySelectorAll(".swiper").forEach((slider) => {
  new Swiper(slider, {
    slidesPerView: 1.5,
    spaceBetween: 10,
    grabCursor: true,
    breakpoints: {
      576: { slidesPerView: 2.5, spaceBetween: 12 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 5, spaceBetween: 16 },
    },
  });
});
