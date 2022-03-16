// Consegna
// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// BONUS:
// L'utente indica un livello di difficoltà, in base al livello scelto la griglia conterrà un range diverso:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

/* 
Useful info:

-Make a game square grid.

-In this we'll gonna put ten cells.

-In this cells we have to put a number from 1 to 100.

-When the user click each cell, the color cell became light blue

*/
/************************ FUNCTIONS */

//these function make the cells
function makeTheCell() {
  const item = document.createElement("div");

  // add the class cellStyle in each div cell

  item.classList.add("cellStyle");

  return item;
}

//add numbers in order
function addNumbers(cell, i) {
  cell.innerText = i + 1;
}

// these function return a randomic number in range passed as argument
function randomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}

/************************ FUNCTIONS */

// Create the grid

console.log("JS OK");

const grid = document.getElementById("grid");

const columns = 10;
const rows = 10;

//total cells we gonna make
const totalCells = columns * rows;

//cicle for each cell
for (let i = 0; i < totalCells; i++) {
  //make the cell
  const cell = makeTheCell();

  // we gonna put the cell in the grid

  grid.appendChild(cell);

  // insert numbers normally in the cell

  addNumbers(cell, i);

  //event where if click a cell the bg-color change

  cell.addEventListener("click", function () {
    cell.classList.toggle("bg-color-yellow");
  });
}

function difficult1() {}
