const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice //we save it globally so we can access it wherever

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice

})) //in each event listener to listen out for a click on any of the buttons, then pass it through a function () => {} pass in event (e)