function login(){
    let email = prompt('Ingrese un email: ')
    email = validarEmail(email)
    let password = prompt('Ingrese una clave:')
    password = validarPassword(password)
    if(email != '' & password != ''){
        alert('Usuario registrado con exito')
    return {
        'email': email,
        'password': password
    }
    }
}

const validarEmail = (email) => {while(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))){
    email = prompt('Ingrese un email valido: ')
}
return email
}

const validarPassword = (password) => {while(!password || password.lenght<6 || password == password.toLowerCase()){
    password = prompt('Ingrese una clave valida(debe tener mas de 6 caracteres y contener al menos una mayuscula: ')
}
return password
}

const Usuario = login()
console.log(Usuario)


if(localStorage.getItem('historial') == null){
    localStorage.setItem('historial', JSON.stringify([]))
}

const obtenerHistorial = () => JSON.parse(localStorage.getItem('historial'))

const guardarEnHistorial = (user) => {
    const historial = obtenerHistorial()
    historial.push(user)
    localStorage.setItem('historial', JSON.stringify(historial))

}

guardarEnHistorial({
    accion: 'calculadora',
    operacion: operacion,
    a: number,
    b: number,
    resultado: number,
    fecha: dd/mm/aaaa || '18|01/2020'
})

