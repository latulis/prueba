// arrays
//lista de elementos ordenados

let nombre1 = 'Juan'
let nombre2 = 'Pepe'
let nombre3 = 'Mark'

const nombres = ['juan','pepe' , 'mark']

console.log(nombres[1])

console.log('tengo' + nombres.length + 'nombres')

//push agrega al final del array

nombres.push('maria')

console.log(nombres)

//unshift agrega el principio del array

nombres.unshift('jorge')

//touppercase tolowercase para mayus o minus

nombre1 = nombre1.toUpperCase()

//pop elimina el ultimo del array y lo retorna

//shift elimina el primer elemento y lo retorna

//indexOf busca

let posiciondejuan = nombres.indexOf('juan')

console.log('La posicion de juan es '+posiciondejuan)

//.splice usa dos parametros(el primero es de donde se empieza a contar y el segundo es
//cuantos elementos a partir de ahi se van a eliminar 
//splice si lo metes en una variable te crea un array con los que elimina
//se puede usar un tercer parametro para agregar elementos por ej:'lucas'



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

for(let index = 0 ; index < nombres2.length ; index = index+1){
    console.log(nombres2[index])
    caracteres = caracteres + nombres2[index].length
}

console.log(caracteres)

