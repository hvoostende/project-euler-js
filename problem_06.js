function sumSquares(numbers){
  var total = 0;
  for (var i = 1; i <= numbers; i++) {
    total+=(i * i)
  }
  return total
}

function squareSum(numbers){
  var total = 0;
  for (var i = 1; i <= numbers; i++) {
    total+=i
  }
  return total * total;
}

console.log(sumSquares(100));
console.log(squareSum(100));
console.log(squareSum(100)-sumSquares(100));
