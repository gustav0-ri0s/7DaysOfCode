//"Solucion 1/7: Operaciones Booleanas";

// Definimos una función que compara dos valores y muestra un mensaje en la consola con el resultado de la comparación.
function compararValores (nombre1, valor1, nombre2, valor2) {
  if (valor1 === valor2) {
    console.log(`Los valores de ${nombre1} y ${nombre2} tiene el mismo valor y tipo`);
  } else if (valor1 == valor2) {
    console.log(`Los valores de ${nombre1} y ${nombre2} son iguales, pero de diferente tipo`);
  } else {
    console.log(`Los valores de ${nombre1} y ${nombre2} no tienen el mismo valor`);
  }
}

// Ejemplo de uso
let numeroUn = 1;
let stringUn = '1';

let numeroTreinta = 30;
let stringTreinta = '30';

let numeroDiez = 10;
let stringDiez = '10';

// Llamamos a la función compararValores para cada par de variables.
// Pasamos los nombres de las variables como cadenas para que aparezcan en los mensajes de consola.
compararValores('numeroUn', numeroUn, 'stringUn', stringUn);
compararValores('numeroTreinta', numeroTreinta, 'stringTreinta', stringTreinta);
compararValores('numeroDiez', numeroDiez, 'stringDiez', stringDiez);