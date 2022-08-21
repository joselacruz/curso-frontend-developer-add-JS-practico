var array = localStorage.getItem("myArray");
array = JSON.parse(array);

const mediaQuery = window.matchMedia('(max-width: 500px)');
const navEmail = document.querySelector(".navbar-email");
navEmail.textContent = array[0].email;
const desktoMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
let countCarts = 0;
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#product-detail");
const cardsContainer = document.querySelector(".cards-container");
const signOut = document.querySelector("#signOut");
const counCart = document.querySelector("#counCart");
counCart.style.opacity = "0";
const myOrdens = document.querySelector("#my-ordens");
signOut.addEventListener("click", () => {
  event.preventDefault();
  window.location.href = "./clase3.html";
});

const clickMyAccount = document.querySelector("#clickAccount");
clickMyAccount.addEventListener("click", () => {
  event.preventDefault();
  window.location.href = "./clase5.html";
});

navEmail.addEventListener("click", toogleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);
menuCarritoIcon.addEventListener("mouseover", () => {
  if(countCarts > 0 ) {
    menuCarritoIcon.style.cursor= "pointer";
  }
  else{
    menuCarritoIcon.style.cursor= "auto";
  }
})

function toogleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktoMenu.classList.toggle("inactive");
}

function toogleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
  closeProductDetailAside();
}

function toogleCarritoAside() {
  
  if (isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
   
  }

  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktoMenu.classList.add("inactive");
  }
  if(countCarts > 0) {
    shoppingCartContainer.classList.toggle("inactive");
    cartMovileAndClickCart();
  }

  
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  quanty: 0,
});
productList.push({
  name: "Pantalla",
  price: 220,
  imagen:
    "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  quanty: 0,
});

productList.push({
  name: "Compu",
  price: 620,
  imagen: "https://m.media-amazon.com/images/I/41vgFr1PFML._AC_SX425_.jpg",
  quanty: 0,
});

function renderProducts(productList) {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.imagen);
    img.addEventListener("click", openProductDetailAside);

    const prodcutInfo = document.createElement("div");
    prodcutInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;

    const productName = document.createElement("p");
    productName.textContent = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productImgCart.setAttribute("id", "item" + product.name);
    productImgCart.addEventListener("click", () => {
      counCart.style.opacity = "1";
      countCarts = ++ countCarts;
      counCart.textContent = countCarts;
      productImgCart.classList.add("animate");
      if (productImgCart.classList.contains("animate")) {
        function stopAnimate() {
          productImgCart.classList.remove("animate");
        }
        setTimeout(stopAnimate, 300);
      }

      if (productImgCart.attributes.id.value == "itemCompu") {
        productList[2].quanty = productList[2].quanty + 1;
      }

      if (productImgCart.attributes.id.value == "itemPantalla") {
        productList[1].quanty = productList[1].quanty + 1;
      }
      if (productImgCart.attributes.id.value == "itemBike") {
        productList[0].quanty = productList[0].quanty + 1;
      }
      
        writeElementsCart();
   
    
    });

    productInfoFigure.appendChild(productImgCart);

    prodcutInfo.appendChild(productInfoDiv);
    prodcutInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(prodcutInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

myOrdens.addEventListener("click", () => {
  event.preventDefault();
  window.location.href = "./clase9.html";
});


const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
const isDesktopMenuClosed = desktoMenu.classList.contains("inactive");
function writeElementsCart() {
    shoppingCartContainer.innerHTML = "";
  
    const divHead = document.createElement("div");
    const imgDivHead = document.createElement("img");
    divHead.classList.add("title-container");
    imgDivHead.setAttribute("src", "./icons/flechita.svg");
    const pDivHead = document.createElement("p");
    pDivHead.textContent = "My order";
    pDivHead.classList.add("title");
    divHead.append(imgDivHead, pDivHead);
    shoppingCartContainer.appendChild(divHead);
    for (product of productList) {
        
      if (product.quanty > 0) {
        const myOrderContainer = document.createElement("div");
        myOrderContainer.classList.add("my-order-content");
  
        const shoppingCart = document.createElement("div");
        shoppingCart.classList.add("shopping-cart");
        const figureShoppingCart = document.createElement("figure");
        const imgFigure = document.createElement("img");
        imgFigure.setAttribute("src", product.imagen);
        figureShoppingCart.appendChild(imgFigure);
        const shoppingCartTitle = document.createElement("p");
        shoppingCartTitle.textContent = `${product.quanty} ${product.name}`;
        const shoppingCartPrice = document.createElement("p");
        shoppingCartPrice.textContent = product.quanty * product.price;
        const shoppingCartClose = document.createElement("img");
        shoppingCartClose.setAttribute("src", "./icons/icon_close.png");
        myOrderContainer.appendChild(shoppingCart);
        shoppingCart.append(
          figureShoppingCart,
          shoppingCartTitle,
          shoppingCartPrice,
          shoppingCartClose
        );
  
        shoppingCartContainer.appendChild(myOrderContainer);
        shoppingCartClose.addEventListener("click", () => {
          myOrderContainer.style.display = "none";
          let select = shoppingCart.childNodes[1].textContent.split(" ");
          //
          counCart.textContent =
            parseInt(counCart.textContent) - parseInt(select[0]);
           
  
          if (parseInt(counCart.textContent) < 1) {
            counCart.style.opacity = "0";
            countCarts = 0;
            counCart.textContent = countCarts;

  
            shoppingCartContainer.classList.add("inactive");
          }
          //Restando al  Carrito
          select = select[1];
          if (select == "Bike") {
            productList[0].quanty = 0;
          }
          if (select == "Pantalla") {
            productList[1].quanty = 0;
          }
          if (select == "Compu") {
            productList[2].quanty = 0;
          }
        });
      }
    }
    const botonCheckout = document.createElement("button");
    botonCheckout.classList.add("primary-button");
    botonCheckout.textContent = "Checkout";
    shoppingCartContainer.appendChild(botonCheckout);
    console.log(countCarts);
  }

function cartMovileAndClickCart () {
  if (mediaQuery.matches) {
    
   }

}