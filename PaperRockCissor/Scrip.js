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

const startGame = document.querySelector('.start-game');
const mainRing = document.querySelector('.main-ring');
const powerSecction = document.querySelector('.powers');
const picturePowers = document.querySelector('.picture-powers');
const playerPic = document.querySelector('.player');
const pcSlection = document.querySelector('machine');
const powerSlectImg = document.createElement('img');
const powerPcSlect = document.createElement('img');

/* const piedra = document.querySelector('#piedra');
const tijera = document.querySelector( '#tijera' );
const papel = document.querySelector( '#papel'); */
const powersList = [];
const player = {
    namePower: ''
}; 
const pc = {
    namePower: ''
};

powersList.push({
    name: 'Piedra',
    img:'./Assets/icons8-puño-100.png'
});

powersList.push({
    name: 'Tijera',
    img:'./Assets/icons8-hand-peace-100.png'
});

powersList.push({
    name:'Papel',
    img:'./Assets/icons8-hand-30.png'
});

function choosePower(){
    mainRing.classList.add('inactive');
    powerSecction.classList.remove('inactive');
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+1);
}

function selectPower(imgPower, powerName) {
    let randomIndex = aleatorio(0,2);
    powerSlectImg.src = imgPower;
    powerSlectImg.alt = "Play of player";
    playerPic.appendChild(powerSlectImg);
    const powerSelectName = powerName;
    player.namePower = powerSelectName;
    console.log(player);
    pcPower(randomIndex);
    console.log(randomIndex);
}

function renderPowers(powerArr){
    for(power of powerArr){
        const powerImg = document.createElement('input');
        powerImg.type='image';
        powerImg.src=power.img;
        powerImg.name = power.name;
        powerSecction.appendChild(picturePowers);
        picturePowers.appendChild(powerImg);
        // Agregar el evento
        powerImg.addEventListener('click', function (){
            const selectedPower = this.getAttribute('name');
            const imgPower = this.src; 
            console.log(`Escogiste ${selectedPower}`);
            powerSecction.classList.add('inactive');
            mainRing.classList.remove('inactive');
            //le pasamos los parametros de la imagen y el nombre
            selectPower(imgPower,selectedPower);
        });
    }
}



function pcPower(powerNum){
    
}

renderPowers(powersList);
startGame.addEventListener('click', choosePower);