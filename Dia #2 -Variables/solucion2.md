# CODIGO DE LA SOLUCIÓN
#### Solucion en :  **[JavaScript --- CLIC AQUI ](day-2.js)**.

# Explicación de la solución

## ✅ Uso de variables
Se crearon tres variables utilizando `let` para almacenar las respuestas del usuario:
- **`nombre`**: Guarda el nombre del usuario.
- **`age`**: Almacena la edad ingresada.
- **`language`**: Contiene el lenguaje de programación que está aprendiendo.

Cada una de estas variables captura los valores ingresados por el usuario mediante `prompt()`.

## ✅ Uso de una función
Se creó la función `sobreGustos()` para manejar la segunda parte del programa, donde se pregunta si al usuario le gusta el lenguaje ingresado.

Esta función se ejecuta después de mostrar el mensaje inicial y hace uso de una estructura condicional `if-else` para determinar la respuesta del usuario.

## ✅ Estructura condicional
En `sobreGustos()`, se evalúa la respuesta del usuario con una estructura `if-else`:

1. Si el usuario responde `1` (SÍ):
   - Se muestra un mensaje de motivación.
2. Si el usuario responde `2` (NO):
   - Se muestra un mensaje invitando a probar otros lenguajes.
3. Si el usuario ingresa un valor no válido:
   - Se muestra un mensaje de error y se llama nuevamente a la función `sobreGustos()` para repetir la pregunta.

Esta técnica de recursividad garantiza que el usuario ingrese una respuesta válida.

## ✅ Uso de `alert()`
Se utilizaron `alert()` para mostrar mensajes al usuario de manera clara y organizada, utilizando **template literals (`${}`)** para incluir las respuestas dentro del texto dinámico.

## ✅ Flujo del programa
1. Se capturan los datos del usuario con `prompt()`.
2. Se muestra el mensaje inicial con `alert()`.
3. Se llama a `sobreGustos()` para preguntar si le gusta el lenguaje.
4. Dependiendo de la respuesta, el programa muestra un mensaje motivador o una sugerencia.

