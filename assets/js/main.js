console.log('File js pronto');
// Descrizione:
// Un alert espone 5 numeri casuali (univoci).
// Da li parte un timer di 30 secondi.
// // Dopo 30 secondi l’ utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente.
// // Dopo che sono stati inseriti i 5 numeri, il software dice quanti
//  e quali dei numeri da indovinare sono stati individuati
// // Assicuratevi di saper fare correttamente l’ esercizio con output
//  base (alert() , prompt() , console.log() )


var numeriUnivociPc = [];
var numeriUnivociUser = [];

for(i=0; i < 5; i++) {
var numeriRandomPc = Math.floor(Math.random()*50) +1;
numeriUnivociPc.push(numeriRandomPc);
};

alert('I 5 numeri random sono:' + ' ' +  numeriUnivociPc)

// ref
var secondi = 3000;

// var inserisciNumeri = parseInt(prompt('Inserisci numero'));

setTimeout(loopNumeri, secondi);

function loopNumeri(){
  for(i=0; i < 5; i++) {
  var chiedoNumeroUtente = parseInt(prompt('Inserisci numero'));
  numeriUnivociUser.push(chiedoNumeroUtente);
  console.log('Numeri utente: ' + numeriUnivociUser);
  }
};

console.log('Numeri pc: ' + numeriUnivociPc);
