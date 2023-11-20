/*
// Esercizio Pari e Dispari
//Chiedere all'utente di scegliere tra pari e dispari e di inseriere un numero 
let paridispari= prompt("Scegli tra pari e dispari");
let sceglinumero= parseInt(prompt("Inserisci un numero"));


let generanumero= generateRandomNumberZeroToMaxNumber(5);
let somma= sceglinumero + generanumero;
let risultato= Checkparidisparidichiaravintapersa(somma, paridispari);




// Generare le funzioni 

function generateRandomNumberZeroToMaxNumber (maxNumber) {
    let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    return randomNumber
}


function Checkparidisparidichiaravintapersa (number, or) {
    if (number % 2 == 0 && or == "pari") {
        console.log("Hai vinto")
    }
    else if (number % 2 == 0 && or == "dispari") {
        console.log("Hai perso")
    }
    else if (number % 2 != 0 && or == "dispari") {
        console.log ("Hai vinto")
    }
}
*/



//Esercizio parola palindroma
//Chiedere all'utente di inseriere una parola

let parola= prompt("Inserisci una parola");
let parolaInversa= invertiParola(parola);

if(parola == parolaInversa) {
    console.log("La parola è palindroma");
}
else {
    console.log("La parola non è palindroma");
}




function invertiParola(str) {
    var strInversa = str.split("").reverse().join("");
    return strInversa
}



