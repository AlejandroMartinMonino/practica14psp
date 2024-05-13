const nombre = document.getElementById("name")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    if(nombre.value.length <6){
        alert("El nombre es inferior a 6 caracteres")
    }
})