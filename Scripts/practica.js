// tarea arrays 
class anteojo {
    constructor(id,nombre, precio, tipo, marca, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.tipo = tipo;
    this.marca = marca;
    this.imagen = imagen;
    }
}

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


Swal.fire({
    title:'Bienvenido a Optica Vedere',
    width: 400,

})


