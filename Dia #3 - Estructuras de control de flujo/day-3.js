//"Solucion 3/7: Estructuras de control de flujo";
let nombre = prompt("Hola, ¿Cuál es tu nombre?");
let tecnologiasAprender = [];
let continuar='ok';

const backendOpciones = ["backend", "back-end", "back end", "BackEnd", "Back-End", "Back End"];
const frontendOpciones = ["frontend", "front-end", "front end", "FrontEnd", "Front-End", "Front End"];
const reactOpciones = ["react", "React"];
const vueOpciones = ["vue", "Vue"];
const cSharpOpciones = ["c#", "C#", "csharp", "CSharp"];
const javaOpciones = ["java", "Java"];
const fullstackOpciones = ["fullstack", "full-stack", "full stack", "FullStack", "Full-Stack", "Full Stack"];
const especializarOpciones = ["especializar", "especialización", "especializacion", "Especializar", "Especialización", "Especializacion"];

let area = prompt("¿Quieres seguir en Frontend o Backend?").trim(); // Elimina espacios extra

while (!frontendOpciones.includes(area.toLowerCase()) && !backendOpciones.includes(area.toLowerCase())) {
    area = prompt("Por favor, elige una opción válida (Frontend o Backend).").trim(); // Sin let aquí
}

if (frontendOpciones.includes(area.toLowerCase())) {
    alert(`¡Genial ${nombre}! El Frontend es una de las áreas más demandadas en la actualidad. ¡Sigue adelante!`);

    let framework = prompt("Elige entre React o Vue:").trim(); // Se declara antes del while

    while (!reactOpciones.includes(framework.toLowerCase()) && !vueOpciones.includes(framework.toLowerCase())) {
        framework = prompt("Por favor, elige una opción válida (React o Vue).").trim(); // Sin let aquí
    }

    if (reactOpciones.includes(framework.toLowerCase())) {
        alert(`¡Excelente elección ${nombre}! React es una de las librerías más populares en la actualidad. ¡Sigue adelante!`);
    } else if (vueOpciones.includes(framework.toLowerCase())) {
        alert(`¡Excelente elección ${nombre}! Vue es una de las librerías más populares en la actualidad. ¡Sigue adelante!`);
    }

   
} else if (backendOpciones.includes(area.toLowerCase())) {
    alert(`¡Excelente elección ${nombre}! El Backend es una de las áreas más demandadas en la actualidad. ¡Sigue adelante!`);

    let lenguaje = prompt("Elije un lenguaje de programacion").trim(); // Se declara antes del while

    while (!cSharpOpciones.includes(lenguaje.toLowerCase()) && !javaOpciones.includes(lenguaje.toLowerCase())) {
        lenguaje = prompt("Por favor, elige una opción válida (C# o Java).").trim(); // Sin let aquí
    }

    if (cSharpOpciones.includes(lenguaje.toLowerCase())) {
        alert(`¡Excelente elección ${nombre}! C# es uno de los lenguajes más populares en la actualidad. ¡Sigue adelante!`);
    } else if (javaOpciones.includes(lenguaje.toLowerCase())) {
        alert(`¡Excelente elección ${nombre}! Java es uno de los lenguajes más populares en la actualidad. ¡Sigue adelante!`);
    }
} 

let caminoATomar = prompt(`¿Qué te gustaría hacer ahora, ${nombre}?\n\n1️⃣ Seguir especializándote en ${area}\n2️⃣ Convertirte en Fullstack\n\nEscribe "especializar" o "fullstack".`).trim().toLowerCase();
while (!especializarOpciones.includes(caminoATomar ) && !fullstackOpciones.includes(caminoATomar)) {
    caminoATomar = prompt(`Por favor, elige una opción válida:\n\n1️⃣ Seguir especializándote en ${area}\n2️⃣ Convertirte en Fullstack\n\nEscribe "especializar" o "fullstack".`).trim().toLowerCase();
}   

if (especializarOpciones.includes(caminoATomar)) {
    alert(`¡Excelente elección ${nombre}! ¡Sigue especializándote en ${area}!`);
} else if (fullstackOpciones.includes(caminoATomar)) { 
    alert(`¡Excelente elección ${nombre}! ¡Conviértete en Fullstack!`);
}
alert(`${nombre}! agrega las tecnologías que te gustaría aprender`);
while(continuar==='ok'){
    let tecnologia = prompt("¿Qué tecnología te gustaría aprender?").trim();
    tecnologiasAprender.push(tecnologia);
    continuar = prompt(`¿Quieres seguir agregando tecnologías? responde "ok" para continuar, otra tecla para terminar`).trim().toLowerCase();
}
alert(`Estas son las tecnologías que te gustaría aprender: ${tecnologiasAprender.join(", ")}`);