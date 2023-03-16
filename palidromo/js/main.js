/*
  Chiedere all’utente di inserire una parola.
  Creare una funzione per capire se la parola inserita è palindroma
 */

// Chiedere all’utente di inserire una parola.
const userWord = prompt("Inserisci una parola");

// Creare una funzione per capire se la parola inserita è palindroma.

// Creo la funzione isPalindrome
function isPalindrome(Word) {
  // creo un array e lo riempio con la parola scritta dall' utente
  const wordLetters = [];
  wordLetters.push(Word);

  // Creo una variabile carattere e inserisco ddento di essa le singole letter della parola scritta dall'utente
  let wordLetter = userWord.split("");

  // Creo una variabile e inserisco le lettere nell' ordine inverso
  let inverseWordLetter = wordLetter.reverse();

  // Riunisco le lettere della parola inversa e li salvo in una variabile
  const inverseWord = inverseWordLetter.join("");

  // Stabilisco l condizioni per cui la parola è palindroma
  if (Word === inverseWord) {
    return true;
  } else {
    return false;
  }
}

// Invoco la funzione
console.log(isPalindrome(userWord));
console.log(isPalindrome("asso"));
