//declaracion
// let nombre;
// let apellido;
// let nombreCompleto;

// const { log } = require("npmlog");

// //asignacion
// nombre = "a";
// apellido = "xd";
// nombreCompleto = nombre + apellido;


//sumas? xd + constantes?
// let numero1 = 2;
// let numero2 = 5;
// let resultado = numero1 + numero2;
// const PI = 3.1415;


// let nombreIngresado = prompt ("Ingresa tu nombre")
// console.log("mensaje")
// console.log(nombre)
// console.log(nombreIngresado)

// let num1 = parseInt(prompt("ingresa un numero"));
// let num2 = parseInt(prompt("ingresa otro numero"));

// let suma = num1 + num2;

// console.log(suma);


// dia 2

// si (condicion)= {algo}
// asignacion =
// comparacion ==(compara valores) / ===(compara valores y tipo de datos)


// let numeros = 16;

// if (numeros == 16) {
//     console.log("Este bloque se ejecutara");
// }
// if (numeros == 15) {
//     console.log ("Este bloque no se ejecutara");
// }

// let color = prompt("ingresa un color");

// if(color == "Rojo") {
//     console.log("El color que elegiste es Rojo");
// }else{
//     console.log("El color que elegiste NO es Rojo" + "es:" + color);
// }

// let user = prompt("Ingresa tu user")

// if(user== ""){
//     console.log("Campo requerido");
// }else{
//     let pass = prompt("Ingresa tu pass");
//     if(pass == "") {
//         console.log("Campo requerido");
//     }else{
//         console.log("Welcome "+ user);
//     }
// }

// let numeroIngresado= prompt("Ingresa un precio")

// if(numeroIngresado <= 300) {
//     console.log("El precio es menor o igual que 300");
// }else if(numeroIngresado <= 500){
//     console.log("El precio es menor o igual que 500");
// }else if(numeroIngresado <= 750){
//     console.log("El precio es menor o igual que 750");
// }else{
//     console.log("El precio es mayor a 750");
// }

//Variables booleanas
// let valorNumerico = 34;

// let esValido = valorNumerico > 20;


// if(esValido){
//    console.log("La variable esValido es verdadera");
// }else{ 
//    console.log("La variable esValido es falsa");
// }

// let nombre1 = prompt("Ingresa tu nombre");
// let apellido1 = prompt ("Ingresa tu apellido");

// if((nombre1 !="") && (apellido1 !="")){
//     alert("Nombre: "+ nombre1 + "\nApellido: " + apellido1);
// }else{
//     alert("Error: Ingresar Nombre y apellido");
// }

// let color = prompt("ingresa un color");

// if(color == "Rojo" || color == "rojo") {
//    alert("El color que elegiste es Rojo");
// }else{
//    alert("El color que elegiste NO es Rojo " + "es: " + color);
// }

// let usuario = "Thomi"
// let password = "asd"

// let user1 = prompt ("Ingresa tu user")
// let pass1 = prompt ("Ingresa tu pass")

// if(user1 == usuario && pass1 == password){
//     console.log("Welcome " + user1);
// }else{
//     console.log("Algo salio mal, intetalo de nuevo")
// }

// dia 3

//for(desde;hasta; actualizacion){codigo a repetir}

// let ingreso = prompt("ingresa un numero")
// ingreso = parseInt(ingreso);
// let limite = prompt("ingresa hasta donde")
// limite = parseInt(limite)


// if(isNaN(ingreso) || isNaN(limite)){
//     console.log("El valor ingresado no es un numero");
// }else{
//     for (let index = 0; index <= limite; index++) {
//         //codigo
//         let result = ingreso * index;
//         console.log(ingreso + " x " + index + " = " + result);
//     }
// }



// for (let index = 0; index <= 10; index++) {
//     if (index == 6) {
//         break;
//     }
//     console.log(index);
// }


// while 

// let contador = 0;

// while (contador <= 10) {
//     console.log(contador);
//     contador++;
// }

// let ingreso = prompt("Ingresa un producto \nPara salir ingresa Salir");

// while (ingreso != "Salir") {
//     console.log("Ingresaste el producto: " + ingreso);
//     //actualizar para que en algun momento sea falso
//     ingreso = prompt("Ingresa un nuevo producto \nPara salir ingresa Salir");
// }

// do while

// let ingreso = "";

// do {
//     let ingreso = prompt("Ingresa un producto \nPara salir ingresa 0");
//     console.log("Ingresaste el producto: " + ingreso);
// } while (ingreso != "0");

// switch  // if else


// let numero = prompt("Ingrese el numero");

// switch (numero) {
//     case "1":
//         console.log("Ingresaste el numero 1");
//         break;
//     case "2":
//         console.log("Ingresaste el numero 2");
//         break;
//     case "3":
//         console.log("Ingresaste el numero 3");
//         break;
//     case "4":
//         console.log("Ingresaste el numero 4");
//         break;

//     default:
//         console.log("Dato invalido");
//         break;
// }

// let ingreso = prompt("Ingresa una opcion \n 1-Chocolatada \n 2-Cafe con leche \n 3-Cafe solo \n 4-Te");
// if (ingreso == 0) {
//     alert("uwu")
// }

// while (ingreso != "0") {
//     switch (ingreso) {
//         case "1":
//             alert("Elejiste Chocolatada :) ");
//             break;
//         case "2":
//             alert("Elejiste Cafe con leche :) ");
//             break;  
//         case "3":
//             alert("Elejiste Cafe solo :) ");
//             break;
//         case "4":
//             alert("Elejiste Te :) ");
//             break;

//         default:
//             console.log("Opcion no valida");
//             break;
//     }
//     ingreso = prompt("Ingresa una opcion \n 1-Chocolatada \n 2-Cafe con leche \n 3-Cafe solo \n 4-Te");
//     if (ingreso == 0) {
//         alert("Gracias ! ")
//     }
// }


let prueba = parseInt(prompt ("Ingresa un numero del 1 al 5 y obten el significado del mismo :)"));

while (prueba == "") {
    alert("Numero Incorrecto");
}if (prueba == 1) {
    alert("El número 1 denota a una persona que sacrificó una parte de sí misma en el pasado.");
}else if(prueba == 2){
    alert("El número 2 define una personalidad que necesita abandonar el materialismo.")
}else if (prueba == 3) {
    alert("El número 3 muestra una personalidad que no pudo expresarse a sí misma en el pasado. Por lo tanto, tiene emociones reprimidas en esta vida.");
}else if (prueba == 4) {
    alert("El número 4 denota a alguien que fue abandonado por su familia en el pasado, por lo que con frecuencia se siente no apoyado.");
}else if (prueba == 5) {
    alert("El número 5 muestra una personalidad egoísta, que está aprendiendo a dejar de serlo.");
}else if (prueba => 6 || prueba == 0) {
    alert("Numero incorrecto")
}


// let numeroIngresado= prompt("Ingresa un precio")

// if(numeroIngresado <= 300) {
//     console.log("El precio es menor o igual que 300");
// }else if(numeroIngresado <= 500){
//     console.log("El precio es menor o igual que 500");
// }else if(numeroIngresado <= 750){
//     console.log("El precio es menor o igual que 750");
// }else{
//     console.log("El precio es mayor a 750");
// }