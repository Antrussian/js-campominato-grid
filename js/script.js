/*Consegna
L'utente clicca su un bottone 
che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, 
la cella cliccata si colora di azzurro
ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.*/





let difficolta = 0;


let selectlivelloUtente = document.getElementById('livello-utente');



document.getElementById('start-game').addEventListener('click', function () {

difficolta = parseInt(selectlivelloUtente.value);

generaSquareNumerato(difficolta);


});









function generaSquareNumerato (numeroIndice) {

    let wrapper = document.querySelector('.wrapper');

    wrapper.innerHTML = '';

    

for (let i = 1 ; i <= numeroIndice ; i++ ) {


    let square = document.createElement('div');
    
    square.classList.add('quadrato');

    if (numeroIndice === 81 )
    {
        square.classList.add('medium');
    }
    else if ( numeroIndice === 49 ) {
        square.classList.add('hard');
    }
    else if (numeroIndice === 100 ) {
        square.classList.add('easy');
    }
   




    square.innerText = i ;


    square.addEventListener('click', function () {
 
        square.classList.toggle('lightblue');

        console.log('Cella cliccata:' + i);
 });
    

    wrapper.appendChild(square);


    
    }
    

}