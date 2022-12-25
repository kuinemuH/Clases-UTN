//Ejercicio 1

let guardoNombre = prompt('ingrese su nombre')
console.log('tu nombre es', guardoNombre)

//Ejercicio 2
let guardoEdad = parseInt (prompt('ingrese su edad'))
console.log('tu edad es', guardoEdad)
 
//Ejercicio 3

let tieneHijos = true
 if (tieneHijos) {
    true
 }else{
    false
  }

//Ejercicio 4

let salario = parseInt(prompt('ingrese salario'))
console.log('tu salario anual es', salario*12)

//Ejercicio 5

let edad = parseInt(prompt('ingrese su edad'))
if (edad>=18) {
    console.log('Sos mayor de edad')
}else{
    console.log('no sos mayor de edad')
 }

 //Ejercicio 6

 // let tieneHijos = true
 // if (tieneHijos) {
 //   true
 // }7else{
 //   false
//}

 //Ejercicio 7

 let genero = prompt('ingrese su genero')
 if (genero == "mujer" && "Mujer" && "MUJER") {
    console.log('Es Mujer')
 }else {
    if (genero == "hombre" && "Hombre" && "HOMBRE") {
        console.log('es Hombre')
    }     
 }

 //Ejercicio 8

 let ladocuadrado = parseInt(prompt('ingrese lado del cuadrado'))
 console.log('el perimetro es:', ladocuadrado*4) 

 //Ejercicio 9
 let numero1 = parseInt(prompt('ingrese numero1'))

 let numero2 = parseInt(prompt('ingrese numero2'))
 
 let numero3 = parseInt(prompt('ingrese numero3'))
 
 let numero4 = parseInt(prompt('ingrese numero4'))

 console.log('la suma de los proimeros es:', numero1+numero2, 'la multiplicacion de los dos ultimos es:', numero3*numero4)

//Ejercicio 10

let numero5 = prompt('ingrese un numero entre 1 y 99')
if (numero5>=10) {
    console.log('El numero ingresado tiene dos digitos')
    }else{ 
        console.log('El numero ingresado NO es de dos digitos')
    }

    //Ejercicio 11

let numero6 = parseInt (prompt('ingrese un numero entero'))
if (numero6>=1) {
    console.log('El numero ingresado es positivo')
    }else {
        if (numero6<0) {
        console.log('El es negativo')
        } else
           }