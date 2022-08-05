const navEmail = document.querySelector('.navbar-email');
const desktoMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener("click",toogleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside)


function toogleDesktopMenu () {
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
desktoMenu.classList.toggle('inactive');
}


function toogleMobileMenu () {
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    
}


function toogleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktoMenu.classList.contains('inactive');
  
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
   if (!isDesktopMenuClosed) {
    desktoMenu.classList.add('inactive');
   }
    aside.classList.toggle("inactive");
    
}