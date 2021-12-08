// element variable
const gameDiv = document.getElementById("game");
const colorBtn = document.getElementById("color-button");

let colorOptions = ["black", "purple", "blue", "green", "yellow", "orange", "red"];
let colorIndex = 0;
let color = colorOptions[colorIndex];

// function from stack overflow
function addMultipleEventListeners(element, events, handler) {
    events.forEach(e => element.addEventListener(e, handler))
}


function setUpGame() {
    // clear screen upon reset
    while (gameDiv.firstChild) {
        gameDiv.removeChild(gameDiv.lastChild);
    }

    let sideLength = prompt("Enter a side length for your etch a sketch: ");
    let grid = sideLength * sideLength;
    let boxSize = 100 / sideLength;
    colorBtn.style.backgroundColor = color;

    // create the 16 div grid
    for (let i = 0; i < grid; i++) {
        let gridSquare = document.createElement("div");
        // gridSquare.textContent = i;
        gridSquare.classList.add("grid-box");
        gridSquare.style.width = `${boxSize}%`;
        gridSquare.style.height = `${boxSize}%`;


        // really wanna do a click and drag type color thing here
        
        // let drag = false;
        gridSquare.addEventListener("mousedown", (e) => {
            gridSquare.style.backgroundColor = color;
            // gridSquare.addEventListener("mouseenter", (e) => {
            //     gridSquare.style.backgroundColor = color;
            // })
            // drag = true;
        });

        

        // gridSquare.addEventListener("mouseup", (e) => {
        //     drag = false;
        // })

        

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
    }
    colorBtn.style.backgroundColor = color;
}

function colorChange() {
    colorIndex++;
    if (colorIndex == colorOptions.length) colorIndex = 0;
    color = colorOptions[colorIndex];
    document.getElementById("color-button").style.backgroundColor = color;
}