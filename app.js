const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice //we save it globally so we can access it wherever
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
})) //in each event listener to listen out for a click on any of the buttons, then pass it through a function () => {} pass in event (e)

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 //or you can use * 3 coz there are 3 choices
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "scissors"
    }
    if (randomNumber ===3) {
        computerChoice = "paper"
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "its a draw!"
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "you win!"
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "you lose!"
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "you lose!"
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "you win!"
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "you lose!"
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "you won!"
    }
    
    resultDisplay.innerHTML = result

}