

function prime(number){
  var prime = true;
  for (var i = 2; i < number; i++) {

    if (number % i == 0){
      prime = false;
    }
  }
  return prime
}

function primeFactors(number){
  var primeFactors = [];
  for (var i = 2; i < number; i++) {
    if (prime(i) && number % i == 0){
      primeFactors.push(i);
      console.log(i);
    }
  }
  return primeFactors;
}

primeFactors(600851475143);
