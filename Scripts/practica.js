
// tarea arrays 
class anteojo {
    constructor(nombre, precio, tipo, marca) {
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.tipo = tipo;
    this.marca = marca;
    }
}

const sol1 = new anteojo ("Londres", 17500, "Sol", "Vulk");
const sol2 = new anteojo ("Munich", 17000,"Sol", "Vulk");
const sol3 = new anteojo ("Bruselas", 16000,"Sol", "Rusty");
const sol4 = new anteojo ("Praga", 15000,"Sol", "Ossira");
const sol5 = new anteojo ("Budapest", 15000,"Sol", "Ossira");
const sol6 = new anteojo ("Seúl", 15000,"Sol", "Rusty");
const sol7 = new anteojo ("Hong Kong", 14000, "Sol", "Vulk");
const sol8 = new anteojo ("Tokyo", 13700, "Sol", "Vulk");
let anteojosSol = [];

const leer1 = new anteojo ("Amsterdam",25000,"Leer", "Ossira");
const leer2 = new anteojo ("Barcelona",22000,"Leer", "Vulk");
const leer3 = new anteojo ("París",21000,"Leer", "Ossira");
let anteojosLeer = [];


anteojosSol.push(sol1,sol2,sol3,sol4,sol5,sol6,sol7,sol8);
anteojosLeer.push(leer1,leer2, leer3)
console.log(anteojosSol);
console.log(anteojosLeer);


const vulkSol = anteojosSol.filter((el)=>{
    return el.marca === "Vulk"
})
console.log(vulkSol);

const rustySol = anteojosSol.filter((el)=>{
    return el.marca === "Rusty"
})
console.log(rustySol);

const ossiraSol = anteojosSol.filter((el)=>{
    return el.marca === "Ossira"
})
console.log(ossiraSol);

const vulkLeer = anteojosLeer.filter((el)=>{
    return el.marca === "Vulk"
})
console.log(vulkLeer);

const ossiraLeer = anteojosLeer.filter((el)=>{
    return el.marca === "Ossira"
})
console.log(ossiraLeer);


const baratos = anteojosSol.slice(3, 8)
console.log(baratos);



const sumar = function (numeroA, numeroB) {
    return numeroA+numeroB;
}

const descuento = function (resultado, desc1) {
    return resultado*desc1;
}

let numeroA = parseInt(prompt ("Ingresa el precio del producto"));
let numeroB = parseInt(prompt ("Ingresa el precio del otro producto"));
let resultado = sumar;
let desc1 = parseFloat(0.90)
let precioF = alert("Tu precio final con descuento es de " + (numeroA+numeroB)*desc1);

function mostrar(mensaje) {
    console.log(mensaje);
}

mostrar(sumar(numeroA, numeroB));
mostrar(descuento((numeroA+numeroB), desc1));

let agregar = document.getElementById("prueba")
agregar.innerText = "Hola"

botonP = document.querySelector(".botonP")
botonP.onclick = ()=>{
    agregar.innerText = "Chau"
}