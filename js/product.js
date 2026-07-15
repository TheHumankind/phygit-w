const products = new Swiper('.swiper-idea', {
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
        loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
    delay: 3000,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }, 
    }
});

console.log(products);