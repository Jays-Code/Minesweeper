let board = [];
let rows = 8;
let columns = 8;

let gameState = "inProgress"; // Possible values: 'inProgress', 'won', 'lost'

let minesCount =  5;
let minesLocation = []; // Array to store mine positions, e.g., [{ row: 2, col: 3 }, { row: 4, col: 5 }, ...]

let tilesClicked = 0; //with the goal being to click all tiles not containg mines

let flagsPlaced = 0;

let elapsedTime = 0;

/* dont have to use this yet, but recommended from chatgpt:
let adjacentTiles = []; // 2D array to store the adjacent tiles for each cell
*/


function startGame () {
    console.log("startGame function called");
    document.getElementById("mines-count").innerText = minesCount;
    console.log("minesCount should be updated as this log is within the startGame function")}
startGame();



/* --- this is when I was having trouble updating the mines-count html id. ChatGPT recommended
adding an eventListener to when the DOM was fully loaded, and it worked. However it also
identified that I had my html script src tag before the body opening, and I moved it to right
before the closing of the body, so I was able to forego this eventListener.
document.addEventListener("DOMContentLoaded", function(){
    let minesCount =  5;
    function startGame () {
        console.log("startGame function called");
        document.getElementById("mines-count").innerText = minesCount;
        console.log("minesCount should be updated as this log is within the startGame function")}
        startGame();
    });
*/
        






