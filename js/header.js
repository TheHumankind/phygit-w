const burgerItem = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burgerItem.addEventListener('click', () => {
    burgerItem.classList.toggle('burger-cross')
    navMenu.classList.toggle('header-on');
})