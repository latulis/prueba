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