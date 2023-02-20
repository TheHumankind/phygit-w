
const products = new Swiper('.swiper-idea', {
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
    breakpoints: {
        768: {
            slidesPerView: 3
        },
        600: {
            slidesPerView: 2
        },
        320: {
            slidesPerView: 1
        }
    }
});

console.log(products);