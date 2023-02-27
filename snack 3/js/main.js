'Use strict'

/* lista dei nomi e dei cognomi */
const nomi = ["Rocco", "Marco", "Luca", "Riccardo", "Cosimo", "Paola"];
const cognomi = ["Ravanello", "Rape", "Cavoli", "Lattuga", "Carote", "Melograno"];

/* genero i tre nomi */
for (let i = 1; i <= 3; i++) {
  let nome = nomi[Math.floor(Math.random() * nomi.length)];
  let cognome = cognomi[Math.floor(Math.random() * cognomi.length)];
  let invitato = nome + " " + cognome;
  console.log("Invitato " + i + ": " + invitato);
}
