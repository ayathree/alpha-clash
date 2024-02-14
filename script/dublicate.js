function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    
}

function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
    
}

function addBg(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    
}

function removeBg(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
    
}



function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;

    
}


function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
    
}

function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
    
}

function getText(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
    
}