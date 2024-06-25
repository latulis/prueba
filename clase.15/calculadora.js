const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) =>{
    return password && password.length >= 6 && tieneMayuscula(password)
}


const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    let email = prompt('Ingrese un email')
    while(!validacionEmail(email)){
        email = prompt('Error email invalido: ingrese nuevamente el email')
    }
    usuario.email = email

    let password = prompt('Ingrese la password que tenga mas de 6 caracteres y una mayuscula')
    while(!validacionPassword(password)){
        password = prompt('Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula')
    }
    usuario.password = password

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}