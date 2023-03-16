/*
  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  Dichiariamo chi ha vinto.
 */

// L’utente sceglie pari o dispari. 
const userChoice = prompt('Scegli pari o dispari')
console.log('Scelta utente: ',userChoice)

// L’utente inserisce un numero da 1 a 5.
const userNumb = Number(prompt('Inserisci un numero da 1 a 5'))
console.log('Numero utente: ',userNumb)

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber(min,max){ //Funzione googlata
  const randomNum = Math.floor(Math.random()*(max-min+1)+min)
  return randomNum
}

// Assegno il valore della funzione ad una costante
const pcNumb = randomNumber(1, 5)
console.log('Numero random pc: ',pcNumb);
let flag = 'dispari'
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function sum(numb1, numb2) {
  const result = (numb1 + numb2)
  console.log('Somma: ',result,`${flag}`);
  if (result % 2 == 0) {
    flag = 'pari'
  }
  userChoice === flag ? console.log('Congratulation: You Win!!!') : console.log('Sorry Pc Wins!!!')
  
}

// Salvo il risultato in una variabile
const somma = sum(userNumb, pcNumb)


