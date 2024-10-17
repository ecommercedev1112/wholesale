
  const silajeetswipernew = new Swiper('.silajeetswiper--{{ section.id }}', {
   autoHeight: true,
   speed: 4000,
   loop: true,
   autoplay: {
     delay: 0,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      580: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      769: {
        slidesPerView: 2.75,
        spaceBetween: 10,
      },
      965: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1020: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });