/*
  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  Dichiariamo chi ha vinto.
 */

// L’utente sceglie pari o dispari. 
const userChoice = prompt('Scegli pari(p) o dispari (d)')
console.log(userChoice)

// L’utente inserisce un numero da 1 a 5.
const userNumb = Number(prompt('Inserisci un numero da 1 a 5'))
console.log(userNumb)

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber(min,max){ //Funzione googlata
  return Math.floor(Math.random()*(max-min+1)+min)
}

// Assegno il valore della funzione ad una costante
const pcNumb = console.log(randomNumber(1, 5))