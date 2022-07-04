// tarea final 1
const sumar = function (numeroA, numeroB) {
    return numeroA+numeroB;
}

const descuento = function (resultado, desc1) {
    return resultado*desc1;
}


let numeroA = parseInt(prompt ("Ingresa el precio del producto"));
let numeroB = parseInt(prompt ("Ingresa el precio del otro producto"));
let resultado = sumar
let desc1 = parseFloat(0.90)
let precioF = alert("Tu precio final es de " + (numeroA+numeroB)*desc1)

function mostrar(mensaje) {
    console.log(mensaje);
}

mostrar(sumar(numeroA, numeroB));
mostrar(descuento((numeroA+numeroB), desc1));

// tarea arrays 
class anteojo {
    constructor(nombre, precio, tipo) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.tipo = tipo;
    }
}

const sol1 = new anteojo ("Londres", 17500, "Sol");
const sol2 = new anteojo ("Munich", 17000,"Sol");
const sol3 = new anteojo ("Bruselas", 16000,"Sol");
const sol4 = new anteojo ("Praga", 15000,"Sol");
const sol5 = new anteojo ("Budapest", 15000,"Sol");
const sol6 = new anteojo ("Seúl", 15000,"Sol");
const sol7 = new anteojo ("Hong Kong", 14000, "Sol");
const sol8 = new anteojo ("Tokyo", 13700, "Sol");
let anteojosSol = [];

const leer1 = new anteojo ("Amsterdam",25000,"Leer");
const leer2 = new anteojo ("Barcelona",22000,"Leer");
const leer3 = new anteojo ("París",21000,"Leer");
let anteojosLeer = [];


anteojosSol.push(sol1,sol2,sol3,sol4,sol5,sol6,sol7,sol8);
anteojosLeer.push(leer1,leer2, leer3)
console.log(anteojosSol);
console.log(anteojosLeer);