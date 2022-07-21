let inputMail = document.getElementById("exampleFormControlInput1");
localStorage.setItem("newsletter", inputMail.value);

let storedValue = localStorage.getItem("newletter")

botonEnviar = document.querySelector(".btn"),

botonEnviar.addEventListener("click", respuestaClick)
function respuestaClick () {
    
    localStorage.setItem ("newlettter", inputMail.value);
    
}
