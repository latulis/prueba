/*1)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
2)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta
3)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
4)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
5)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null
6)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola*/

let nombre = prompt('Ingrese un nombre: ')

function decirNombre(nombre){
    alert('Hola '+nombre)
}

decirNombre(nombre)
function saludar(nombre){
    return 'Hola ' + nombre
}

alert(saludar(nombre))

function sumar(a,b){
    return Number(a + b)
}

let a = Number(prompt('Ingrese un numero'))
let b = Number(prompt('Ingrese un numero'))

alert('El resultado de la suma de los dos numeros dados anteriormente es de '+sumar(a,b))

function restar(a,b){
    return a - b
}

alert('El resultado de la resta de los dos numeros dados anteriormente es de '+restar(a,b))

let operación = prompt('Ingrese una operacion (+ o -): ')
let numero1 = Number(prompt('Ingrese un numero'))
let numero2 = Number(prompt('Ingrese un segundo numero'))

function calcular(operacion,a,b){
    if( operacion=='+'){
        return sumar(a,b)
    }
    else if(operacion=='-'){
        return restar(a,b)
    }
    else{
        return null
    }
}

alert('El resultado de la operacion es: '+calcular(operación,numero1,numero2))