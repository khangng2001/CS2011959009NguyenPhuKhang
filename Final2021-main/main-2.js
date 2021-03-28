$(".responsive").slick({
  centerMode: true,
  dots: true,
  infinite: true,
  centerPadding: "80px",
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
        infinite: true,
        dots: true,
      },
    },
  ],
});
