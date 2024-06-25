const nombres2 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']

let posiciondeLeonel = nombres2.indexOf('leonel')
nombres2.splice(posiciondeLeonel , 1)

let posiciondeLucas = nombres2.indexOf('lucas')
nombres2.splice((posiciondeLucas - 1) , 1)


let posiciondeAbril = nombres2.indexOf('abril')
nombres2.splice((posiciondeAbril) , 0,'sofia')

console.log(nombres2)

//includes retornea un boolean si el elemento esta en el array  console.log(nombres2.includes('jose'))

let caracteres = 0

for(let nombre of nombres2){
    console.log(nombre)
    caracteres = caracteres + nombre.length
}

console.log('La cantidad de caracteres es ' + caracteres)

//-------------------------------------------------------------------------------------------------

const array = ['pepe', 'lucas', 'PEDRO', 'JuaN']

//esto debe generar un segundo array con ['PEDRO', 'JuaN']
const arraymayus = []
let mayusExist = false
for(let nombre of array){
    for(let letra of nombre){
        let letraMayus = letra.toUpperCase()
        if(letra == letraMayus & !mayusExist){
            mayusExist = true
        }
    }
    if(mayusExist){
        arraymayus.push(nombre)}
}
console.log(arraymayus)


/* Se hacia con esto bobo:
const estaEnMinuscula = (str) => str == str.toLowerCase()
const tieneMaysucula = (str) => !estaEnMinuscula(str)
*/
//--------------------------------------------------------------------------------------------
const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
]


/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung */
