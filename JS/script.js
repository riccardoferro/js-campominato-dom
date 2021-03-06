// Consegna

// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco.
// Viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi nel range 1-100.

//***** FINO A QUI FATTO *******/

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.

//***** FINO A QUI FATTO *******/

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
// altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

//***** FINO A QUI FATTO *******/

// BONUS:
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle

//***** FINO A QUI FATTO *******/

// 2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

//***** FINO A QUI FATTO *******/

// 3- L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

/* 
Useful info:

First part: 
    -Make a game square grid.

    -In this we'll gonna put ten cells.

    -In this cells we have to put a number from 1 to 100.

    -When the user click each cell, the color cell became light blue

Second part:
  - Generate 16 randomic number in the range of the difficult choice and insert in an array without duplicates.



*/
/************************ FUNCTIONS */

//these function make the cells
function makeTheCell(levelClass) {
  const item = document.createElement("div");
  // add the class cellStyle in each div cell

  item.classList.add("cellStyle");
  item.classList.add(levelClass);

  return item;
}

//add numbers in order
function addNumbers(cell, i) {
  cell.innerText = i + 1;
}

// these function return a randomic number in range passed as argument
function randomNumber(min, max) {
  const range = max - min + 1;
  return Math.floor(Math.random() * range + min);
}

//null all clicks
function nullAllClicks(totCells) {
  const grid = document.getElementById("grid");
  grid.classList.add("noClick");
}

//insert bombs's positions in the array
function arrayBombs(totCells) {
  const posBombs = [];

  while (posBombs.length < 16) {
    const number = randomNumber(1, totCells);
    if (!posBombs.includes(number)) {
      posBombs.push(number);
    }
  }
  return posBombs;
}

//make the grid
function makeGrid(totCells, levelClass) {
  const grid = document.getElementById("grid");

  grid.innerHTML = "";

  //cicle for each cell
  for (let i = 0; i < totCells; i++) {
    //make the cell
    const cell = makeTheCell(levelClass);

    //insert id in the cells
    cell.id = "cell-" + (i + 1);

    // we gonna put the cell in the grid

    grid.appendChild(cell);

    // insert numbers normally in the cell

    addNumbers(cell, i);
  }
}

//event where if click the cell that have the number in the array the bg-color became red else light-blue
function boomOrNot(totCells, posBombs) {
  //score
  let punteggio = 0;

  //max-score
  const maxPunteggio = 10 * (totCells - 16);

  for (let i = 1; i <= totCells; i++) {
    const cell = document.getElementById("cell-" + i);

    //if bombs bg color red else bg color light blue

    cell.addEventListener("click", () => {
      if (posBombs.includes(i)) {
        cell.classList.add("bg-color-red");
        console.log("partita terminata, HAI PERSO!");
        console.log(punteggio);
        nullAllClicks(totCells);
        showAllBombs(posBombs);
      } else {
        cell.classList.add("bg-color-light-blue");
        punteggio = punteggio + 10;
      }
      if (punteggio === maxPunteggio) {
        console.log("partita terminata, HAI VINTO!");
        console.log(punteggio);
        nullAllClicks(totCells);
      }
    });
  }
}

function showAllBombs(bombsToShow) {
  const totCells = document.querySelectorAll(".cellStyle");

  for (let i = 0; i < totCells.length; i++) {
    if (bombsToShow.includes(i + 1)) {
      const bombCell = totCells[i];
      bombCell.classList.add("bg-color-red");
    }
  }
}
/************************ FUNCTIONS */

/******************* CODE MAIN  ****************/

console.log("JS OK");

const buttonEasy = document.getElementById("easy");

const buttonMedium = document.getElementById("medium");

const buttonHard = document.getElementById("hard");

const buttonReset = document.getElementById("reset");

buttonEasy.addEventListener("click", () => startGame(100, "easy"));

buttonMedium.addEventListener("click", () => startGame(81, "medium"));

buttonHard.addEventListener("click", () => startGame(49, "hard"));

buttonReset.addEventListener("click", () => {
  const grid = document.getElementById("grid");
  grid.classList.remove("noClick");
  grid.innerHTML = "";
});

function startGame(totCells, level) {
  // Create the grid
  makeGrid(totCells, level);

  //array of bombs
  const posBombs = arrayBombs(totCells);
  console.log(posBombs);

  //check if you have click a bomb
  boomOrNot(totCells, posBombs);
}
/******************* CODE MAIN  ****************/
