# <p align="center">![7DaysOfCode](https://github.com/user-attachments/assets/f6b05689-a7f2-436b-a3bc-194a2f6a92ab)</p><p align="center">![unnamed (1)](https://github.com/user-attachments/assets/5e1b1971-7ee9-4ef1-af15-e84ffec3b10b)</p>
# Dia 1: OPERACIONES BOOLEANAS
#### Dificultad: Fácil | Publicación: 25/01/25 

La parte más confusa para quienes están comenzando a aprender lógica con JavaScript es la operación de igualdad entre valores. Dependiendo de cómo escribas tu código, JavaScript hará una conversión de tipo a un tipo booleano de manera implícita (automática), y esto afectará a variables que eran Strings, Numbers, Object, etc.

Esto causa algunos comportamientos extraños, como todos estos ejemplos a continuación que retornan true:
```
- console.log( false == '0' );
- console.log( null == undefined );
- console.log( " \t\r\n" == 0 );
- console.log( ' ' == 0 );
```
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
### Solucion:  **[Aquí](solucion1.md)**.

