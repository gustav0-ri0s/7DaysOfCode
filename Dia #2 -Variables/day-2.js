//"Solucion 2/7: Variables";
let nombre = prompt("¿Cuál es tu nombre?");
let age = prompt("¿Cuántos años tienes?");
let language = prompt("¿Qué lenguaje de programación estás estudiando?");
let apreciacion;

function sobreGustos() {
    apreciacion = prompt(`¿Te gusta estudiar ${language}? Responde con el número 1 para SÍ o 2 para NO.`);

    if(apreciacion == 1){
    alert(`¡Muy bien! Sigue estudiando ${language} y tendrás mucho éxito. !`);
    } else if(apreciacion == 2){
        alert(`Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`);
    } else {
        alert(`No entiendo tu respuesta. Por favor, vuelve a intentarlo.`);
        sobreGustos();
    }
}

alert(`Hola, ${nombre}, tienes ${age} años y ya estás aprendiendo ${language}!.`);
sobreGustos();




