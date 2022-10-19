// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// prendo elemento della dom play game
const buttonEl = document.querySelector(".play");

// prendo elemento dom timer
const timerEl = document.querySelector(".timer");

// prendo elemento dom con il numero random
const firstRndNumberEl = document.querySelector(".firstRndNumber");
const secondRndNumberEl = document.querySelector(".secondRndNumber");
const thirdRndNumberEl = document.querySelector(".thirdRndNumber");
const fourthRndNumberEl = document.querySelector(".fourthRndNumber");
const fifthRndNumberEl = document.querySelector(".fifthRndNumber");


//creo timer 30 secondi
let timeId;
let seconds = 0;

//ascolto il click su play
buttonEl.addEventListener("click", function() {
    
    // numeri random
    firstRnd = getRandomNumber(1, 100);
    secondRnd = getRandomNumber(1, 100);
    thirdRnd = getRandomNumber(1, 100);
    fourthRnd = getRandomNumber(1, 100);
    fifthRnd = getRandomNumber(1, 100);

    // numeri random
    firstRndNumberEl.innerText = firstRnd;
    secondRndNumberEl.innerText = secondRnd;
    thirdRndNumberEl.innerText = thirdRnd;
    fourthRndNumberEl.innerText = fourthRnd;
    fifthRndNumberEl.innerText = fifthRnd;

    // timer start
    timeId = setInterval(function () {

        timerEl.innerText = seconds;
        ++seconds

        // timer stop dopo 30seconi 
        if (seconds == 31) {

            //fermo il timer
            clearInterval(timeId);

            //svuoto i numeri pc random
            firstRndNumberEl.innerText = "";
            secondRndNumberEl.innerText = "";
            thirdRndNumberEl.innerText = "";
            fourthRndNumberEl.innerText = "";
            fifthRndNumberEl.innerText = "";

            promptUser = setInterval(function () {
                // chiedo all'utente di inserire i numeri che si ricorda
                const firstUserNumber = prompt("inserisci i numeri che ti ricordi");
                const secondUserNumber = prompt("inserisci i numeri che ti ricordi");
                const thirdUserNumber = prompt("inserisci i numeri che ti ricordi");
                const fourthUserNumber = prompt("inserisci i numeri che ti ricordi");
                const fifthUserNumber = prompt("inserisci i numeri che ti ricordi");  

                clearInterval(promptUser);

            }, 50)

        }

    }, 1000)



})

/**
 * Genero i numeri in cui ci saranno le bombe in maniera casuale
 * @param {Number} min minima casella 
 * @param {Number} max casella massima in base al livello
 * @returns array with random number
 */
 function generateBombs(min, max) {

    let bombs = [];
    
    while (bombs.length !== 16){
        // assegno a bomb un valore casuale
        const bomb = getRandomNumber(min, max);

        // se bomb ha un valore che non c'è in bombs lo aggiungo
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }

    }

    return bombs
}

/**
 * Genero un numero random
 * @param {Number} min minimo in questione 1
 * @param {Number} max massimo in questione è il numero delle caselle del livello
 * @returns numero intero casuale da un min ad un max
 */
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}




// Visualizzare in pagina 5 numeri casuali. 

// Dopo 30 secondi i numeri scompaiono 


// l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.