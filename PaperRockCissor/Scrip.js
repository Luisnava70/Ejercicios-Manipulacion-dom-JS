/* function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+1);
}

function eleccion(jugada){
    let result = "";
    if(jugada == 1){
        result = "🪨";
    }else if(jugada == 2){
        result = "📄";
    }else if(jugada == 3){
        result = "✂️";
    }

    return result;
}

function  partida(pc, jugador) {
    // 1 = piedra, 2 = papel, 3 = tijera
    if (pc == jugador){
        alert("Empate");
    }else if(jugador == 1 && pc == 3) {
        alert("Has ganado esta ronda!");
        triunfos++;
    }else if(jugador == 2 && pc == 1){
        alert("Has ganado esta ronda!");
        triunfos++;
    }else if(jugador == 3 && pc == 2){
        alert("Has ganado esta ronda!");
        triunfos++;
    }else {
        alert("Pc gano!")
        perdidas++;
    }

    console.log(triunfos + " - " + perdidas);

}
    

// 1 = piedra, 2 = papel, 3 = tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3);
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
    if(jugador == ""){
        jugador = 1;
    }
    alert(eleccion(pc) + ' vs ' + eleccion(jugador));
    //Combate
    partida(pc,jugador);
} */


function iniciarJuego(){
    const sectionPowers = document.querySelector('.powers'); // Mover la definición de sectionPowers dentro de iniciarJuego()
    const ring = document.querySelector(".main-ring");

    function seleccionPiedra (){
        console.log("Piedra");
        sectionPowers.style.display = 'none';
        ring.style.display = 'flex'
    }

    function seleccionPapel (){
        console.log("Papel");
        sectionPowers.style.display = 'none';
        ring.style.display = 'flex'
    }

    function seleccionTijera (){
        console.log("Tijera");
        sectionPowers.style.display = 'none';
        ring.style.display = 'flex'
    }

    let piedra = document.getElementById('piedra');
    let papel = document.getElementById('papel');
    let tijera = document.getElementById('tijera');
    piedra.addEventListener('click', seleccionPiedra);
    papel.addEventListener('click',seleccionPapel);
    tijera.addEventListener('click',seleccionTijera);
}

window.addEventListener( 'load', iniciarJuego);




window.addEventListener( 'load', iniciarJuego);






