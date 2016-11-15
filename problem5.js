function isDivisible(number, counter){
  var divisible = false;
  // console.log(number + " " +counter);
  for (var i = 1; i <= counter; i++) {
    if(number % i === 0){
      // console.log(i);
      // console.log("true");
      divisible = true;
    }else{
      // console.log(i);
      // console.log("false");
      divisible = false;
      return divisible;
    }
  }
  return divisible;
}

var counter=0;
var divisible=false;

while (!divisible) {
  counter++;
  divisible = isDivisible(counter, 20);
}



console.log(counter);
