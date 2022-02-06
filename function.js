// Put the button colors into an array [red = 0, blue = 1, green = 2, yellow = 3]
buttonColors = ["red", "blue", "green", "yellow"]

gamePattern = []

// const randomChosenColor = nextSequence(buttonColors)

// Create a function that randomly generates a number from 0 - 3 (1 to 4)
let = nextSequence = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
}


// GAME BUTTONS
const button = document.querySelectorAll(".btn")

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click',function () {
        console.log("Button has been clicked")
    })
}



//MAIN MENU DISAPPEAR ONCE START BUTTON
const playButton = document.querySelector('.playButton')
const instructionBtn = document.querySelector('.instruction')
const gameBoard = document.querySelector('#gameBoard')
function startGame () {
    playButton.classList.add('hidden');
    instructionBtn.classList.add('hidden');
    gameBoard.classList.remove('hidden');

}

playButton.addEventListener('click', startGame)


//INSTRUCTION PAGE & RETURN BUTTON
const instructionScreen = document.querySelector('.instructionScreen')
const returnButton = document.querySelector('.returnButton')
function instructionPage () {
    playButton.classList.add('hidden');
    instructionBtn.classList.add('hidden')
    instructionScreen.classList.remove('hidden');
    returnButton.classList.remove('hidden')

}

function returnPage () {
    playButton.classList.remove('hidden')
    instructionBtn.classList.remove('hidden')
    returnButton.classList.add('hidden')
    instructionScreen.classList.add('hidden')
}
returnButton.addEventListener('click', returnPage)
instructionBtn.addEventListener('click', instructionPage)

