const btnNumers = document.querySelectorAll('.number');
const btnMathOperators = document.querySelectorAll('.matematical-operators');
const btnEquals = document.querySelector('#equals');
const btnCleanDisplay = document.querySelector('.clean-display');
const btnDeleteNumber = document.querySelector('.delete-number');
const operationsDisplay  = document.querySelectorAll('.operations');
const resultDisplay = document.querySelector('.result')


function addNumber(event){
    const numberClicked = event.target.textContent;
    console.log("Número clicado:", numberClicked);
    
    // Agregamos los números al párrafo con la clase .operations
    operationsDisplay.forEach(display => {
        display.innerText += numberClicked;
    });
}

function addOperators(event) {
    const operatorClicked = event.target.textContent;

    operationsDisplay.forEach(display => {
        display.innerText += operatorClicked;
    });
}

function performOperation(){
    operationsDisplay.forEach(display => {
        const content = display.innerText; // O display.textContent 
        
        resultDisplay.innerHTML = `= ${eval(content)}` ;
    });
}

function cleanDisplay(){
    operationsDisplay.forEach(display=>{
        display.innerText = "";    
    })
    resultDisplay.innerText="";  
}

function deleteLastCharFromDisplay(){
    //imprimir el outertext de operationsDisoplay
    operationsDisplay.forEach((display) => {
        const operationToCorrect = display.outerText;
        const arrOperation = operationToCorrect.split('');
        arrOperation.pop();
        display.innerText = arrOperation.join("");
    })
    
}


btnNumers.forEach((button) => {
    button.addEventListener('click',addNumber);
});

btnMathOperators.forEach((button) => {
    button.addEventListener('click', addOperators);
});


btnEquals.addEventListener('click', performOperation);
btnCleanDisplay.addEventListener('click',cleanDisplay);
btnDeleteNumber.addEventListener('click', deleteLastCharFromDisplay);