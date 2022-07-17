const formulario = document.querySelector("#formulario");
function guadarLS(clave, valor) {
    const ls= localStorage.setItem(clave, valor)
    return ls;
   } 
   formulario.addEventListener("submit", (e)=>{
     e.preventDefault()
   let form= e.target
   const usuario= form.children[0].children[1].value
   const pass= form.children[1].children[1].value
   })