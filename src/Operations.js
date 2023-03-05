
let targText = document.getElementById("targetNum")
let startText = document.getElementById("startNum")
let operations = document.getElementById("ops")

let winStage = document.getElementById("Win")
let playAgain = document.getElementById("playAgain")


let currOps = 0

var targVal = Math.floor(Math.random() * 100)
var startVal = Math.floor(Math.random() * 100)

function addOne() {
    if (startVal < 100) {
        startVal++
        currOps++
        checkMatch() 
    }
    startText.textContent = startVal
    operations.textContent = currOps
}

function subtractOne() {
    if (startVal > 0) {
        startVal--
        currOps++
        checkMatch() 
    }
    startText.textContent = startVal
    operations.textContent = currOps

}

function multiplyBy2() {
    if (startVal * 2 < 100) {
        startVal *= 2
        currOps++
        checkMatch() 
    }
    startText.textContent = startVal
    operations.textContent = currOps
}

function divideBy2() {
    if (Math.floor(startVal / 2) > 0) {
        startVal = Math.floor(startVal / 2)
        currOps++
        checkMatch() 
    }
    startText.textContent = startVal
    operations.textContent = currOps
}

targText.textContent = targVal
startText.textContent = startVal

function checkMatch() {
  if (startVal === targVal) {
    console.log("You have reach the target value in " + operations + " operations.")
    winStage.textContent = "Congratulations! You have reached the target value in " + currOps + " operation(s). Can you do better?"
  }

}

function restartGame() {
    winStage.textContent = ""
    currOps = 0
    targVal = Math.floor(Math.random() * 100)
    startVal = Math.floor(Math.random() * 100)
    operations.textContent = 0

    startText.textContent = startVal
    targText.textContent = targVal
}

export {addOne, subtractOne, multiplyBy2, divideBy2, restartGame};




   

   

    