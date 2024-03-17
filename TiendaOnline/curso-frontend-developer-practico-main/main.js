const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleDesktopMenu(){
    desktopMenu.classList.toggle( "inactive" );
}

function toggleMovileMenu() {
    mobileMenu.classList.toggle("inactive");
}


navEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMovileMenu);