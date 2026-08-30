const boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
    alert("The search bar isn't functional, it's for visual purposes only.!");
});


const facebook = document.getElementById("clickFacebook");
facebook.addEventListener("click", function() {
    alert("I only have profile links for LinkedIn and GitHub!");
});


const instagram = document.getElementById("clickInstagram");
instagram.addEventListener("click", function() {
    alert("I only have profile links for LinkedIn and GitHub!");
});


const x = document.getElementById("clickX");
x.addEventListener("click", function() {
    alert("I only have profile links for LinkedIn and GitHub!");
});

const main = document.getElementById("main")
const fondoPantalla = document.getElementById("fondoPantalla");

main.addEventListener("click", function() {
    fondoPantalla.classList.toggle("activo")
});

main.addEventListener("click", function() {
    main.classList.toggle("contenedorSecundario")
});


