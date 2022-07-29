var numeros = []
var ordenRespuesta = []
var puntaje = 0
var url = "https://picsum.photos/500/300"
var respuesta = ""
var contador = 0
var pregunta1 = ["¿Cuál es el lugar más frío de la tierra?", "La Antártida", "Rusia", "Mongolia", "Corea del Norte"]
var pregunta2 = ["¿Quién escribió La Odisea?", "Homero", "Mario Benedetti", "Antonio Machado", "Octavio Paz"]
var pregunta3 = ["¿Cómo se llama la capital de Mongolia?", "Ulan Bator", "Kiev", "Jersón", "Odesa"]
var pregunta4 = ["¿Cuál es el río más largo del mundo?", "Nilo", "Amazonas", "Río Misisipi", "Río Bravo"]
var pregunta5 = ["¿En qué continente está Ecuador?", "América", "Europa", "Oceania", "África"]
var pregunta6 = ["¿Dónde originaron los juegos olímpicos?", "Grecia", "	Argelia", "Japón", "China"]
var pregunta7 = ["¿Qué tipo de animal es la ballena?", "Mamífero", "Aves", "Reptil", "Peces" ]
var pregunta8 = ["¿Qué cantidad de huesos en el cuerpo humano?", "206 huesos", "310 huesos", "301 huesos", "200 huesos"]
var pregunta9 = ["¿Quién es el autor de el Quijote?", "Miguel de Cervantes", "Victor Hugo", "Gabriel García Márquez", "Jorge Luis Borges"]
var pregunta10 = ["¿Quién pintó la última cena?", "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"]
var pregunta11 = ["¿Cuándo acabó la II Guerra Mundial?","1945", "1954", "1965", "1955"]
var pregunta12 = ["¿En qué país se encuentra la torre de Pisa?", "Italia", "Francia", "Grecia", "Japón"]
var pregunta13 = ["¿Dónde se encuentra la Sagrada Familia?", "Barcelona", "Madrid", "Malaga", "Girona"]
var pregunta14 = ["¿Cuál es el océano más grande?", "Océano Pacífico", "Océano Atlántico", "Océano Índico", "Océano Ártico"]
var pregunta15 = ["¿Qué año llegó Cristóbal Colón a América?", "1492", "1420", "1429", "1494"]
var pregunta16 = ["¿Qué producto cultiva más Guatemala?", "Café", "Cacao", "Banano", "Maíz"]
var pregunta17 = ["¿Quién es el famoso Rey de Rock en los Estados Unidos?", "Elvis Presley", "Michael Jackson", "Madonna", "John Lennon"]
var pregunta18 = ["¿Cuál es el país más grande del mundo?", "Rusia", "Japón", "Brasil", "Andorra"]
var pregunta19 = ["¿Dónde se encuentra la famosa Torre Eiffel?", "Francia", "Italia", "Grecia", "España"]
var pregunta20 = ["¿Qué deporte practicaba Michael Jordan?", "Baloncesto", "Futbol", "Ecuavoley", "Baseball"]
            
var totalPreguntas = [pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8,pregunta9,pregunta10,pregunta11,pregunta12,pregunta13,pregunta14,pregunta15,pregunta16,pregunta17,pregunta18,pregunta19,pregunta20]

var preguntasFinales = []

function agregarPreguntas() {
    for (let index = 0; index < 5; index++) {
        generarPreguntaRandom()
        preguntasFinales[index] = totalPreguntas[numeros[index]]
    }
}

function mostrarPreguntas() {  
    getImage()
    agregarPreguntas()
    ocultarIniciar()
    document.getElementById("btnIniciar").style.visibility=true

    for (let index = 0; index < 4; index++) {
        generarRespuestaRandom() 
        
    }
var enunciado1 = document.getElementById("pregunta1")
var enunciado2 = document.getElementById("pregunta2")
var enunciado3 = document.getElementById("pregunta3")
var enunciado4 = document.getElementById("pregunta4")
var enunciado5 = document.getElementById("pregunta5")
var opcion11 = document.getElementById("respuesta1-1")
var opcion21 = document.getElementById("respuesta2-1")
var opcion31 = document.getElementById("respuesta3-1") 
var opcion41 = document.getElementById("respuesta4-1")
var opcion12 = document.getElementById("respuesta1-2")
var opcion22 = document.getElementById("respuesta2-2")
var opcion32 = document.getElementById("respuesta3-2") 
var opcion42 = document.getElementById("respuesta4-2")
var opcion13 = document.getElementById("respuesta1-3")
var opcion23 = document.getElementById("respuesta2-3")
var opcion33 = document.getElementById("respuesta3-3") 
var opcion43 = document.getElementById("respuesta4-3")
var opcion14 = document.getElementById("respuesta1-4")
var opcion24 = document.getElementById("respuesta2-4")
var opcion34 = document.getElementById("respuesta3-4") 
var opcion44 = document.getElementById("respuesta4-4")
var opcion15 = document.getElementById("respuesta1-5")
var opcion25 = document.getElementById("respuesta2-5")
var opcion35 = document.getElementById("respuesta3-5") 
var opcion45 = document.getElementById("respuesta4-5") 
        enunciado1.innerHTML = preguntasFinales[0][0]
        enunciado2.innerHTML = preguntasFinales[1][0]
        enunciado3.innerHTML = preguntasFinales[2][0]
        enunciado4.innerHTML = preguntasFinales[3][0]
        enunciado5.innerHTML = preguntasFinales[4][0]
        opcion11.value = preguntasFinales[0][ordenRespuesta[0]]
        opcion21.value = preguntasFinales[0][ordenRespuesta[1]]
        opcion31.value = preguntasFinales[0][ordenRespuesta[2]]
        opcion41.value = preguntasFinales[0][ordenRespuesta[3]]
        opcion11.innerHTML = preguntasFinales[0][ordenRespuesta[0]]
        opcion21.innerHTML = preguntasFinales[0][ordenRespuesta[1]]
        opcion31.innerHTML = preguntasFinales[0][ordenRespuesta[2]]
        opcion41.innerHTML = preguntasFinales[0][ordenRespuesta[3]]
        opcion12.value = preguntasFinales[1][ordenRespuesta[0]]
        opcion22.value = preguntasFinales[1][ordenRespuesta[1]]
        opcion32.value = preguntasFinales[1][ordenRespuesta[2]]
        opcion42.value = preguntasFinales[1][ordenRespuesta[3]]
        opcion12.innerHTML = preguntasFinales[1][ordenRespuesta[0]]
        opcion22.innerHTML = preguntasFinales[1][ordenRespuesta[1]]
        opcion32.innerHTML = preguntasFinales[1][ordenRespuesta[2]]
        opcion42.innerHTML = preguntasFinales[1][ordenRespuesta[3]]
        opcion13.value = preguntasFinales[2][ordenRespuesta[0]]
        opcion23.value = preguntasFinales[2][ordenRespuesta[1]]
        opcion33.value = preguntasFinales[2][ordenRespuesta[2]]
        opcion43.value = preguntasFinales[2][ordenRespuesta[3]]
        opcion13.innerHTML = preguntasFinales[2][ordenRespuesta[0]]
        opcion23.innerHTML = preguntasFinales[2][ordenRespuesta[1]]
        opcion33.innerHTML = preguntasFinales[2][ordenRespuesta[2]]
        opcion43.innerHTML = preguntasFinales[2][ordenRespuesta[3]]
        opcion14.value = preguntasFinales[3][ordenRespuesta[0]]
        opcion24.value = preguntasFinales[3][ordenRespuesta[1]]
        opcion34.value = preguntasFinales[3][ordenRespuesta[2]]
        opcion44.value = preguntasFinales[3][ordenRespuesta[3]]
        opcion14.innerHTML = preguntasFinales[3][ordenRespuesta[0]]
        opcion24.innerHTML = preguntasFinales[3][ordenRespuesta[1]]
        opcion34.innerHTML = preguntasFinales[3][ordenRespuesta[2]]
        opcion44.innerHTML = preguntasFinales[3][ordenRespuesta[3]]
        opcion15.value = preguntasFinales[4][ordenRespuesta[0]]
        opcion25.value = preguntasFinales[4][ordenRespuesta[1]]
        opcion35.value = preguntasFinales[4][ordenRespuesta[2]]
        opcion45.value = preguntasFinales[4][ordenRespuesta[3]]
        opcion15.innerHTML = preguntasFinales[4][ordenRespuesta[0]]
        opcion25.innerHTML = preguntasFinales[4][ordenRespuesta[1]]
        opcion35.innerHTML = preguntasFinales[4][ordenRespuesta[2]]
        opcion45.innerHTML = preguntasFinales[4][ordenRespuesta[3]]
}
 
function generarPreguntaRandom() {
    var numRandom = Math.floor((Math.random() * (19 - 0 + 1)) + 0);
    if (!numeros.includes(numRandom)) {
        numeros.push(numRandom)
    } else {
        generarPreguntaRandom()
    }
} 
function ocultarIniciar(){
    document.getElementById("btnIniciar").style.visibility="hidden"

}
function generarRespuestaRandom() {
        var numRandom = Math.floor((Math.random() * (4 - 1 + 1)) + 1);
        if (!ordenRespuesta.includes(numRandom)) {
            ordenRespuesta.push(numRandom)
        } else {
            generarRespuestaRandom()
        }
}


function sumarPuntaje(){
 puntaje++
}

function validarPuntos(){
    if (contador == 5 && puntaje >= 3 ) {
        document.getElementById("animacionFeliz").style.display=""
        document.getElementById("audioFeliz").play()
        
    }else if(contador == 5 && puntaje < 3){
        document.getElementById("animacionTriste").style.display=""
        document.getElementById("audioTriste").play()
    }
    document.getElementById("puntos").innerHTML= "Puntos: " + puntaje
}
function ocultar(){
    document.getElementById("animacionFeliz").style.display="none"
    document.getElementById("animacionTriste").style.display="none"

}
function validarRespuesta1(botonValue){
    if (botonValue == preguntasFinales[0][1]) {
        document.getElementById("audioFelizCorto").play()
        sumarPuntaje()
    }else{
        document.getElementById("audioTristeCorto").play()
    }
    document.getElementById("respuesta1-1").disabled=true
    document.getElementById("respuesta2-1").disabled=true
    document.getElementById("respuesta3-1").disabled=true
    document.getElementById("respuesta4-1").disabled=true
    contador++
    validarPuntos()
}

function validarRespuesta2(botonValue){
    if (botonValue == preguntasFinales[1][1]) {
        document.getElementById("audioFelizCorto").play()
        sumarPuntaje()
    }else{
        document.getElementById("audioTristeCorto").play()
    }
    document.getElementById("respuesta1-2").disabled=true
    document.getElementById("respuesta2-2").disabled=true
    document.getElementById("respuesta3-2").disabled=true
    document.getElementById("respuesta4-2").disabled=true
    contador++
    validarPuntos()
}

function validarRespuesta3(botonValue){
    if (botonValue == preguntasFinales[2][1]) {
        document.getElementById("audioFelizCorto").play()
        sumarPuntaje()
    }else{
        document.getElementById("audioTristeCorto").play()
    }
    document.getElementById("respuesta1-3").disabled=true
    document.getElementById("respuesta2-3").disabled=true
    document.getElementById("respuesta3-3").disabled=true
    document.getElementById("respuesta4-3").disabled=true
    contador++
    validarPuntos()
}
function validarRespuesta4(botonValue){
    if (botonValue == preguntasFinales[3][1]) {
        document.getElementById("audioFelizCorto").play()
        sumarPuntaje()
    }else{
        document.getElementById("audioTristeCorto").play()
    }
    document.getElementById("respuesta1-4").disabled=true
    document.getElementById("respuesta2-4").disabled=true
    document.getElementById("respuesta3-4").disabled=true
    document.getElementById("respuesta4-4").disabled=true
    contador++
    validarPuntos()
}
function validarRespuesta5(botonValue){
    if (botonValue == preguntasFinales[4][1]) {
        document.getElementById("audioFelizCorto").play()
        sumarPuntaje()
    }else{
        document.getElementById("audioTristeCorto").play()
    }
    document.getElementById("respuesta1-5").disabled=true
    document.getElementById("respuesta2-5").disabled=true
    document.getElementById("respuesta3-5").disabled=true
    document.getElementById("respuesta4-5").disabled=true
    contador++
    validarPuntos()
}



function getImage() {
    getImage1()
    getImage2()
    getImage3()
    getImage4()
    getImage5()
}

function getImage1(){
    var imagen = document.getElementById("imagen1");
    fetch(url).then(response => {
        console.log(response);
        imagen.src = response.url;
    }).catch(error => {
        console.log(error);
        alert("error")
    }) 
}
function getImage2(){
    var imagen = document.getElementById("imagen2");
    fetch(url).then(response => {
        console.log(response);
        imagen.src = response.url;
    }).catch(error => {
        console.log(error);
        alert("error")
    }) 
}
function getImage3(){
    var imagen = document.getElementById("imagen3");
    fetch(url).then(response => {
        console.log(response);
        imagen.src = response.url;
    }).catch(error => {
        console.log(error);
        alert("error")
    }) 
}
function getImage4(){
    var imagen = document.getElementById("imagen4");
    fetch(url).then(response => {
        console.log(response);
        imagen.src = response.url;
    }).catch(error => {
        console.log(error);
        alert("error")
    }) 
}
function getImage5(){
    var imagen = document.getElementById("imagen5");
    fetch(url).then(response => {
        console.log(response);
        imagen.src = response.url;
    }).catch(error => {
        console.log(error);
        alert("error")
    }) 
}

function reiniciar() {
    location.reload();
}
