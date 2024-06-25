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
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular 128gb',
        price: 4500,
        marca: 'samsung'
    },
]

console.log(productos)

/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung */

const samsung = []
for(const producto of productos){
    if(producto.marca === 'samsung'){
        samsung.push(producto)
    }
}
console.log(samsung)

/* 
Crear una funcion que se llame buscarProducto(string) recibira un string y por cada producto del array 
de productos verificara si el titulo tiene incluido el string buscado
Esta funcion debe retornar un array de productos

EJEMPLO:
buscarProducto('noblex') //retorna:  
[ 
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    }
]
buscarProducto('celular')
[
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    }
]

*/
productosConMarcaEnNombre = []
for(let producto of productos){
    let newWord = ''
    let palabra = false
    let finish = false
    let i = 0
    for(let letra of producto.title){
        if(letra == ' ' & !palabra){
            newWord = ''
            i = 0
        }
        else if(producto.marca == newWord & !finish){
            productosConMarcaEnNombre.push(producto)
            finish = true
        }
        else if(letra == producto.marca[i] & !finish & !palabra){
            palabra = true
            newWord = letra
            i = i+1
        }
        else if(palabra & letra == producto.marca[i] & !finish){
            palabra = true
            newWord = newWord + letra
            i = i+1
        }
        else{
            palabra = false
            newWord = ''
            i = 0
        }
        }
    }

console.log(productosConMarcaEnNombre)







