# CODIGO DE LA SOLUCIÓN
#### Solucion en :  **[JavaScript --- CLIC AQUI ](day-7.js)**.

## Explicación de la Solución
El programa implementa una calculadora interactiva con las siguientes funciones:

1. **Funciones Matemáticas**: Se crean cuatro funciones (`sumar`, `restar`, `multiplicar`, `dividir`), cada una encargada de realizar una operación específica y devolver el resultado.
2. **Función `calcular(operacion)`**: 
   - Recibe como parámetro el tipo de operación.
   - Solicita al usuario dos números.
   - Llama a la función correspondiente según la operación ingresada.
   - Muestra el resultado de la operación en pantalla.
3. **Estructura de Control**:
   - Un bucle `while` mantiene el programa en ejecución hasta que el usuario escriba "salir".
   - Se solicita al usuario que ingrese una operación.
   - Se ejecuta la operación seleccionada o se muestra un mensaje de error si la opción no es válida.
4. **Mensajes Interactivos**:
   - Se usa `alert()` para mostrar mensajes al usuario, haciendo el programa más intuitivo.
   - Si el usuario elige "salir", se muestra un mensaje de despedida y el bucle se detiene.
