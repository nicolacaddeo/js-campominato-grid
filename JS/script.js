// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di
// azzurro se il numero progressivo è pari, di verde se dispari.

// Inoltre emette un messaggio in console con il numero della cella cliccata.

// -------------------------------------------------------------------

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

const gridBtn = document.getElementById('init-btn');
const gridContainer = document.getElementById('grid');

gridBtn.addEventListener('click',
    function () {
        gridContainer.innerHTML = '';

        // ciclo per creare la griglia
        for (let i = 1; i <= 100; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerHTML = i;
            gridContainer.append(cell);

            // console.log del numero
            cell.addEventListener('click',
                function () {
                    console.log(`Hai cliccato la cella ${i}`);
                }
            );
        }
    }
);



