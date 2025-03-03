//"Solucion 6/7: Remocion de arrays
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

function eliminarProducto() {  
    let producto = prompt("Ingresa el producto que deseas eliminar de la lista de compras:").trim();
    producto = producto.charAt(0).toUpperCase() + producto.slice(1).toLocaleLowerCase();
    let eliminado = false;
    for (let categoria in listaCompras) {
        let index = listaCompras[categoria].indexOf(producto);
        if (index !== -1) {
            listaCompras[categoria].splice(index, 1);
            mostrarMensaje(`✅ ${producto} eliminado de la categoría ${categoria}.`);
            eliminado = true;
            break;
        }
    }
    if (!eliminado) {
        mostrarMensaje(`❌ ${producto} no se encontró en la lista de compras.`);
    }
}

function agregarProducto() {
    while (true) {
        let producto = prompt("Ingresa el producto que deseas agregar a la lista de compras, escribe 'eliminar' para borrar un producto, o 'fin' para terminar:").trim();

        producto = producto.charAt(0).toUpperCase() + producto.slice(1).toLocaleLowerCase();
       
        if (producto === 'Fin') {
            break;
        }

        if (producto === 'Eliminar') {
            eliminarProducto();
            continue;
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