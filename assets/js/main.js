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

//prendo elemento result
const resultEl = document.querySelector(".result");


//creo timer 30 secondi
let timeId;
let seconds = 0;
let score = 0;

//ascolto il click su play
buttonEl.addEventListener("click", function() {
    
    // numeri random
    firstRnd = getRandomNumber(1, 100);
    secondRnd = getRandomNumber(1, 100);
    thirdRnd = getRandomNumber(1, 100);
    fourthRnd = getRandomNumber(1, 100);
    fifthRnd = getRandomNumber(1, 100);

    const numbersArray = [firstRnd, secondRnd, thirdRnd, fourthRnd, fifthRnd];

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
        if (seconds == 5) {

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
                const firstUserNumber = Number(prompt("inserisci i numeri che ti ricordi"));
                const secondUserNumber = Number(prompt("inserisci i numeri che ti ricordi"));
                const thirdUserNumber = Number(prompt("inserisci i numeri che ti ricordi"));
                const fourthUserNumber = Number(prompt("inserisci i numeri che ti ricordi"));
                const fifthUserNumber = Number(prompt("inserisci i numeri che ti ricordi"));  

                const userNumberArray = [];

                if (numbersArray.includes(firstUserNumber)) {
                    userNumberArray.push(firstUserNumber);
                    score++;
                }  
        
                if (numbersArray.includes(secondUserNumber)) {
                    userNumberArray.push(secondUserNumber);
                    score++;
                } 
                
                if (numbersArray.includes(thirdUserNumber)) {
                    userNumberArray.push(thirdUserNumber);
                    score++;
                } 
                
                if (numbersArray.includes(fourthUserNumber)) {
                    userNumberArray.push(fourthUserNumber);
                    score++;
                } 
                
                if (numbersArray.includes(fifthUserNumber)) {
                    userNumberArray.push(fifthUserNumber);
                    score++;
                }
        
                

                if (numbersArray == userNumberArray){

                    resultEl.innerText = `Bravo! hai indovinato ${score} su 5 numeri. I tuoi numeri corretti: ${userNumberArray}`;

                } else if (score == 0){

                    resultEl.innerText = `Ops! hai indovinato ${score} su 5 numeri`;

                } else {

                    resultEl.innerText = `Hai indovinato ${score} su 5. I tuoi numeri corretti: ${userNumberArray}`;

                }
                
                clearInterval(promptUser);

            }, 50)

        }

    }, 1000)

    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    // resultGame = setInterval(function(){

    //     if (numbersArray.includes(firstUserNumber)) {
    //         console.log("sono nel primo");
    //         score++;
    //     }  

    //     if (numbersArray.includes(secondUserNumber)) {
    //         console.log("sono nel secondo");
    //         score++;
    //     } 
        
    //     if (numbersArray.includes(thirdUserNumber)) {
    //         console.log("sono nel terzo");
    //         score++;
    //     } 
        
    //     if (numbersArray.includes(fourthUserNumber)) {
    //         console.log("sono nel quarto");
    //         score++;
    //     } 
        
    //     if (numbersArray.includes(fifthUserNumber)) {
    //         console.log("sono nel quinto");
    //         score++;
    //     }

    //     console.log(score);
    //     console.log(numbersArray);
    //     console.log(firstUserNumber);
    //     console.log(secondUserNumber);
    //     console.log(thirdUserNumber);
    //     console.log(fourthUserNumber);
    //     console.log(fifthUserNumber);

    //     clearInterval(resultGame);

    // }, 35000)

})


/**
 * Genero un numero random
 * @param {Number} min minimo in questione 1
 * @param {Number} max massimo in questione è il numero delle caselle del livello
 * @returns numero intero casuale da un min ad un max
 */
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

