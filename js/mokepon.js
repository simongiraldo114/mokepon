const seleccionarReiniciar = document.getElementById("reiniciar")
const botonMascotajugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("bonton-fuego")
const botonAgua = document.getElementById("bonton-agua")
const botonTierra = document.getElementById("bonton-tierra")
const sectionseleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionseleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodige = document.getElementById("Hipodoge")
const inputcagpipepo = document.getElementById("Capipepo")
const inputRatugueya = document.getElementById("Ratigueya")
const spanMascotajugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo =document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedor-de-targetas")

let mokepones = []
let opcionesDeMokepones
let ataqueJugador
let ataqueEnemigo
let VidasEnemigo = 3
let VidasJugador = 3
class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataues = []
    }
}

let Hipodoge = new Mokepon("Hipodoge","./acses/mokepons_mokepon_hipodoge_attack.png", 5)
let Capipepo = new Mokepon("Capipepo","./acses/mokepons_mokepon_capipepo_attack.png",5)
let Ratigueya =new Mokepon("Ratigueya","./acses/mokepons_mokepon_ratigueya_attack.png",5)

Hipodoge.ataues.push(
    {nombre: "💧", id:"botonAgua"},
    {nombre: "💧", id:"botonAgua"},
    {nombre: "💧", id:"botonAgua"},
    {nombre: "🔥", id:"botonFuego"},
    {nombre: "🌱", id:"botonTierra"},
)
Capipepo.ataues.push(
    {nombre: "🌱", id:"botonTierra"},
    {nombre: "🌱", id:"botonTierra"},
    {nombre: "🌱", id:"botonTierra"},
    {nombre: "🔥", id:"botonFuego"},
    {nombre: "💧", id:"botonAgua"},
)
Ratigueya.ataues.push(
    {nombre: "🔥", id:"botonFuego"},
    {nombre: "🔥", id:"botonFuego"},
    {nombre: "🔥", id:"botonFuego"},
    {nombre: "💧", id:"botonAgua"},
    {nombre: "🌱", id:"botonTierra",}
)

mokepones.push(Hipodoge,Capipepo,Ratigueya)

function iniciarJuego() {
    sectionseleccionarAtaque.style.display = "none"
    mokepones.forEach((mokepon) => {
        opcionesDeMokepones = `
        <input type="radio" name="mascotas" id=${mokepon.nombre}> 
        <label class="targeta-de-mokepon" for=${mokepon.nombre}>
           <p>H${mokepon.nombre}</p> 
           <img src=${mokepon.foto} alt=${mokepon.nombre}">
        </label>
        `
    contenedorTarjetas.innerHTML += opcionesDeMokepones
    }
    )
    seleccionarReiniciar.style.display = "none"
    botonMascotajugador.addEventListener("click",selecionarMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataquetierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}
 function selecionarMascotaJugador(){
    sectionseleccionarMascota.style.display = "none"
    sectionseleccionarAtaque.style.display = "flex"

    if(inputHipodige.checked){
        spanMascotajugador.innerHTML = "Hipodoge"
    }else if(inputcagpipepo.checked){
        spanMascotajugador.innerHTML = "Capipepo"
    }else if(inputRatugueya.checked){
        spanMascotajugador.innerHTML = "Ratigueya"
    }else { alert("selecciona una mascota")
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    
    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataquetierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }else {
        ataqueEnemigo == "TIERRA"}

    combate()
    
}
function combate(){

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo
    }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo
    }else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANSTE")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo
    }else {crearMensaje("PERDISTE")
    VidasJugador--
    spanVidasJugador.innerHTML = VidasJugador
    }
    revisarVidas() 
}
function revisarVidas(){
    if(VidasEnemigo == 0){
        crearMensajeFinal("GANASTE ESTA PARTIDA")
    }else if(VidasJugador == 0){
        crearMensajeFinal("PERDISTE NOS VERMOS EN LA PROXIMA")
    }
}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    seleccionarReiniciar.style.display = "block"
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}
 function reiniciarJuego(){
    location.reload()
}
  
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)}
    
window.addEventListener("load", iniciarJuego)