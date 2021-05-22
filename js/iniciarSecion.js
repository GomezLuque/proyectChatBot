let emailL = document.getElementById("emailL");
let passL = document.getElementById("passL");

function validarL(){
    let allFine = true;

    if(emailL.value == ""){
        alert("Llene el campo email");
        allFine = false;
    }
    if(passL.value == ""){
        alert("Llene el campo contraseña");
        allFine = false;
    }
    if(allFine){
        iniciarSesion();
    }
}

async function iniciarSesion(){
    try{
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/usuarios/login',
            data: {
                email: emailL.value,
                password: passL.value,
            }
        }); 
        if(response.statusText == "OK"){
            location.href = "http://localhost:5500/chatbot.html";
        } 
    }catch(e){
        alert("Datos incorrectos")
    }

}

function irRegistro(){
    location.href = "http://localhost:5500/registrar.html";
}