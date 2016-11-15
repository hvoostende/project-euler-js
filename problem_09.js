// console.log(Math.sqrt(25));

function addedThousand(counter){
  var product = 0;
  for (var i = 1; i < counter; i++) {
    for (var j = 1; j < counter; j++) {
      for (var k = 1; k < counter; k++) {
        if (i + j + k === counter && isPyTrip(i,j,k)) {
          product = i * j * k;

        }
      }
    }
  }
  return product;
}

function isPyTrip(a,b,c){
  if( ((a * a) + (b * b)) === (c * c)){
    return true;
  } else{
    return false;
  }
}
console.log(addedThousand(1000));
// console.log(isPyTrip(3,4,5));

//a2 + b2 = c2
//3 * 3 + 4 * 4 = 5 * 5
