'Use strict'

/* Chiedi all'utente di inserire un numero */
let numero = prompt("Inserisci un numero:");

/* Converto il numero da stringa a numero intero */
numero = Number(numero);

/* Controlla se il numero è pari o dispari */
if (numero % 2 === 0) {
 
  console.log(numero);
} else {
  
  console.log(numero + 1);
}
