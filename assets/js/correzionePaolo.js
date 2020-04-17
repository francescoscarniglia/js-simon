console.log('ok');

var randomNumbers = [];
var waitTime = 300;


// genera 5 numeri univoci
// questo while continua a loopare fin quando trova 5 elem.
while(randomNumbers.length < 5) {

  newRandomNumber = getNumberRandom(1, 100);
  //  includes controlla se il valore esiste all'interno
  if(! randomNumbers.includes(newRandomNumber)){
    randomNumbers.push(newRandomNumber);
  }

}

// mostro i nueri
alert(randomNumbers);


//***************** GAME LOGIC *****************/
setTimeout(function(){

  var userNumbers = [];

  while(userNumbers.length < 5) {
    //mi serve inserire il numero attuale per poter comparare uno ad uno
    var newUserNumber = parseInt(prompt('Inserisci il ' + (userNumbers.length + 1) + ' ° numero'));

    // se il valore che prendo non è un numero ripeti
    while(isNaN(userNumbers)) {
      var newUserNumber = parseInt(prompt('Inserisci il ' + (userNumbers.length + 1) + ' ° numero'));
    }

    // verifico unicità del numero che viene inserito
    if(! userNumbers.includes(newUserNumber)){
      userNumbers.push(newUserNumber);
    } else {
      alert('Numero già inserito!')
    }

  }


}, waitTime);



//***************** FUNZIONI *****************/

function getNumberRandom(min, max) {
  return Math.floor(Math.random()*( max - min)) + 1;
}
