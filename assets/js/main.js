console.log('File js pronto');
// Descrizione:
// Un alert espone 5 numeri casuali (univoci).
// Da li parte un timer di 30 secondi.
// // Dopo 30 secondi l’ utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente.
// // Dopo che sono stati inseriti i 5 numeri, il software dice
// quanti e quali dei numeri da indovinare sono stati individuati
// // Assicuratevi di saper fare correttamente l’ esercizio con output
//  base (alert() , prompt() , console.log() )


var numeriUnivociPc = [];
var numeriUnivociUser = [];

for(i=0; i < 5; i++) {
var numeriRandomPc = Math.floor(Math.random()*50) +1;
numeriUnivociPc.push(numeriRandomPc);
};

alert('Prova a ricordare questi numeri:' + ' ' +  numeriUnivociPc)

// ref
var msecondi = 300;
var msecondiI = 400;
var numeriTrovati = 0;

setTimeout(loopNumeri, msecondi);

function loopNumeri(){
  for(i=0; i < 5; i++) {
  var chiedoNumeroUtente = parseInt(prompt('Inserisci numero'));
  numeriUnivociUser.push(chiedoNumeroUtente);
  console.log('Numeri utente: ' + numeriUnivociUser);
  }
};

setTimeout(paragoni, msecondi);

function paragoni(){
  for(var i=0; i < numeriUnivociUser.length; i++){
    if(numeriUnivociPc.includes(numeriUnivociUser[i])){
      numeriTrovati++;
    }
  }
  console.log('Num trovati: ' , numeriTrovati);
};

console.log('Numeri da indovinare: ' + numeriUnivociPc);
