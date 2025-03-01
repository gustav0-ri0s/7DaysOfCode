# CODIGO DE LA SOLUCIÓN
#### Solucion en :  **[JavaScript --- CLIC AQUI ](day-4.js)**.

Este es un juego simple donde el usuario debe adivinar un número aleatorio dentro de un rango específico. Se le otorgan tres intentos para hacerlo.

---

## 📜 Explicación del Código

1. **Inicialización de Variables**  
   - `intentos`: Lleva la cuenta de intentos del usuario.  
   - `maxIntentos`: Número máximo de intentos permitidos.  
   - `numMinimo` y `numMaximo`: Definen el rango del número aleatorio.  
   - `numeroAleatorio`: Se genera aleatoriamente en cada partida.  

2. **Funciones Principales**
   - `limpiarcaja()`: Borra el valor del input después de cada intento.  
   - `actualizarBoton()`: Actualiza el texto del botón para mostrar cuántos intentos lleva el usuario.  
   - `mostrarMensaje(mensaje, mostrarBoton)`: Muestra el mensaje en pantalla y agrega el botón de reinicio cuando el juego termina.  
   - `adivinarNumero()`: Comprueba si el número ingresado es correcto o incorrecto y maneja la lógica del juego.  
   - `reiniciarJuego()`: Reinicia el juego y genera un nuevo número aleatorio.  

3. **Flujo del Juego**
   - El usuario ingresa un número y presiona el botón para verificar.  
   - Si acierta, se muestra un mensaje de éxito y la opción de jugar de nuevo.  
   - Si falla, se le informa si el número es mayor o menor y cuántos intentos le quedan.  
   - Si agota sus intentos, se muestra el número correcto y se ofrece reiniciar la partida.  

---

## 📷 Capturas de Pantalla

_Agrega aquí capturas de pantalla del juego en acción._

<div align="center">

<img src="https://github.com/user-attachments/assets/cd7b45bb-77d2-42a7-ab3a-acb890e808f9" alt="Captura 1" width="800">
<img src="https://github.com/user-attachments/assets/1afec382-3eb1-4fb3-99ed-32b50fc689d5" alt="Captura 2" width="400">
<img src="https://github.com/user-attachments/assets/ad551a53-d8ce-4be0-b344-8d981f0d32ab" alt="Captura 3" width="400">
<img src="https://github.com/user-attachments/assets/140b654b-98b3-4a2f-a949-bfbf9c0967ad" alt="Captura 4" width="400">
   
</div>  
---

## 🚀 Cómo Ejecutarlo

Solo abre el archivo HTML que contenga este script en un navegador y comienza a jugar.  
