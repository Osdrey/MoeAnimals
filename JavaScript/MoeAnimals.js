// Variables
let ataqueJugador = ""
let ataqueEnemigo = ""
let vidasJugador = 3
let vidasEnemigo = 3
// Inicio
function iniciarJuego (){
    let botonIniciar = document.getElementById("boton-iniciar")
    botonIniciar.addEventListener("click", iniciar)
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"
    let sectionSeleccionarReiniciar = document.getElementById("boton-reiniciar")
    sectionSeleccionarReiniciar.style.display = "none"
    let sectionMensajes = document.getElementById("Mensajes")
    sectionMensajes.style.display = "none"
    // Seleccionar mascota
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    // Seleccionar ataque
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego) 
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.addEventListener("click", ataquePlanta)
    // Reiniciar
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function iniciar(){
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "block"
    let sectionIniciar = document.getElementById("Iniciar")
    sectionIniciar.style.display = "none"
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"
    // Mascotas             
        // 1 - Hipodoge 🐉
        // 2 - Capipepo 🐳
        // 3 - Ratigueya 🐀
        // 4 - Langostelvis 🦞
        // 5 - Tucapalma 🐊
        // 6 - Pydos 🦖
    let imputHipodoge = document.getElementById("Hipodoge")
    let imputCapipepo = document.getElementById("Capipepo")
    let imputRatigueya = document.getElementById("Ratigueya")
    let imputLangostelvis = document.getElementById("Langostelvis")
    let imputTucapalma = document.getElementById("Tucapalma")
    let imputPydos = document.getElementById("Pydos")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (imputHipodoge.checked){
        alert("Seleccionaste a Hipodoge 🐉")
        spanMascotaJugador.innerHTML = "Hipodoge 🐉"
    } else if (imputCapipepo.checked){
        alert("Seleccionaste a Capipepo 🐳")
        spanMascotaJugador.innerHTML = "Capipepo 🐳"
    } else if (imputRatigueya.checked){
        alert("Seleccionaste a Ratigueya 🐀")
        spanMascotaJugador.innerHTML = "Ratigueya 🐀"
    } else if (imputLangostelvis.checked){
        alert("Seleccionaste a Langostelvis 🦞")
        spanMascotaJugador.innerHTML = "Langostelvis 🦞"
    } else if (imputTucapalma.checked){
        alert("Seleccionaste a Tucapalma 🐊")
        spanMascotaJugador.innerHTML = "Tucapalma 🐊"
    } else if (imputPydos.checked){
        alert("Seleccionaste a Pydos 🦖")
        spanMascotaJugador.innerHTML = "Pydos 🦖"
    } else {
        alert("No has seleccionado tu mascota, intenta de nuevo.")
        reiniciarJuego()
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo (min, max){
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge 🐉"
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo 🐳"
    } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya 🐀"
    }  else if (mascotaAleatoria == 4) {
        spanMascotaEnemigo.innerHTML = "Langostelvis 🦞"
    }  else if (mascotaAleatoria == 5) {
        spanMascotaEnemigo.innerHTML = "Tucapalma 🐊"
    }  else if (mascotaAleatoria == 6) {
        spanMascotaEnemigo.innerHTML = "Pydos 🦖"
    } 
}

// Ataques
function ataqueFuego () {
    ataqueJugador = "Fuego 🔥"
    ataqueAleatorioEnemigo ()
}

function ataqueAgua() {
    ataqueJugador = "Agua 💧"
    ataqueAleatorioEnemigo ()
}

function ataquePlanta () {
    ataqueJugador = "Planta 🌱"
    ataqueAleatorioEnemigo ()
}

function ataqueAleatorioEnemigo (){
    ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego 🔥"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua 💧"
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "Planta 🌱"
    } 
    combate()
    crearMensaje(resultado)
}

// Inicio del combaje
function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("¡La batalla es un empate! 😼")
    } else if ((ataqueJugador == "Fuego 🔥" && ataqueEnemigo == "Planta 🌱") || (ataqueJugador == "Agua 💧" && ataqueEnemigo == "Fuego 🔥") || (ataqueJugador == "Planta 🌱" && ataqueEnemigo == "Agua 💧")){
        crearMensaje("¡Ganaste la batalla! 😸")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("¡Perdiste la batalla! 🙀")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    let sectionMensajes = document.getElementById("Mensajes")
    sectionMensajes.style.display = "block"
    revisarVidas()
}

// Revision de puntos de vida
function revisarVidas(){
    if (vidasJugador == 0){
        crearMensajeFinal("Te quedaste sin vidas, has perdido 😿")
    } else if (vidasEnemigo == 0){
        crearMensajeFinal("¡Felicidades! Tu enemigo se quedo sin vidas, has ganado 😻")
    }
}

// Número aleatorio
function aleatorio(min, max){
    return Math.floor(Math.random()*((max - min + 1) + min))
}

// Mensajes de combate
function crearMensaje (resultado){
    let sectionMensajes = document.getElementById("Mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + " y tu enemigo ataco con " + ataqueEnemigo + ". " + resultado
    sectionMensajes.appendChild(parrafo)
}

// Mensaje de resultado
function crearMensajeFinal (resultadoFinal){
    let sectionMensajes = document.getElementById("Mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
    // Desactivar botones
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.disabled = true
    // Mostrar boton de reinicio
    let sectionSeleccionarReiniciar = document.getElementById("boton-reiniciar")
    sectionSeleccionarReiniciar.style.display = "block"
}

// Reiniciar juego
function reiniciarJuego(){
    location.reload()
}

// Cargar todo el codigo
window.addEventListener("load", iniciarJuego)
