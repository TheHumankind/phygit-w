export class standartCarousel {

    constructor(buttonNext, buttonPrev, scrollElement, scrollElementsContainer, elementsClassName) {
        
        this.next = document.getElementById(buttonNext);
        this.prev = document.getElementById(buttonPrev);
        this.scrollElement = document.getElementById(scrollElement);
        this.elementsList = [...document.querySelectorAll(`.${elementsClassName}`)];
        this.elementsListContainer = document.getElementById(scrollElementsContainer);
        this.next.addEventListener('click', this.bindNextEvent);
        this.prev.addEventListener('click', this.bindPrevEvent);
    }

    bindNextEvent = () => {
        this.scrollElement.scrollLeft += 299;
        if (this.scrollElement.scrollWidth - this.scrollElement.scrollLeft === this.scrollElement.offsetWidth) {
            let elBuffer = this.elementsList.shift();
            let clone = elBuffer.cloneNode(true);
            this.elementsListContainer.appendChild(clone);
            this.scrollElement.scrollLeft += 299;
            this.elementsList.push(clone);
            setTimeout(() => {
                this.elementsListContainer.removeChild(elBuffer);
            }, 305)
        } 
    }

    bindPrevEvent = () => {
        this.scrollElement.scrollLeft -= 299;
        if (this.scrollElement.scrollLeft === 0) {
            this.scrollElement.scrollLeft += 299;
            let elBuffer = this.elementsList.pop();
            let clone = elBuffer.cloneNode(true);
            this.elementsListContainer.insertBefore(clone, this.elementsList[0]);
            this.scrollElement.scrollLeft -= 299;
            this.elementsList.unshift(clone);
            setTimeout(() => {
                this.elementsListContainer.removeChild(elBuffer);
            }, 305)
        } 
    }
}