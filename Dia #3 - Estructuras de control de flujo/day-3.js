//"Solucion 3/7: Estructuras de control de flujo";
let nombre = prompt("Hola, ¿Cuál es tu nombre?");

const backendOpciones = ["backend", "back-end", "back end", "BackEnd", "Back-End", "Back End"];
const frontendOpciones = ["frontend", "front-end", "front end", "FrontEnd", "Front-End", "Front End"];

let area = prompt("¿Quieres seguir en Frontend o Backend?").trim(); // Elimina espacios extra

if (frontendOpciones.includes(area.toLowerCase())) {
    alert(`¡Genial! El Frontend es una de las áreas más demandadas en la actualidad. ¡Sigue adelante!`);
} else if (backendOpciones.includes(area.toLowerCase())) {
    alert(`¡Excelente elección! El Backend es una de las áreas más demandadas en la actualidad. ¡Sigue adelante!`);
} else {
    alert("Por favor, elige una opción válida (Frontend o Backend).");
}
