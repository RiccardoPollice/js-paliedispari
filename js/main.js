let paridispari= prompt("Scegli tra pari e dispari");
let sceglinumero= parseInt(prompt("Inserisci un numero"));
let generanumero= generateRandomNumberZeroToMaxNumber(5);
let somma= sceglinumero + generanumero;
let risultato= Checkparidisparidichiaravintapersa(somma, paridispari);





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