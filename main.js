const navEmail = document.querySelector('.navbar-email');
const desktoMenu = document.querySelector('.desktop-menu');
navEmail.addEventListener("click",toogleDesktopMenu);

function toogleDesktopMenu () {
    desktoMenu.classList.toggle("inactive");
}