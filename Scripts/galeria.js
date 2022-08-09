async function fetchProcuctos(){
    const rta =await fetch("../data/productos.json")
    return await rta.json()
}

const seccionProductos = document.querySelector("#productos")

function mostrarCatalogo(){
    for (producto of catagolo){
        const{id, nombre, precio, imagen} = producto
        const productoHTML =
        `
        <div class="displayProductos">
            <img src="${imagen}" class="imgProductos"></img>
            <h3>${nombre}</h3>
            <p>${precio}</p>
            <button class="btn" onclick="sumarAlCarrito(${id})">Sumar al carrito</button>
            </div>
        `
        seccionProductos.innerHTML += productoHTML
    }
}

let catagolo = []

fetchProcuctos().then(producto => {
    catagolo = producto
    mostrarCatalogo()
})

const carrito = JSON.parse(localStorage.getItem("carrito")) || []

function sumarAlCarrito(id){
    const producto = catagolo.find(p => p.id == id)
    carrito.push(producto)
    guardarCarrito()
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}