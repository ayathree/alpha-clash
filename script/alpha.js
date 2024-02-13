// function play() {
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
    
// }
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