import Glide from "@glidejs/glide";


var mainCarousel = new Glide("#main-carousel", {
    perView: 1,
    autoplay: 2000,
    animationDuration: 600,
    hoverpause: true,
});

mainCarousel.mount();
