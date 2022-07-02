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
const anteojos = ["París", "Barcelona", "Amsterdam", "Tokyo", "Hong Kong", "Seúl", "Budapest", "Praga", "Bruselas", "Munich", "Londres"];
const precios = [21000, 22000, 25000, 13700, 14000, 15000, 15000, 15000, 16000, 17000, 17500];

const almacen = anteojos.concat(precios);

console.log(almacen);
console.log(anteojos.includes(prompt("Introduci el modelo del anteojo")));
console.log(anteojos);
console.log(precios);



class anteojo {
    constructor(nombre, precio, tipo) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.tipo = tipo;
    }
}

const anteojo1 = new anteojo ("Barcelona", 22000, "Sol");
const anteojo2 = new anteojo ("Amsterdam", 21000,"Sol");

let anteojosSol = [];

anteojosSol.push(anteojo1,anteojo2);
console.log(anteojosSol);
