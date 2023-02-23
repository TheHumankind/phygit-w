const messagesArr = [
    {
        description: 'Physical products sell themselves with digital personalization',
        imageName: 'slider-image-01.webp',
    },
    {
        description: 'Boost sales via 2-way communication between a brand and end customers',
        imageName: 'slider-image-02.webp',
    },
    {
        description: 'Strengthen your team via swag with digital personalization',
        imageName: 'slider-image-03.webp'
    },
    {
        description: 'Empower your products or services with the emotions of your customers',
        imageName: 'slider-image-04.webp'
    }
]

export class phygitSlider {

    constructor() {
        this.slider = document.getElementById('slider');
        this.controls = document.getElementById('slider-controls-block');
        this.sliderHtmlElements = [...document.querySelectorAll('.slider-bg')];
        this.sliderControlElements = [...document.querySelectorAll('.control')];
        this.currentSlide = 0;
        this.constructSlides();
        
    }

    constructSlides() {
        this.sliderControlElements[0].classList.add('active-control');
        this.sliderControlElements.forEach((cntrlBtn) => {
            cntrlBtn.addEventListener('click', this.controlClickHandler);
        });

    }

    changeSlide() {
        this.changeSlideInterval = setInterval(() => {
           this.sliderControlElements[this.currentSlide].classList.remove('active-control');
           this.sliderHtmlElements[this.currentSlide].classList.add('hidden');
           this.currentSlide = this.currentSlide + 1 > 3 ? 0 : this.currentSlide + 1;
           this.sliderHtmlElements[this.currentSlide].classList.remove('hidden');
           this.sliderControlElements[this.currentSlide].classList.add('active-control');
        }, 10000);
    }

    controlClickHandler = () => {
        clearInterval(this.changeSlideInterval);
        this.sliderControlElements[this.currentSlide].classList.remove('active-control');
        this.sliderHtmlElements[this.currentSlide].classList.add('hidden');
        this.currentSlide = this.sliderControlElements.indexOf(event.target);
        this.sliderControlElements[this.currentSlide].classList.add('active-control');
        this.sliderHtmlElements[this.currentSlide].classList.remove('hidden');
        this.changeSlide();
    }
}