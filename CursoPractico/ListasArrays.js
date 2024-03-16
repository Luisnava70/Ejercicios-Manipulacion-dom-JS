// arrays en js
//arrays son una estructura de datos que nos permite almacenar varios valores en una sola variable. 
//Podemos crear un array vacío con la palabra reservada "Array" o sin ella, simplemente utilizando llaves {}.

let miArray = [];
console.log(miArray);

//¿Que es un objeto?
//Un objeto es una agrupación de propiedades y métodos, lo que le da a los objetos una gran flexibilidad para almacenar información y realizar oper
//Los objetos en JavaScript son contenedores para almacenar propiedades y métodos. Estas propiedades se conocen como atributos y los métodos se
//Los objetos en JavaScript son contenedores para almacenar propiedades y métodos. Cualquier cosa que se pueda describir puede ser considerada como un objet
const obj = {
    nombre: "Luis",
    edad: "Nava",
    estudiantes: true
};
console.log(obj)

console.log(obj.nombre == "Luis");

//imprimir con un foreach


//agregar a un array
miArray.push("Hola");
miArray.push("Claro");

function imprimirElementos(array){
    array.forEach((elemento, indice) =>{
        console.log(`${indice} : ${elemento}`);
    });
}

imprimirElementos(miArray);

function imprimirElementoObj(miObj){
    for (const key in miObj) {
        if (miObj.hasOwnProperty(key)) {
            console.log(`Propiedad ${key}: ${miObj[key]}`);
        }
        
    }
}

imprimirElementoObj(obj);

//convertir un obj en arrar
const objArr = Object.entries(obj);
console.log(objArr);

//obtener valores de un obj
const values = Object.values(obj);
console.log(values);

//obtener propiedades de un obj
const props = Object.keys(obj);
console.log(props);

const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de platzi durante un mes",
    expert: "Puedes tomar todos los cursos durante todo el año",
    expertduo: "La misma tarifa que expert plus, pero solo por dos personas"
};

function suscription(typeSub){
    return `Tipo de Suscripción: ${tiposDeSuscripciones[typeSub] || 'No existe este tipo de suscripción'}`;
}

console.log(suscription("expertduo"));