
const carrito = JSON.parse(localStorage.getItem("carrito")) || []

const seccionCarrito = document.getElementById("carrito")

function mostrarCarrito(){
    seccionCarrito.innerHTML = ""
    if(carrito.length === 0){
        seccionCarrito.innerHTML = 
        `
        <div>
            <p> No hay productos en el carrito </p>
            <a class="btn" href="../Pages/galeria.html">Volver al catalogo</a>
        </div>
        `
    } else {
        for(producto of carrito){
            const {id, nombre, precio, imagen, cantidad} = producto
            const productoHTML = 
            `
            <div class="displayCarrito asd">
                <img class="imgCarrito" src="../${imagen}"></img>
                <h3>${nombre}</h3>
                <p>${precio}</p>
                <p>Cantidad: ${cantidad}</p>
                <button class="btn" onclick="quitarDelCarrito(${id})">Eliminar</button>
            </div>
            `
            seccionCarrito.innerHTML+= productoHTML
        }
    }
}

mostrarCarrito()

function quitarDelCarrito(id) {
    const producto = carrito.find(producto => producto.id == id)
    if (producto.cantidad === 1) {
        carrito.splice(carrito.findIndex(producto => producto.id == id), 1)
    } else {
        producto.cantidad --
    }
    mostrarCarrito()
    guardarCarrito()
}

function guardarCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

const seccionResumen = document.getElementById("resumen")

function mostrarResumen(){
    seccionResumen.innerHTML = ""
    const total = precioTotal()
    const resumenHTML=
    `
    <div>
        <h3>Resumen</h3>
        <p>Total: $${total}</p>
        <a class="btn" href="./comprar.html">Comprar</a>
    </div>
    `
    seccionResumen.innerHTML = resumenHTML 
}

mostrarResumen()

function precioTotal(){
    let total = 0
    for (producto of carrito){
        total += producto.precio * producto.cantidad
    }
    return total
}