
document.addEventListener('DOMContentLoaded', () => {
    bindHeaderEvents();
});


function bindHeaderEvents() {
    let dropdownArray = document.querySelectorAll('.dropdown');

    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('headerList');
    burgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    const navMenuItems = document.querySelectorAll('.header-nav-item');

    navMenuItems.forEach((parentEl) => {
        let dropdown = parentEl.querySelector('.dropdown')
        if (dropdown) {
            parentEl.addEventListener('click', () => {
                dropdownArray.forEach((arrayEl) => {
                    if (arrayEl !== dropdown) {
                        arrayEl.classList.remove('active');
                    }
                });
                dropdown.classList.toggle('active');
            })
            
        }
    });
}
