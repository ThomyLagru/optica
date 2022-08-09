document.querySelector("#Compra").addEventListener("click", (e)=>{
    e.preventDefault
    Swal.fire(
        "Gracias por tu compra! Un mail te llegara con el resumen",
        "success"
    )
    localStorage.removeItem("carrito")

    setTimeout(()=> {
        window.location.href="/"
    }, 3000)
})