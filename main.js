const navEmail = document.querySelector('.navbar-email');
const desktoMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener("click",toogleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside)


function toogleDesktopMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
desktoMenu.classList.toggle('inactive');
}


function toogleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
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
   shoppingCartContainer.classList.toggle("inactive");
    
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Pantalla',
    price: 220,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

productList.push({
    name: 'Compu',
    price: 620,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});


function renderProducts (arr) {
    for ( product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.imagen);
    
        const prodcutInfo = document.createElement('div');
        prodcutInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;
        
        const productName = document.createElement('p');
        productName.textContent = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
       const productInfoFigure = document.createElement('figure');
       const productImgCart = document.createElement('img');
       productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
       productInfoFigure.appendChild(productImgCart);
    
       prodcutInfo.appendChild(productInfoDiv);
       prodcutInfo.appendChild(productInfoFigure);
    
       productCard.appendChild(img);
       productCard.appendChild(prodcutInfo);
    
       cardsContainer.appendChild(productCard);
    }

}

renderProducts(productList);