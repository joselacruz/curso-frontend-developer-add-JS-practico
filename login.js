let botonSignUp = document.querySelector('.signup-button');
let createButton = document.querySelector('.login-button');
const nameUser = document.querySelector('#name');
const emailUser = document.querySelector('#email');
const passwordUser = document.querySelector('#password');
const formulario = document.querySelector('#form');
const botonStartlogin = document.querySelector('#star-login');
const formularioLogin = document.querySelector('#formLogin');



createButton.addEventListener("click", createAcountProcess);


var userapp = [];
function createAcountProcess (event) {
formulario.addEventListener("submit", submitAcountProcess);
nameUserCheck(nameUser);
emailUserCheck(emailUser);
nameUserCheck(passwordUser);

}


function submitAcountProcess () {
    userapp.push({name: nameUser.value, email:emailUser.value, password: passwordUser.value,});
    localStorage.setItem('myArray', JSON.stringify(userapp));
    event.preventDefault();
    window.location.href = "./clase2.html"
    
  
}

botonSignUp.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "./clase4.html";

} );





function nameUserCheck (name) {
    if(name.value.length == '') {
        name.setCustomValidity("El Campo no puede estar en blanco");
    }

    else if (name.value.length <= 4) {
        name.setCustomValidity("debe tener mas de 4 caracteres");
    }  
  
    else {
        name.setCustomValidity("");
    }
}

function emailUserCheck (name) {
    if(name.value == '') {
     name.setCustomValidity("El Campo no puede estar en blanco");
    }
    else if (name.value.indexOf('@')) {
        name.setCustomValidity("El Correo debe contener @");  
    }
    if (name.value.includes("@")) {
        name.setCustomValidity("");
    }
}

function obtener () {
    var array = localStorage.getItem('myArray');
    array = JSON.parse(array);
   

    for(element of array) 
    {
        if(emailUser.value == element.email&& passwordUser.value == element.password) {
            window.location.href = "./index.html";
        }
      else{
        alert("datos incorrectos");
      }
    }
    event.preventDefault();
    localStorage.setItem('myArrayFinal', JSON.stringify(array));
   

}



botonStartlogin.addEventListener("click", iniciarLogin);

function iniciarLogin() {
    event.preventDefault();
    obtener();
    
}






