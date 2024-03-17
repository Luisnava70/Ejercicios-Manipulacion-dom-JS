const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

function toggleDesktopMenu(){
    const isAsideOpen = !aside.classList.contains('inactive');
    if(isAsideOpen){
        aside.classList.add( 'inactive' );
        desktopMenu.classList.toggle("inactive");
    }else{
        desktopMenu.classList.toggle("inactive");
    }
    /* desktopMenu.classList.toggle( "inactive" ); */
}

function toggleMovileMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');
    if(isAsideOpen){
        aside.classList.add( 'inactive' );
        mobileMenu.classList.toggle("inactive");
    }else{
        mobileMenu.classList.toggle("inactive");
    }
    
}

function toggleCarritoAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive'); 
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if(isMobileMenuOpen || isDesktopMenuOpen){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        aside.classList.toggle("inactive");
    }else{
        aside.classList.toggle("inactive");
    }

    /*  */
}

navEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMovileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);