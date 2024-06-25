const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) =>{
    return password && password.length >= 6 && tieneMayuscula(password)
}

const validacionNumero = (numero) => !isNaN(Number(numero))

const validacionOperacion = (operacion) =>{
    return operacion == '+' || operacion == '-'
}


const solicitarDato = (objetoDeConfeccion) => {

    let dato = prompt(objetoDeConfeccion.mensaje)
    while(!objetoDeConfeccion.validacion(dato)){
        dato = prompt(objetoDeConfeccion.error)
    }
    return dato
}

const DATOS = {
    EMAIL: {
        mensaje: 'Ingrese un email, por favor.',
        error: 'Error email invalido: ingrese nuevamente el email',
        validacion: validacionEmail
    },
    PASSWORD:{
        mensaje: 'Ingrese una password',
        error: 'Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula',
        validacion: validacionPassword
    } ,

    NUMERO : {
        mensaje: 'Ingrese un numero',
        error: 'Error Numero invalido, vuelva a ingresar un Numero',
        validacion: validacionNumero
    },
    
    OPERACION : {
        mensaje: 'Ingrese una operacion(+ 0 -)',
        error: 'Error operacion invalida, vuelva a ingresar una operacion(+ 0 -)',
        validacion: validacionOperacion
    }

}


const calcular = (numero1,numero2,operacion) => {
    if(operacion == '+'){
        return numero1 + numero2
    }
    else{
        return numero1 - numero2
    }
}

const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    usuario.email = solicitarDato(DATOS.EMAIL)
    usuario.password = solicitarDato(DATOS.PASSWORD)

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}

const calculadora = () => {
    
    let numero1 = Number(solicitarDato(DATOS.NUMERO))
    let operacion = (solicitarDato(DATOS.OPERACION))
    let numero2 = Number(solicitarDato(DATOS.NUMERO))

    
    let resultado = calcular(numero1,numero2,operacion)
    
    alert(`El resultado de ${numero1} ${operacion} ${numero2} es ${resultado}`)
}

calculadora()