/**
  Chiedere all’utente di inserire una parola.
  Creare una funzione per capire se la parola inserita è palindroma
 */

  // Chiedere all’utente di inserire una parola.
  const userWord = prompt('Inserisci una parola')

  // Creare una funzione per capire se la parola inserita è palindroma.
 

  // Creo la funzione isPalindrome
  function isPalindrome() {
     // creo un array e lo riempio con la parola scritta dall' utente
    const wordLetters = []
    wordLetters.push(userWord)
    console.log(wordLetters)

    // Creo una variabile carattere e inserisco ddento di essa le singole letter della parola scritta dall'utente
    let wordLetter = userWord.split('')
    console.log(wordLetter);

    // Creo una variabile e inserisco le lettere nell' ordine inverso
    let inverseWordLetter = wordLetter.reverse()
   console.log(inverseWordLetter);

   // Riunisco le lettere della parola inversa e li salvo in una variabile
    const inverseWordUser = inverseWordLetter.join('')
    console.log(inverseWordUser)

    // Stabilisco l condizioni per cui la parola è palindroma
    if (userWord === inverseWordUser) {
    console.log(`${userWord} è palindroma`)
    } else {
    console.log(`${userWord} non è palindroma`)
    }
  }

  isPalindrome(userWord)
 


  