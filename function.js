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





// Toasty for instructions
let option = {
    animation: true
}
document.querySelector("#toastbtn").onclick = function () {
    const myAlert = document.getElementById("EpicToast");
    const bsAlert = new bootstrap.Toast(myAlert, option);
    bsAlert.show();
}