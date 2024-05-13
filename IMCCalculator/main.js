const btnFemmale = document.querySelector('.female');
const btnMale = document.querySelector('.male');
const clientHeight = document.querySelector('.clients-height');
const inputRange = document.getElementById('height');
const subtractWeight = document.querySelector('.decreast-weight');
const addWeight = document.querySelector('.increase-weight')
const clientWeight = document.querySelector('.clients-weight');
const clientAge = document.querySelector('.clients-age');
const subtracAge = document.querySelector('.decreast-age');
const addAge = document.querySelector('.increase-age');
const btnCalculateImc = document.querySelector('.calculate-imc');
const resultsView = document.querySelector('.view-result');
const attributeView = document.querySelector('.attribute-view');
const pResult = document.querySelector('.result-imc');
const pStatusBmi = document.querySelector('.status-imc');
const backToCalculate = document.querySelector('.back-to-calculate');

let height = 170;
let weight = 30;
let age = 20;



function selectGender(event){
    if(event.target.alt === 'female'){
        btnFemmale.classList.add('genderSelected');
        btnMale.classList.remove('genderSelected');
    }else if(event.target.alt === 'male'){
        btnMale.classList.add('genderSelected');
        btnFemmale.classList.remove('genderSelected');
    }
}

function reduceWeight(){
    weight--;
    clientWeight.innerHTML = weight;
}

function increaseWeight(){
    weight++;
    clientWeight.innerHTML = weight;
}

function reduceAge(){
    age--;
    clientAge.innerHTML = age;
}

function increaseAge(){
    age++;
    clientAge.innerHTML = age;
}




    inputRange.addEventListener('input', ()=> {
    clientHeight.textContent = inputRange.value + " cm";
    height = Number(inputRange.value);
    });

    function selectStatus(height,weight){
        const bmiValue = calculateBmi(height,weight);
        if(bmiValue < 18.5){
            pStatusBmi.textContent = "Underweight";
            pStatusBmi.style.color = "#2E86C1";
        }
        if(bmiValue < 24.9 && bmiValue > 18.5){
            pStatusBmi.textContent = "Normal";
            pStatusBmi.style.color = "#2ECC71";
        }
    
        if(bmiValue > 24.9 && bmiValue < 29.9){
            pStatusBmi.textContent = "Overweight";
            pStatusBmi.style.color = "#F39C12";
        }
    
        if(bmiValue > 30){
            pStatusBmi.textContent = "Obese";
            pStatusBmi.style.color = "#E74C3C";
        }
    }

    function assignValues(height,weight){
        const bmi = calculateBmi(height,weight);
        pResult.innerHTML = bmi;
    }
    
    function calculateBmi(height,weight){
        const bmi = Number (weight / ((height/100) * (height/100)));
        return bmi.toFixed(2);
    }

function goToCalculateImc(){
    attributeView.classList.add('inactive');
    resultsView.classList.remove('inactive');
    assignValues(height,weight);
    selectStatus(height,weight)
}

function backToCalculateBmi(){
    attributeView.classList.remove('inactive');
    resultsView.classList.add('inactive');
}




backToCalculate.addEventListener('click',backToCalculateBmi);
btnFemmale.addEventListener('click',selectGender);
btnMale.addEventListener('click',selectGender);
subtractWeight.addEventListener('click',reduceWeight);
addWeight.addEventListener('click',increaseWeight);
subtracAge.addEventListener('click',reduceAge)
addAge.addEventListener('click',increaseAge);
btnCalculateImc.addEventListener('click',goToCalculateImc);




