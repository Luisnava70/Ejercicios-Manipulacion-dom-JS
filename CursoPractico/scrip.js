/* alert("si funciono")
let respuesta;

while (respuesta != '6'){
    let pregunta= prompt("Cuanto es 3 + 3?");
    respuesta = pregunta;
    if(respuesta == '6'){
        console.log("Que inteligente");
    }else{
        console.log("Que burro");
    }
} */

const title = document.querySelector('h1');
const input1 = document.querySelector('#calculo-1');
const input2 = document.querySelector('#calculo-2');
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('#result');
const form = document.querySelector('#formulario');

title.addEventListener('click', () => {
    const colorRandom = Math.floor(Math.random() * 256);
    console.log(colorRandom);
    title.style.color = `rgb(${colorRandom +10}, ${colorRandom +50}, ${colorRandom +24})`;
});

title.innerHTML = "Curso Basico de Manejo del DOM";
title.setAttribute('class','titulo');

btn.addEventListener('click', btnOnclick);

function btnOnclick(event){
    console.log(event);
    event.preventDefault(); //evita que se recargue la pagina al hacer click en el boton
    const suma = Number(input1.value) + Number(input2.value);
    //alert(`La suma de ${Number(input1.value)} y ${Number(input2.value)} es: ${suma}`);
    result.innerHTML = `${Number(input1.value)} + ${Number(input2.value)} = ${suma}`;
}

/* document.createElement('img'); */ // Crea un elemento img vacío

// Agregar atributo a un elemento
/* const newImg = document.createElement('img');
newImg.src = '../PaperRockCissor/Assets/icons8-hand-30.png';
newImg.alt = 'Imagen de perrito';

document.body.appendChild(newImg); */

//ejemplo de como agregar una imagen a una etiqueta picture
//picture.append(newImg)
//appendChild



