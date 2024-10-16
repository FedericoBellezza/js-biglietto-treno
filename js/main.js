/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// ^ DATI A DISPOSIZIONE
let indexPricePerKm = 0.21;
let over18Discount = 0.2;
let over65Discount = 0.4;
let userAge;

let isAgeValid, isKmValid, finalPrice;

// & RACCOLTA DATI
// ^ DATI DALL'UTENTE
let userKm = parseInt(prompt('Quanti chilomentri dovrai percorrere?'));
// ^ CONTROLLO SE I KM INSERITI SONO VALIDI
if (!isNaN(userKm) && userKm > 0) {
	isKmValid = true;
} else {
	isKmValid = false;
	alert('I km inseriti non sono validi, ricaricare la pagina');
}

if (isKmValid) {
	userAge = parseInt(prompt('Inserisci la tua età'));
}
// ^ CONTROLLO SE L'ETA' INSERITA E' VALIDA
if (!isNaN(userAge) && userAge < 150 && userAge >= 0) {
	isAgeValid = true;
} else {
	isAgeValid = false;
	alert('Età inserita non valida, ricaricare la pagina');
}

// & ELABORAZIONE DATI
// ^ CALCOLO IL PREZZO PER KM
let pricePerKm = indexPricePerKm * userKm;
finalPrice = pricePerKm;

// ^ APPLICO LO SCONTO SE NECESSARIO
if (userAge > 65 && isAgeValid && isKmValid) {
	finalPrice -= pricePerKm * over65Discount;
}
if (userAge < 18 && isAgeValid && isKmValid) {
	finalPrice -= pricePerKm * over18Discount;
}

// ^ STAMPO IL MESSAGGIO CON IL PREZZO FINALE
finalPrice = finalPrice.toFixed(2);

console.log(
	`
    km utente: ${userKm}
    età utente: ${userAge}
    prezzo al km: ${indexPricePerKm}
    prezzo finale: ${finalPrice}
    is age valid: ${isAgeValid}
    `
);

alert(`Il prezzo del biglietto è di €${finalPrice}`);
