const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-nav');

console.log(menu)
console.log(hamburguer)

hamburguer.addEventListener('click', ()=>
    {
        menu.classList.toggle("spread")
    })