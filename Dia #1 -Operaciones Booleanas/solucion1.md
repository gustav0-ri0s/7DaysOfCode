# CODIGO DE LA SOLUCIÓN
#### Solucion en :  **[JavaScript --- CLIC AQUI ](day-1.js)**.

# Explicación de la solución

## ✅ Uso de una función
Se creó `compararValores()` para evitar repetir código y hacer el programa más modular.  
En lugar de escribir múltiples estructuras `if-else`, la función encapsula la lógica de comparación y permite reutilizarla con diferentes valores.

## ✅ Parámetros de entrada
La función recibe:
- **`nombre1` y `nombre2`**: Cadenas que representan los nombres de las variables.
- **`valor1` y `valor2`**: Los valores a comparar.

Esto permite que los mensajes en la consola sean más descriptivos y fáciles de entender.

## ✅ Estructura condicional
Se utilizan tres niveles de comparación:

1. **`===` (Comparación estricta)**  
   - Evalúa si los valores son iguales **y** del mismo tipo.  
   - Ejemplo: `10 === 10` → ✅ **Verdadero**  
   - Ejemplo: `10 === "10"` → ❌ **Falso**  

2. **`==` (Comparación flexible)**  
   - Evalúa si los valores son iguales, **sin importar el tipo**.  
   - Ejemplo: `10 == "10"` → ✅ **Verdadero**  
   - Ejemplo: `10 == 5` → ❌ **Falso**  

3. **Caso contrario (`else`)**  
   - Si los valores no son iguales en ninguna de las comparaciones anteriores, significa que son completamente diferentes.

## ✅ Mensajes dinámicos
Se utilizan **template literals (`${}`)** en los mensajes de la consola para hacerlos más claros y dinámicos.  
