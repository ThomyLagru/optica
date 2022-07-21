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




// let multiply = parseFloat(0.90);
// let diezPorciento =Number( document.getElementsByClassName("card-text").value);
// for (let i = 0; i < diezPorciento.length; i++) {
//     diezPorciento[i].innerHTML *= multiply;
// }


let ds = document.getElementById("abcd");
console.log(ds);

const p1 = document.createElement("p");
p1.innerHTML = "Descuentos todo julio!"

const newsletter = document.createElement("p");
newsletter.innerHTML = '  <a href="./Pages/test.html">Unite a nuestro Newsletter</a>'

p1.classList.add("anuncio")
newsletter.classList.add("anuncio")

ds.appendChild(p1);
ds.appendChild(newsletter)



const index = document.querySelector(".over")

function crearHtml(array) {
    let html;
    for (const anteojosSol of array) {
        html = `
    <section>
        <section class="txtAb__A row mnconf main2">
        <h2 class="color-titulo tituloh2">Anteojos con Descuento</h2>
        <div class="card-group g-4 txtAb__B">
          <div class="col">
            <div class="card InicioCartas col-sm-12">
              <div class="card-body">
                <h5 class="card-title">${anteojosSol.nombre}</h5>
                <p class="card-text">${anteojosSol.precio}</p>
                <a href="/Pages/error.html" class="btn botoncard">Ver más</a>
                <!-- este texto esta en stand by hasta el momento de tener la info correcta -->
              </div>
            </div>
          </div>
    </section>`;
        index.innerHTML += html;
    }
}