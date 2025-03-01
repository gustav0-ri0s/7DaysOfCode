//"Solucion 4/7: Mas loops y randomización"
let intentos = 0;
let maxIntentos = 3;
let numMinimo = 1;
let numMaximo = 10;
let numeroAleatorio = Math.floor(Math.random() * (numMaximo - numMinimo + 1)) + numMinimo;

function limpiarcaja(){
    document.querySelector('#amigo').value='';
}

function bloquearInputYBoton() {
    document.getElementById("amigo").disabled = true;
    document.querySelector(".button-add").disabled = true;
}

function actualizarBoton() {
    document.querySelector(".button-add").textContent = `Intento ${intentos + 1}`;
}

function mostrarMensaje(mensaje, mostrarBoton = false) {
    let listaResultados = document.getElementById("resultado");
    listaResultados.innerHTML = `<li>${mensaje}</li>`; // Reemplaza el contenido en lugar de agregar nuevos elementos

    if (mostrarBoton) {
        let contenedorBoton = document.createElement("div");
        contenedorBoton.classList.add("button-container");

        let botonReinicio = document.createElement("button");
        botonReinicio.textContent = "Jugar de nuevo";
        botonReinicio.classList.add("button-restart");
        botonReinicio.id = "btn-reiniciar";
        botonReinicio.addEventListener("click", reiniciarJuego);

        contenedorBoton.appendChild(botonReinicio);
        listaResultados.appendChild(contenedorBoton);
    }
}

function adivinarNumero() {


    let inputNumero = document.getElementById("amigo");
    let numeroUsuario = parseInt(inputNumero.value);

     // Validar si es un número
     if (isNaN(numeroUsuario) || numeroUsuario < numMinimo || numeroUsuario > numMaximo) {
        mostrarMensaje(`⚠️ Por favor, ingresa un número válido, entre ${numMinimo} y ${numMaximo}.`);
        limpiarcaja();
        return;
    }

    intentos++;
    actualizarBoton();

   // Comprobar si el usuario adivinó el número
   if (numeroUsuario === numeroAleatorio) {
    mostrarMensaje(`🎉¡Felicidades! Adivinaste el número en ${intentos} intento${intentos > 1 ? 's' : ''}.`,true);
    bloquearInputYBoton();
    } else {
        if (intentos < maxIntentos) {
            let mensaje = numeroUsuario < numeroAleatorio ? "El número es mayor." : "El número es menor.";
            mostrarMensaje(`❌ ¡Fallaste! ${mensaje} Te quedan ${maxIntentos - intentos} intento${(maxIntentos - intentos)==1 ? '' : 's'}.`);
            limpiarcaja();
        } else {
            mostrarMensaje(`❌ ¡Fallaste! El número era ${numeroAleatorio}.`,true);
            bloquearInputYBoton();
        }
    }
    
}

function reiniciarJuego() {
    intentos = 0;
    numeroAleatorio = Math.floor(Math.random() * (numMaximo - numMinimo + 1)) + numMinimo;
    actualizarBoton();
    limpiarcaja();
    mostrarMensaje("");
    document.getElementById("amigo").disabled = false;
    document.querySelector(".button-add").disabled = false;
}


document.getElementById("section-title").textContent = `Tienes ${maxIntentos} intentos para adivinar el número entre ${numMinimo} y ${numMaximo}.`;
actualizarBoton();