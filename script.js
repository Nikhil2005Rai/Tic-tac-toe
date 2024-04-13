const cells = document.querySelectorAll(".cell")
const newBtn = document.querySelector(".btn")
const displayBoard = document.querySelector(".displayTurns")

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let gameBoard = ["", "", "", "", "", "", "", "", ""]

//x=> will start the game for now
let moveNumber = 0
let functionEnable = true
function cellClicked() {
    if (functionEnable) {
        cells.forEach(element => {
            element.addEventListener("click", () => {
                if (gameBoard[parseInt(element.id)] === "") {
                    if (moveNumber % 2 === 0) {
                        gameBoard[parseInt(element.id)] = "X"
                    } else {
                        gameBoard[parseInt(element.id)] = "O"
                    }
                    element.innerHTML = gameBoard[parseInt(element.id)]
                    moveNumber++
                    console.log(gameBoard)
                    display()
                    checkWinner()

                }
            })
        });
    }
}

function display(text = "") {
    if (text === "") {
        if (moveNumber % 2 === 0) {
            displayBoard.innerHTML = "X's Turn"
        } else {
            displayBoard.innerHTML = "O's Turn"
        }
    }
    else {
        displayBoard.innerHTML = text
    }
}




function checkWinner() {
    let xIndex = []
    let oIndex = []
    for (let index = 0; index < gameBoard.length; index++) {
        if (gameBoard[index] === "X") {
            xIndex.push(index)
        }
        if (gameBoard[index] === "O") {
            oIndex.push(index)
        }
    }
    for (let i = 0; i < winningConditions.length; i++) {
        const condition = winningConditions[i]
        if (condition.every(index => xIndex.includes(index))) {
            display("X WON!!!")
            
        }
        if (condition.every(index => oIndex.includes(index))) {
            display("O WON!!!")
        }
        console.log(displayBoard.innerHTML)
    }
    if (moveNumber === 9 && displayBoard.innerHTML !== "X WON!!!" && displayBoard.innerHTML !== "O WON!!!") {
        display("It's a DRAW :)");
    }
    
}
display()

cellClicked()

newBtn.addEventListener("click", () => {
    gameBoard = ["", "", "", "", "", "", "", "", ""]
    displayBoard.innerHTML = "X's Turn"
    moveNumber = 0
    cells.forEach(element => {
        element.innerHTML = ""
    })
})