console.log('JS ok')

//elementi del dom

const button = document.getElementById('play');
const grid = document.getElementById('grid');
const level = document.getElementById('level');
const scoreElement = document.getElementById('score');


/**** | FUNCTIONS | *****/

function createCell () {
    const cell = document.createElement('div');
    cell.classList.add('cell', 'level-10');

    return cell;
}




//al click del bottone devo generare 100 celle
button.addEventListener ('click', function (){

    //cancello il contenuto del HTML in caso venga cliccato più volte il tasto play
    grid.innerHTML = ''


    const totalCells = level.value * level.value

    //Creo un ciclo per creare e stampare le celle nel dom
    for (let i = 0; i < totalCells; i++){

        const cell = createCell ();

        //stampo il nodo nel dom
        grid.appendChild(cell);

        // stampo i numeri da 1 a 100 centro le celle
        const number = i + 1
        cell.innerText = number
        
        
        // al click della cella aggiungo la la classe
        cell.addEventListener('click', function(){
            cell.classList.add('clicked');
            console.log(number)
            
            let score = 0;
            
            for (i = 0; i < cell.clientHeight; i++){
               
                const clicked = document.querySelectorAll('clicked');

            }



            scoreElement.innerText = score
        });


    }
    
});
