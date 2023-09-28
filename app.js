const nav_menu = document.getElementById('nav-menu');
const nav_mobile_menu = document.getElementById('nav-mobile-route');

// initialization
nav_mobile_menu.classList.add('show-item');
let width = window.innerWidth;

nav_menu.addEventListener('click', () => {
    nav_mobile_menu.classList.toggle('show-item');
});

const watchScreenWidth = () => {
    if(width > 430) {
        nav_mobile_menu.style.display = 'none';
    } else {
        nav_mobile_menu.classList.add('show-item');
    }
}


window.addEventListener('resize', watchScreenWidth);
