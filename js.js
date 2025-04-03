const booton = document.getElementById("boton");

booton.addEventListener("click", function (){
    alert ("Datos enviados");
} );

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
event.preventDefault();

const nombre = document.getElementById("nombre").value;
const telefono = document.getElementById("telefono").value;

console.log("nombre", nombre);
console.log("telefono", telefono);
});



