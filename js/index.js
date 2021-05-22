let nombre = document.getElementById("nombre");
let emailR = document.getElementById("emailR");
let telefono = document.getElementById("telefono");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");

function validar(){
    let allFine = true;
    if(nombre.value == ""){
        alert("Llene el campo nombre");
        allFine = false;
    }
    if(emailR.value == ""){
        alert("Llene el campo email");
        allFine = false;
    }
    if(telefono.value == ""){
        alert("Llene el campo telefono");
        allFine = false;
    }
    if(pass1.value == ""){
        alert("Llene el campo contraseña");
        allFine = false;
    }
    if(pass2.value == ""){
        alert("Llene el campo confirmar contraseña");
        allFine = false;
    }
    if(pass1.value != pass2.value){
        alert("Las contraseñas no coinciden");
        allFine = false;
    }
    if(allFine){
        enviarUsuario();
    }
}

async function enviarUsuario(){
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/usuarios/add',
        data: {
            nombre: nombre.value,
            email: emailR.value,
            telefono: telefono.value,
            password: pass1.value,
        }
    });  
    if(response.statusText == "OK"){
        location.href = "http://localhost:5500/login.html";
    }

}


function irLogin(){
    location.href = "http://localhost:5500/login.html";
}



