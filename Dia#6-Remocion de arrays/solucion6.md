# CODIGO DE LA SOLUCIÓN
#### Solucion en :  **[JavaScript --- CLIC AQUI ](day-6.js)**.

## Estructura del Código

1. **Definición de la Lista de Compras**
   - Se utiliza un objeto `listaCompras` con categorías como claves y arrays vacíos como valores para almacenar productos.

2. **Función `mostrarMensaje(mensaje)`**
   - Utiliza `alert()` para mostrar mensajes al usuario.

3. **Función `eliminarProducto()`**
   - Solicita un producto al usuario.
   - Busca en cada categoría y, si lo encuentra, lo elimina.
   - Si no existe, muestra un mensaje de error.

4. **Función `agregarProducto()`**
   - Permite al usuario agregar productos a una categoría específica.
   - Permite escribir 'eliminar' para borrar un producto o 'fin' para terminar.
   - Valida si la categoría ingresada es válida antes de agregar el producto.

5. **Función `mostrarListaCompras()`**
   - Recorre el objeto `listaCompras` y muestra todos los productos organizados por categoría.

6. **Ejecución del Programa**
   - Se da la bienvenida al usuario con un mensaje.
   - Se inicia el proceso de agregar productos.
   - Finalmente, se muestra la lista completa de compras.
