let choices = ["✊", "🤚", "✌"]
let userChoice = -1
let output = document.querySelector("#output")
let compChoice = -1

function rock() {
  compChoice = Math.floor(Math.random() * 3)
  userChoice = 0
  renderWinner()
}
function paper() {
  compChoice = Math.floor(Math.random() * 3)
  userChoice = 1
  renderWinner()
}
function scissors() {
  compChoice = Math.floor(Math.random() * 3)
  userChoice = 2
  renderWinner()
}

function renderWinner() {
  let text = `Computer choose ${choices[compChoice]}, `
  if ((userChoice + 1) % 3 === compChoice) {
    text += "You lose!"
  } else if (userChoice === compChoice) {
    text += "It is tie!"
  } else {
    text += "You won!!"
  }
  output.textContent = text
}
