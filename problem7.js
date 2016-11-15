

function prime(number){
  var prime = true;
  for (var i = 2; i < number; i++) {

    if (number % i == 0){
      prime = false;
    }
  }
  return prime
}

function gimmePrime(position){
  var currentPosition = 0;
  var counter = 2;
  var primeNumber = 0;
  while (currentPosition < position){
    if (prime(counter)){
      currentPosition++;
      primeNumber = counter;
    }
    counter++;
  }
  return primeNumber;

}

console.log(gimmePrime(10001));
