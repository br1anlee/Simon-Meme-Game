// Put the button colors into an array [red = 0, blue = 1, green = 2, yellow = 3]
let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let playerClickedColor = [];

let gameStatus = true;

let level = 0

let timer = 5

// Create a function that randomly generates a number from 0 - 3 (1 to 4)
function nextSequence() {
    level ++;
    levelTitle.innerText = "Level " + level
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    document.getElementById(randomChosenColor).classList.add('add');
    gamePattern.push(randomChosenColor);
    setTimeout(() => {
        document.getElementById(randomChosenColor).classList.remove('add')
    }, 500);
}

// GAME win/lose conditional  
function checkGame (currentLevel) {
    if (gamePattern[currentlevel] === playerClickedColor[currentlevel]) {
        console.log("success")
} if (gamePattern.length === playerClickedColor.length){
    setTimeout(function() {
        nextSequence();
    }, 1000);
} else {
    console.log("wrong!")
}
}




//GAME START
const levelTitle = document.querySelector('#levelTitle')
document.addEventListener('keypress', function (event) {
    if (event.key == 'Enter' && gameStatus == true) {
        gameStatus = false;
        nextSequence()
        checkGame(playerClickedColor.length-1);
    }
})

// GAME BUTTONS
const button = document.querySelectorAll(".btn")

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click',function() {
        let color = button[i].id;
        playerClickedColor.push(color); 
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