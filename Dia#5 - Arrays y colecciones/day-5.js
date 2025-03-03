//"Solucion 5/7: Arryas y colecciones
const listaCompras = {
    "Lacteos": [],
    "Frutas": [],
    "Verduras": [],
    "Carnes": [],
    "Pescados": [],
    "Granos": [],
    "Bebidas": [],
};

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function agregarProducto() {
    while (true) {
        let producto = prompt("Ingresa el producto que deseas agregar a la lista de compras (o escribe 'fin' para terminar):").trim();
        producto = producto.charAt(0).toUpperCase() + producto.slice(1).toLocaleLowerCase();
       
        if (producto === 'Fin') {
            break;
        }

        let categoria = prompt(`En qué categoría deseas agregar el producto ${producto}? \nOpciones: ${Object.keys(listaCompras).join(", ")}`).trim();
        categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLocaleLowerCase();
        
        if (listaCompras[categoria]) {
            listaCompras[categoria].push(producto);
            mostrarMensaje(`✅ ${producto} agregado a la categoría ${categoria}.`);
        } else {
            mostrarMensaje(`❌ La categoría ${categoria} no existe. Intenta de nuevo.`);
        }
    }
}

function mostrarListaCompras() {
    let listaCompleta = "Lista de compras:\n\n";
    for (let categoria in listaCompras) {
        listaCompleta += `${categoria}: ${listaCompras[categoria].join(", ") || "Sin productos"}\n`;
    }
    mostrarMensaje(listaCompleta);
}

// Inicia el programa
mostrarMensaje("Bienvenido a la lista de compras.");
agregarProducto();
mostrarListaCompras();