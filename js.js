const booton = document.getElementById("boton");

booton.addEventListener("click", function (){
    event.preventDefault();
    if (nombre.value.trim() === "" || telefono.value.trim() === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Datos enviados");
        document.getElementById("formulario").submit(); // Envía el formulario si está completo
    }
} );

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
event.preventDefault();

const nombre = document.getElementById("nombre").value;
const telefono = document.getElementById("telefono").value;

console.log("nombre", nombre);
console.log("telefono", telefono);
});



