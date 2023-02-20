const burgerItem = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
const headerNavItems = document.querySelectorAll('.close');

burgerItem.addEventListener('click', () => {
    burgerItem.classList.toggle('burger-cross')
    navMenu.classList.toggle('header-on');
})

headerNavItems.forEach((e) => {
    e.addEventListener('click', () => {
        burgerItem.classList.remove('burger-cross')
        navMenu.classList.remove('header-on');
    })
})