//Queryselector
const heading = document.querySelector(".header__texto h2"); //0 o 1 Elementos

heading.textContent = "Nuevo Heading";
console.log(heading);

//QueryselectorAll
enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces[0]);
enlaces[0].textContent = "Nuevo texto para enlace";
enlaces[0].classList.add("nueva-clase");
//enlaces[0].classList.remove('navegacion_enlace');

//getelementById
const heading2 = document.getElementById("heading");
console.log(heading2);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement("A");

//Agregar href
nuevoEnlace.href = "nuevo-enlace.html";
//Agregar el texto
nuevoEnlace.textContent = "Un nuevo enlace";
//Agregar la clase
nuevoEnlace.classList.add("navegacion_enlace");
// Agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//Eventos

console.log(1);
window.addEventListener("load", function () {
  //load espera a que el JS y los archivos que dependen del HTML esten listos
  console.log(2);
});

window.onload = function () {
  console.log(3);
};
document.addEventListener("DOMContentLoaded", function () {
  //Solo espera al html pero no el CSS e imagenes
  console.log(4);
});
console.log(5);

window.onscroll = function () {
  console.log("Scrolling...");
};

//Seleccionar elementos y asociarlos un evento
//const btnEnviar = document.querySelector('.boton--primario');
//btnEnviar.addEventListener('click', function(evento) {
//    console.log(evento);
//    evento.preventDefault();
//
//Todo esto sirve para validar un formulario
//
//    console.log('enviando')
//});

//El evento de submit

//Eventos de los inputs y textarea
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("change", function () {
  //No es tiempo real
  console.log("escribiendo...");
});

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

//Evento de submit
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  //Validar formulario
  const { nombre, email, mensaje } = datos;
  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", 'error');
    return; //corta la ejecucion del codigo
  }
  //Crear la otra alerta
  mostrarAlerta("Mensaje enviado correctamente");
  //Enviar formulario

  console.log("Enviando formulario");
});

function leerTexto(e) {
  //console.log(e.target.value);

  datos[e.target.id] = e.target.value;

  //    console.log(e.target);
  //    console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if( error ) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
      }, 3000);
}
