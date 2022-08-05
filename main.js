const navEmail = document.querySelector('.navbar-email');
const desktoMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener("click",toogleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);


function toogleDesktopMenu () {
    desktoMenu.classList.toggle("inactive");
}

function toogleMobileMenu () {
    mobileMenu.classList.toggle("inactive");
    
}