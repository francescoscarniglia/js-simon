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

  var userNumber = [];


}, waitTime);



//***************** FUNZIONI *****************/

function getNumberRandom(min, max) {
  return Math.floor(Math.random()*( max - min)) + 1;
}
