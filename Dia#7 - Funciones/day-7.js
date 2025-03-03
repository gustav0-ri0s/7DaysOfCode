//"Solucion 7/7: Funciones - Calculadora
function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {   
    return a / b;
}

function calcular(operacion) {
    let a = parseFloat(prompt("Ingresa el primer número:"));
    let b = parseFloat(prompt("Ingresa el segundo número:"));
    simbolo = '';
    let resultado = 0;
    switch (operacion) {
        case "suma":
        case "sumar":
            resultado = sumar(a, b);
            simbolo = '+';
            break;
        case "resta":
        case "restar":
            resultado = restar(a, b);
            simbolo = '-';
            break;
        case "multiplicación":
        case "multiplicacion":
        case "multiplicar":
            resultado = multiplicar(a, b);
            simbolo = '*';
            break;
        case "división":
        case "division":
        case "dividir":
            resultado = dividir(a, b);
            simbolo = '/';
            break;
        default:
            mostrarMensaje("❌ Operación no válida.");
            return;
    }
    mostrarMensaje(`✅ El resultado de la ${operacion} de ${a} ${simbolo} ${b} = ${resultado}`);
}

mostrarMensaje("Bienvenido a la Calculadora.");

while (true) {
    let operacion = prompt("Ingresa la operación que deseas realizar: \nsuma \nresta \nmultiplicación  \ndivisión \nsalir").trim().toLowerCase();
    
    if (operacion === "salir") {
    mostrarMensaje("Gracias por usar la Calculadora, hasta la próxima.😊");
    break;
    }
    calcular(operacion);  
}