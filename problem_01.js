var listOfMultiples = [];
var total = 0;
function div(number){
  if (number % 3 === 0 || number % 5 === 0){
    listOfMultiples.push(number)
  }
}

for (var i = 0; i < 1000; i++) {
  div(i);
}

for (number in listOfMultiples){
  total += listOfMultiples[number]
}
console.log(listOfMultiples);
console.log(total);
