// Create an array with all the button colors
let buttonColors = ['red', 'blue', 'green', 'yellow'];

// Create an array with the computer choosing the pattern 
let gamePattern = [];

// Create an array with the chosen colors from the player
let playerClickedColor = [];

// Game is off (false), gets updated once enter is pressed (when keypress function is triggered)
let gameStarted = false;

// game level starts at 0 & updated in nextSequence()
let level = 0

// Button inputs requirement to input depending on the level
let buttonInputRequirementLevel = 1
// When clicking start button, game board pops while the main menu screen disappears
const playButton = document.querySelector('.playButton')
const instructionBtn = document.querySelector('.instruction')
const gameBoard = document.querySelector('#gameBoard')
function startGameMenu () {
    playButton.classList.add('hidden');
    instructionBtn.classList.add('hidden');
    gameBoard.classList.remove('hidden');
    gameReturnBtn.classList.remove('hidden');
}
// Event listener for game start button
playButton.addEventListener('click', startGameMenu)

// Instruction Page
const instructionScreen = document.querySelector('.instructionScreen')
const returnButton = document.querySelector('.returnButton')

function instructionPageMenu () {
    playButton.classList.add('hidden');
    instructionBtn.classList.add('hidden')
    instructionScreen.classList.remove('hidden');
    returnButton.classList.remove('hidden');
    gameReturnBtn.classList.add('hidden');

}

// Return button that returns from the instruction page
function returnPageMenu () {
    playButton.classList.remove('hidden');
    instructionBtn.classList.remove('hidden');
    returnButton.classList.add('hidden');
    instructionScreen.classList.add('hidden');
    gameReturnBtn.classList.add('hidden');
    gameBoard.classList.add('hidden');
}
// Event listeners for the instruction page and return button
returnButton.addEventListener('click', returnPageMenu)
instructionBtn.addEventListener('click', instructionPageMenu)


// Game Screen return Button
const gameReturnBtn = document.querySelector('.gameReturnBtn')

// Event listener for return button in gameboard to return to main menu
gameReturnBtn.addEventListener('click', returnPageMenu)


// Pressing enter to start the game
const levelTitle = document.querySelector('#levelTitle')
document.addEventListener('keypress', function (event) {
    if (event.key == 'Enter' && !gameStarted) {
        gameStarted = true;
        levelTitle.innerText = "Level " + level
        nextSequence()
    }
})


// Create a function that randomly generates a number between 0 - 3 (1 - 4)
function nextSequence() {
    level ++;
    // resets at every level 
    playerClickedColor = [];
    levelTitle.innerText = "Level " + level
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    document.getElementById(randomChosenColor).classList.add('add');
    setTimeout(() => {
        document.getElementById(randomChosenColor).classList.remove('add')
    }, 1000);
}


// Game buttons are responsive and logs the id into the player chosen array
const button = document.querySelectorAll(".btn")

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click',function() {
        let color = button[i].id;
        playerClickedColor.push(color); 
        checkGame();
       })
}

// Game win conditional
function checkGame () {
    if (gamePattern[buttonInputRequirementLevel - 1] === playerClickedColor[buttonInputRequirementLevel - 1]) {
    } else {
        gameStarted = false;
}
    if (buttonInputRequirementLevel === level){
        buttonInputRequirementLevel = 1;
    setTimeout(function() {
        nextSequence();
    }, 1000);
} else {
    buttonInputRequirementLevel++; 
    }
}



// Game lose conditional
function loseGame () {
    // 
}