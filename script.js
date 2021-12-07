// element variable
const gameDiv = document.getElementById("game");

let colorOptions = ["black", "purple", "blue", "green", "yellow", "orange", "red"];
let colorIndex = 0;
let color = colorOptions[colorIndex];

function setUpGame() {
    // clear screen upon reset
    while (gameDiv.firstChild) {
        gameDiv.removeChild(gameDiv.lastChild);
    }

    let sideLength = prompt("Enter a side length for your etch a sketch: ");
    let grid = sideLength * sideLength;
    let boxSize = 100 / sideLength;

    // create the 16 div grid
    for (let i = 0; i < grid; i++) {
        let gridSquare = document.createElement("div");
        // gridSquare.textContent = i;
        gridSquare.classList.add("grid-box");
        gridSquare.style.width = `${boxSize}%`;
        gridSquare.style.height = `${boxSize}%`;

        gridSquare.addEventListener("mousedown", (e) => {
            
        });

        gameDiv.appendChild(gridSquare);
    }
}

setUpGame();

const gameSquares = gameDiv.childNodes;

function clearCurrentBoard() {
    for (let i = 0; i < gameSquares.length; i++) {
        let gameSquare = gameSquares[i];
        gameSquare.classList.remove("hover");
        gameSquare.style.backgroundColor = "";
        document.getElementById("color-button").style.backgroundColor = "";
    }
}

function colorChange() {
    colorIndex++;
    if (colorIndex == colorOptions.length) colorIndex = 0;
    color = colorOptions[colorIndex];
    document.getElementById("color-button").style.backgroundColor = color;
}