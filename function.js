// 95% done with my MVP (I just need to work on the win condition and do some polishing with cs)sc
// roadblock - going back to my javascript to rewrite certain codes where I am not using dry code


// Put the button colors into an array [red = 0, blue = 1, green = 2, yellow = 3]
let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
// an array that is created from nextSequence() ID is randomly taken from the button and is inputted into this array (as a color)

let playerClickedColor= []
// array that is created from the btns that the player clicked

let gameStarted = false;
// game is off (false), gets updated on the function with keypress (enter)

let level = 0
// game level starts at 0, gets updated in nextSequence()

let inputLevels = 1


//GAME START
const levelTitle = document.querySelector('#levelTitle')
document.addEventListener('keypress', function (event) {
    if (event.key == 'Enter' && !gameStarted) {
        gameStarted = true;
        levelTitle.innerText = "Level " + level
        nextSequence()
    }
})
// Create a function that randomly generates a number from 0 - 3 (1 to 4)
function nextSequence() {
    level ++;
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

function lose () {
    // Stop the function nextSequence from running
    if (inputLevels != gamePattern.length) {
        gamePattern = []
        gameStarted = false;
        level = 0
        levelTitle.innerText = "You lost!"
    }
    // Make buttons unclickable


    // Tell the user that you lost


}


// GAME win/lose conditional  
function checkGame () {
    if (gamePattern[inputLevels - 1] === playerClickedColor[inputLevels - 1]) {
    } else {
        gameStarted = false;
        return nextSequence()
        levelTitle.innerText = "You lost!"


}

if (inputLevels === gamePattern.length){
    inputLevels = 1;
    setTimeout(function() {
        nextSequence();
    }, 1000);
} else if {
    inputLevels++;
}  else {
    lose()
}
]


// GAME BUTTONS
const button = document.querySelectorAll(".btn")

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click',function() {
        let color = button[i].id;
        playerClickedColor.push(color); 
        checkGame();
       })
}


//MAIN MENU DISAPPEAR ONCE START BUTTON
const playButton = document.querySelector('.playButton')
const instructionBtn = document.querySelector('.instruction')
const gameBoard = document.querySelector('#gameBoard')
function startGameMenu () {
    playButton.classList.add('hidden');
    instructionBtn.classList.add('hidden');
    gameBoard.classList.remove('hidden');
    gameReturnBtn.classList.remove('hidden');
}

playButton.addEventListener('click', startGameMenu)


//INSTRUCTION PAGE & RETURN BUTTON
const instructionScreen = document.querySelector('.instructionScreen')
const returnButton = document.querySelector('.returnButton')

function instructionPageMenu () {
    playButton.classList.add('hidden');
    instructionBtn.classList.add('hidden')
    instructionScreen.classList.remove('hidden');
    returnButton.classList.remove('hidden');
    gameReturnBtn.classList.add('hidden');

}

function returnPageMenu () {
    playButton.classList.remove('hidden');
    instructionBtn.classList.remove('hidden');
    returnButton.classList.add('hidden');
    instructionScreen.classList.add('hidden');
    gameReturnBtn.classList.add('hidden');
    gameBoard.classList.add('hidden');
}
returnButton.addEventListener('click', returnPageMenu)
instructionBtn.addEventListener('click', instructionPageMenu)


// GAME SCREEN RETURN BUTTON
const gameReturnBtn = document.querySelector('.gameReturnBtn')

gameReturnBtn.addEventListener('click', returnPageMenu)