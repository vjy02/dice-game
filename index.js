// Create variables for the game state
let player1Score = 0
let player2Score = 0

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {

    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomNumber2  = Math.floor(Math.random() * 6) + 1;

    player1Score += randomNumber 
    player1Scoreboard.textContent = player1Score
    player1Dice.textContent = randomNumber 


    player2Score += randomNumber2 
    player2Scoreboard.textContent = player2Score
    player2Dice.textContent = randomNumber2



    if (player1Score >= 20 && player2Score >= 20){
        message.textContent = "Tie No Winners 😔"
        showResetButton()
    }
    else if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
