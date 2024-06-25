function sumatoria(a,b,c){
    return a+b+c
}
let a = 1
let b = 2
let c = 3

alert(sumatoria(a,b,c))

function mayor(a,b){
    if (a>b){
        return a
    }
    else {
        return b
    }
}

let nombrex = prompt('Ingrese un nombre de usuario:' )

function email(nombrex){
    return nombrex + '@gmail.com'
}

const sumarr = (a,b,c) => a+b+c

alert(sumarr(a,b,c))

/* es recomendale usar const antes que function*/

const solicitaryvalidar = () => {
    let stringsolicitado = prompt('ingrese un dato')
    while (!stringsolicitado || !isNaN(stringsolicitado)){
        alert('dato ingresado debe ser un string')
        stringsolicitado = prompt(' Ingrese el dato correctamente: ')
    }
    return stringsolicitado
}

solicitaryvalidar()

const mayora = (a,b) => {
    if (a>b){
        return a
    }
    else {
        return b
    }
}

const emailx = (nombrex) =>nombrex + '@gmail.com'


