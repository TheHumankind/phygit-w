const sliderOne = document.querySelector('.swiper-instruction-1');
const sliderTwo = document.querySelector('.swiper-instruction-2');
const sliderThree = document.querySelector('.swiper-instruction-3');

const controlOne = document.getElementById('firstSliderBtn');
const controlTwo = document.getElementById('secondSliderBtn');
const controlThree = document.getElementById('thirdSliderBtn');

controlOne.addEventListener('click', () => {
    controlOne.classList.add('active-control');
    controlTwo.classList.remove('active-control');
    controlThree.classList.remove('active-control');

    sliderOne.classList.remove('opacity-0');
    sliderTwo.classList.add('opacity-0');
    sliderThree.classList.add('opacity-0');
});

controlTwo.addEventListener('click', () => {
    controlOne.classList.remove('active-control');
    controlTwo.classList.add('active-control');
    controlThree.classList.remove('active-control');

    sliderOne.classList.add('opacity-0');
    sliderTwo.classList.remove('opacity-0');
    sliderThree.classList.add('opacity-0');
});

controlThree.addEventListener('click', () => {
    controlOne.classList.remove('active-control');
    controlTwo.classList.remove('active-control');
    controlThree.classList.add('active-control');

    sliderOne.classList.add('opacity-0');
    sliderTwo.classList.add('opacity-0');
    sliderThree.classList.remove('opacity-0');
});


const instructionOne = new Swiper('.swiper-instruction-1', {
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
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
});

const instructionTwo = new Swiper('.swiper-instruction-2', {
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
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
});

const instructionThree = new Swiper('.swiper-instruction-3', {
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
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
});

const compatibilityItems = document.querySelectorAll('.compatibility-list-item');
const compatibilitySublist = document.querySelectorAll('.compatibility-sublist');
const compatibilityPlusItems = document.querySelectorAll('.plus');

let currentOpenedItem = compatibilityItems[0];
let currentMinus = compatibilityPlusItems[0];

compatibilityItems.forEach((e, i) => {
    e.addEventListener('click', () => {
        if (compatibilitySublist[i] === currentOpenedItem && compatibilitySublist[i].classList.contains('compatibility-list-opened')) {
            currentOpenedItem.classList.remove('compatibility-list-opened');
            currentMinus.classList.remove('minus');
            return;
        }
        currentOpenedItem.classList.remove('compatibility-list-opened');
        currentMinus.classList.remove('minus');
        compatibilitySublist[i].classList.toggle('compatibility-list-opened');
        compatibilityPlusItems[i].classList.toggle('minus');
        currentOpenedItem = compatibilitySublist[i];
        currentMinus = compatibilityPlusItems[i];
    })
});
