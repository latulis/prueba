/* DOM*/
//console.log(document);
console.dir(document);

const titulo = document.getElementById("titulox")

console.dir(titulo.innerText);

titulo.innerText = 'chauuuuuu'

const caja = document.getElementById("caja")

console.dir(caja)

caja.innerHTML = `<h2>soy un subtitulo</h2>`



const usuario = {
    nombre : 'jorge',
    apellido : 'Escudero',
    direccion : 'Av . Pdre luchesse 567',
    edad : 23
}

const user = document.getElementById("user")

user.innerHTML = `<h2>Nombre completo: ${usuario.nombre} ${usuario.apellido}</h2>
<span>Edad: ${usuario.edad}</span>
<span>Direccion: ${usuario.direccion}</span>`
/* 
Mostarlo dentro de un div 

h2: Nombre completo: {nombre} {apellido}
span: Edad: {edad}
span: Direccion: {direccion}
*/