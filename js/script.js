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
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    }
});

const partnersSlider = new Swiper('.partners-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    slidesPerView: 6,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    }
});

// window on scroll
