
const startGame = document.querySelector('.start-game');
const mainRing = document.querySelector('.main-ring');
const powerSecction = document.querySelector('.powers');
const picturePowers = document.querySelector('.picture-powers');
const playerPic = document.querySelector('.player');
const pcSlection = document.querySelector('.machine');
const resulMatch = document.querySelector('.game-result');
const playerScore = document.querySelector('.player-score');
const pcScore = document.querySelector('.pc-score')
const powerSlectImg = document.createElement('img');
const powerPcSlect = document.createElement('img');


/* const piedra = document.querySelector('#piedra');
const tijera = document.querySelector( '#tijera' );
const papel = document.querySelector( '#papel'); */
const powersList = [];
const player = {
    namePower: '',
}; 
const pc = {
    namePower: '',
};
let pcPoints = 0;
let playerPoints = 0;

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

function aleatorio(){
    var randomNumber = Math.random();
    var randomNumberInRange = Math.floor(randomNumber * 3);
    return randomNumberInRange;
}

function selectPower(imgPower, powerName) {
    let randomIndex = aleatorio();
    powerSlectImg.src = imgPower;
    powerSlectImg.alt = "Play of player";
    playerPic.appendChild(powerSlectImg);
    const powerSelectName = powerName;
    player.namePower = powerSelectName;
    pcPower(randomIndex);
    console.log(player.namePower == pc.namePower);
    whoWin(player,pc);
    /*  console.log(player);
    console.log(randomIndex); */
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
    const powerPc = powersList[powerNum];
    powerPcSlect.src=powerPc.img;
    pcSlection.appendChild(powerPcSlect);
    pc.namePower =  powerPc.name;
    return pc.namePower
}

function whoWin(player,pc){
    if(player.namePower == pc.namePower){
        console.log("Empate");
        resulMatch.innerHTML="¡Empataron!";
    }else if(player.namePower == 'Piedra' && pc.namePower=='Tijera'){
        console.log("Gano el player");
        resulMatch.innerHTML="¡Has ganado!";
        playerPoints++;
        playerScore.innerHTML=playerPoints;
    }else if(player.namePower == 'Tijera' && pc.namePower=='Papel'){
        console.log("Gano el player");
        resulMatch.innerHTML="¡Has ganado!";
        playerPoints++;
        playerScore.innerHTML=playerPoints;
    }else if(player.namePower == 'Papel' && pc.namePower=='Piedra'){
        console.log("Gano el player");
        resulMatch.innerHTML="¡Has ganado!";
        playerPoints++;
        playerScore.innerHTML=playerPoints;
    }else{
        console.log("Gano la pc");
        resulMatch.innerHTML="¡La Pc Ganó!";
        pcPoints++;
        pcScore.innerHTML=pcPoints;
    }
}

renderPowers(powersList);
startGame.addEventListener('click', choosePower);