'use script'

/* ciclo for */

let somma = 0;

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Inserisci un numero: "));
  somma += numero;
}

console.log("La somma dei numeri inseriti è: " + somma);


/* ciclo while */

let somma2 = 0;
let i = 0;

while (i < 5) {
  let numero2 = parseInt(prompt("Inserisci un numero: "));
  somma2 += numero2;
  i++;
}

console.log("La somma dei numeri inseriti è: " + somma2);

