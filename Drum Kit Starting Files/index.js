let btns = document.querySelectorAll('.drum');

const instrumentalSounds = [
    './sounds/crash.mp3',
    './sounds/kick-bass.mp3',
    './sounds/snare.mp3',
    './sounds/tom-1.mp3',
    './sounds/tom-2.mp3',
    './sounds/tom-3.mp3',
    './sounds/tom-4.mp3'
];

function shadeButton(){
    this.classList.add('pressed');
    setTimeout(() => boton.classList.remove('pressed'), 200);
}

btns.forEach((boton,index) => {
    boton.addEventListener('click', () => {
        let audio = new Audio(instrumentalSounds[index]);
        audio.play();
        //change the color of the letter which is on the botton, for 2 seconds
        boton.classList.add('pressed');
        setTimeout(() => boton.classList.remove('pressed'), 200);
        console.log(boton.innerHTML);
    } );
});

// haremos que las teclas activen un sonido
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            let audio0 = new Audio(instrumentalSounds[0]);
            audio0.play();
            btns[0].classList.add('pressed');
            setTimeout(() => btns[0].classList.remove('pressed'), 200);
            break;
        case 'a':
            let audio1 = new Audio(instrumentalSounds[1]);
            audio1.play();
            btns[1].classList.add('pressed');
            setTimeout(() => btns[1].classList.remove('pressed'), 200);
            break;
        case 's':
            let audio2 = new Audio(instrumentalSounds[2]);
            audio2.play();
            btns[2].classList.add('pressed');
            setTimeout(() => btns[2].classList.remove('pressed'), 200);
            break;
        case 'd':
            let audio3 = new Audio(instrumentalSounds[3]);
            audio3.play();
            btns[3].classList.add('pressed');
            setTimeout(() => btns[3].classList.remove('pressed'), 200);
            break;
        case 'j':
            let audio4 = new Audio(instrumentalSounds[4]);
            audio4.play();
            btns[4].classList.add('pressed');
            setTimeout(() => btns[4].classList.remove('pressed'), 200);
            break;
        case 'k':
            let audio5 = new Audio(instrumentalSounds[5]);
            audio5.play();
            btns[5].classList.add('pressed');
            setTimeout(() => btns[5].classList.remove('pressed'), 200);
            break;
        case 'l':
            let audio6 = new Audio(instrumentalSounds[6]);
            audio6.play();
            btns[6].classList.add('pressed');
            setTimeout(() => btns[6].classList.remove('pressed'), 200);
            break;
        default:
            console.log("Error");
            break;
    }
});