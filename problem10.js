// function prime(number){
//   var prime = true;
//   for (var i = 2; i < number; i++) {
//
//     if (number % i == 0){
//       prime = false;
//     }
//   }
//   return prime
// }
//
// function gimmePrimeTotal(below){
//   total = 0;
//   for (var i = 2; i < below; i++) {
//     if (i/1000 === 1){
//     }
//     if (prime(i)){
//       console.log(i);
//       total += i;
//     }
//   }
//   return total;
//
// }
//
// console.log(gimmePrimeTotal(2000000));

var sum = 2;
var isPrime = true;
for (var i = 3; i < 10; i++) {
  aa = Math.sqrt(i);
  for (var j = 2; j <=aa; j++){
    if (i%j===0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    sum = sum + i;
    console.log(i);
  }
  isPrime = true;
}
console.log(sum);
