# Reto #Dia 1: OPERACIONES BOOLEANAS
#### Dificultad: Fácil | Publicación: 25/01/25 

La parte más confusa para quienes están comenzando a aprender lógica con JavaScript es la operación de igualdad entre valores. Dependiendo de cómo escribas tu código, JavaScript hará una conversión de tipo a un tipo booleano de manera implícita (automática), y esto afectará a variables que eran Strings, Numbers, Object, etc.

Esto causa algunos comportamientos extraños, como todos estos ejemplos a continuación que retornan true:

console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );

Lo cual no tiene necesariamente mucho sentido.

## Enunciado

```
/*
 * tarea de hoy es reescribir el código a continuación para que imprima la información de manera correcta, que tenga sentido y sin errores:

let numeroUn = 1
let stringUn = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'

if (COMPARAR numeroUn y stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
}

 if (COMPARAR numeroTreinta y stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}

if (COMPARAR numeroDiez y stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}
 */
```
#### Solucion:  **[Aquí](Dia%20%231%20-Operaciones%20Booleanas/day-1.js)**.

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
