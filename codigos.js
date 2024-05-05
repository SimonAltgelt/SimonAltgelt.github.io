var texto = "Hola soy Simon! Soy estudiante de la carrera Tecnicatura en programacion en la UTN. Este es mi portfolio, si tenes alguna duda... \n\n¡Contactame!";

var i = 0;

// agregar texto letra por letra
function escribirTexto() {
    if (i < texto.length) {
        document.getElementById('texto').innerHTML += texto.charAt(i);
        i++;
        if (i % 44 === 0) {
            // Agrega un salto de línea
            document.getElementById('texto').innerHTML += "<br>";
        }
        setTimeout(escribirTexto, 30); 
    }
}

window.onload = escribirTexto;

// scrolleo hasta cierto punto de la pagina cuando apreto Mis Proyectos
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        var windowHeight = window.innerHeight; 
        var offset = element.offsetTop; 
        var scrollToPosition = offset - windowHeight; 
        window.scrollTo({
            top: scrollToPosition,
            behavior: "smooth" 
        });
    }
}

// obtengo el contenedor de conocimientos
var conocimientos = document.getElementById("conocimientos");

function scrollToTop() {
    window.scrollTo({
        top: 0  ,
        behavior: 'smooth'
    });
}