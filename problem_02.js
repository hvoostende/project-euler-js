var fibonacci = [1, 2];
var onlyEven = [2];
var currentTerm = 0;
var tressHold = 4000000;
var total = 0;

while (currentTerm < tressHold) {
  preValue = fibonacci[fibonacci.length-2];
  currValue = fibonacci[fibonacci.length-1];
  currentTerm = preValue + currValue;
  if (currentTerm < tressHold){
    fibonacci.push(currentTerm);
    if (currentTerm % 2 === 0){
      onlyEven.push(currentTerm)
    }
  }

}

for (number in onlyEven){
  total += onlyEven[number]
}
// console.log(fibonacci);
// console.log(onlyEven);
console.log(total);
