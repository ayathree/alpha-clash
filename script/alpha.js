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

    // stop the game if pressed 'esc'
    if(playPressed === 'Escape'){
        gameOver();
    }


    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alpha');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playPressed, expectedAlphabet);

    // check matched or not
    if(playPressed === expectedAlphabet){
        console.log('you win');
        // score update
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        // increase the score
        const newScore = currentScore + 1;
        // show the update score
        currentScoreElement.innerText = newScore;
        console.log('you have pressed correctly', expectedAlphabet);

        // for remove the background color of pressed key
        removeBg(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lose');
        // get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // reduce the life count
        const newLife = currentLife - 1;

        // display the updated life count
        currentLifeElement.innerText = newLife;
// game-over
        if (newLife === 0) {
            gameOver();
            
        }
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
    hideElement('final-score');
    showElement('play-ground');

    // reset life and score

    setElementValueById('current-life' , 5);
    setElementValueById('current-score', 0);


    




    continueGame();

    
}

function gameOver() {
   hideElement('play-ground');
   showElement('final-score'); 

//    update final score
const lastScore = getElementValueById('current-score');
setElementValueById('last-score', lastScore);


// clear the last key bg
const currentAlphabet =getText('current-alpha');
removeBg(currentAlphabet);

}