// function play() {
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
    
// }

// keyboard connection
function handleKeyboardButtonPress(event) {
    const playPressed = event.key;
    // get what i have press
    console.log( 'i have pressed',playPressed);

    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alpha');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playPressed, expectedAlphabet);

    // check matched or not
    if(playPressed === expectedAlphabet){
        console.log('you win');
        console.log('you have pressed correctly', expectedAlphabet);
        // for remove the background color of pressed key
        removeBg(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lose');
    }
    
}
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet)
    const currentAlphabet = document.getElementById('current-alpha');
    currentAlphabet.innerText = alphabet;

    addBg(alphabet);
}
function play() {
    hideElement('home-screen');
    showElement('play-ground');
    continueGame();

    
}