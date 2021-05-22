let chatContainer = document.getElementById("chatText")
let input = document.getElementById("serch")
let preguntaInicial = true;

let pregunta ;
let contador =0;


async function cargarPreguntas(){
    try{
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:3000/api/preguntas/list'
        });
        //console.log(response);
        ofrecerPreguntas(response.data);
    }catch(e){
        console.log(e);
    }
}

function ofrecerPreguntas(data){
    chatContainer.innerHTML = "";
    for(let i = 0; i < data.length; i++){
        //console.log(data[i]);
        chatContainer.innerHTML += `
        <div class="chatMessage flex">
            <h2>${data[i].id}. ${data[i].pregunta}</h2>
        </div>
        
        `
    }
    chatContainer.innerHTML += `
    <div class="chatMessage flex">
        <h2>Escribe el numero de la pregunta que quieres hacer</h2>
    </div>
    
    `
}

input.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

async function validate(e) {
    if(preguntaInicial){
        let textInput = parseInt(e.target.value)
        if(isNaN(textInput)){
            alert("seleccione un numero");
        }else{
            if(textInput > 0 && textInput <=5){
                const response = await axios({
                    method: 'GET',
                    url: `http://localhost:3000/api/preguntas/list/${textInput}`
                });
                pregunta = response.data;
                console.log(pregunta);

                chatContainer.innerHTML += `
                <div class="userMessage flex">
                    <h2>${pregunta[0].pregunta}</h2>
                </div>
                `
                chatContainer.innerHTML += `
                <div class="chatMessage flex">
                    <h2>${pregunta[0].respuestas[contador].respuesta}</h2>
                </div>
                    <div class="chatMessage flex">
                    <h2>¿Soluciono su problema? escriba "si" para confirmar y "no" para darle otra solución</h2>
                </div>
                `
                contador++;
                input.value = "";
                preguntaInicial = false;
            }else{
                alert("Seleccione un numero en el rango de preguntas");
            }
        }
        //console.log(textInput);
    }else{
        let textInput = parseInt(e.target.value)
        if(isNaN(textInput)){
            let newText = e.target.value.toLowerCase();
            if(newText == "si"){
                chatContainer.innerHTML += `
                <div class="userMessage flex">
                    <h2>Solucione mi problema</h2>
                </div>
                <div class="chatMessage flex">
                    <h2>Has solucionado tu problema que este muy bien</h2>
                </div>
                `
            }else if(newText == "no"){
                try{
                    chatContainer.innerHTML += `
                    <div class="chatMessage flex">
                        <h2>${pregunta[0].respuestas[contador].respuesta}</h2>
                    </div>
                        <div class="chatMessage flex">
                        <h2>¿Soluciono su problema? escriba "si" para confirmar y "no" para darle otra solución</h2>
                    </div>
                    `
                    contador++;
                }catch(e) {
                    chatContainer.innerHTML += `
                        <div class="chatMessage">
                            <h2>Ya que su problema no se soluciono lo conectaremos con un asesor</h2>
                            <h2>Numero del asesor : 300 48999999999</h2>
                        </div>
                    `
                }
            }else{
                alert("Solo se puede escribir si o no");
            }
        }else{
            alert("Solo se puede escribir si o no");
        }
    }
}

