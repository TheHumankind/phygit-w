import { phygitSlider } from "./slider.js";

// slider initialisation

const mainSlider = new phygitSlider();

mainSlider.changeSlide();

const useCasesSlider = new Swiper('.use-cases-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
    delay: 3000,
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        }, 
    }
});

const partnersSlider = new Swiper('.partners-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
    delay: 3000,
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 30,
        }, 
    }
});

const testimonialsSlider = new Swiper('.testimonials-slider', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        0:   { 
            slidesPerView: 1,
            centeredSlides: false,
         },
        600: { 
            slidesPerView: 1,
            centeredSlides: false,
        },
        900: { 
            slidesPerView: 3,
            loopedSlides: 3, 
        },
    },
});
