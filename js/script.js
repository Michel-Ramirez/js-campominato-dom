console.log("JS ok");

//elementi del dom

const button = document.getElementById("play");
const grid = document.getElementById("grid");
const level = document.getElementById("level");
const scoreElement = document.querySelector(".score");
const gameOver = document.querySelector(".game-over");
const finalScore = document.getElementById("final-score");
const playAgain = document.getElementById("play-again");

function playGame() {
  function createCell() {
    const cell = document.createElement("div");
    cell.classList.add("cell", `level-${level.value}`);

    return cell;
  }

  function getBomb(bombNumber, totalCells) {
    let bombs = [];

    //estraggo numeri da pushare nel array fintanto che l'array non raggiunge la lunghezza del numero di bombe richieste
    while (bombs.length < bombNumber) {
      let randomNumbers;
      do {
        //genero il numero random
        randomNumbers = Math.floor(Math.random() * totalCells) + 1;
        //fin quando il numero nel è presente nel array continuo ad estrarre
      } while (bombs.includes(randomNumbers));
      // pusho nel array
      bombs.push(randomNumbers);
    }

    return bombs;
  }

  gameOver.classList.add("v-hidden");

  //cancello il contenuto del HTML in caso venga cliccato più volte il tasto play
  grid.innerHTML = "";

  const totalCells = level.value * level.value;

  //punteggio
  let score = 0;
  scoreElement.innerText = score;
  //numero bombe da posizionare
  const bombNumber = 16;

  //richiamo la funzione che mi restituisce l'array dei numeri random dove andranno posizionate le bombe
  const bombs = getBomb(bombNumber, totalCells);
  console.log(bombs);

  //Creo un ciclo per creare e stampare le celle nel dom
  for (let i = 0; i < totalCells; i++) {
    //richiamo la funzione che crea le celle
    const cell = createCell();

    //stampo il nodo nel dom
    grid.appendChild(cell);

    // stampo i numeri da 1 a 100 centro le celle
    const number = i + 1;

    //numeri all'interno delle celle
    // cell.innerText = number;

    // al click della cella aggiungo la classe
    cell.addEventListener("click", function () {
      //controllo se la la cella ha già la classe se non la ha la aggiungo altrimenti mi fermo
      if (cell.classList.contains("clicked")) return;

      //aggiungo la classe alla casella cliccata
      cell.classList.add("clicked");
      console.log(number);

      // se la bomba include il numero cliccato
      const isBomb = bombs.includes(number);

      if (isBomb) {
        cell.classList.add("bomb");
        setTimeout(() => {
          gameOver.classList.remove("v-hidden");
          finalScore.innerText = score;
        }, 500);
      } else {
        //aumento il punteggio man mano che clicco sulle celle
        score++;
        //scrivo il punteggio
        scoreElement.innerText = score;
      }
    });
  }
}

//al click del bottone devo generare 100 celle
button.addEventListener("click", function () {
  /**** | FUNCTIONS | *****/

  playGame();
});

playAgain.addEventListener("click", function () {
  gameOver.classList.add("v-hidden");
  playGame();
});
