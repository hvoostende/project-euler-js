

function palindromeFunc(number){
  var palindrome = false;
  if (number.toString() === reverseString(number)){
    palindrome = true;
  }
return palindrome;
}

function reverseString(s){
    return s.toString().split("").reverse().join("");
}

function largestPalindrome(digits){
  var product = 0 ;
  var palindrome = [];
  for (var i = 1; i < digits; i++) {
    for (var j = 1; j < digits; j++) {
      product = i * j;
      if (palindromeFunc(product)){
        palindrome.push(product);
      }
    }
  }
  return Math.max.apply(Math, palindrome);

}







console.log(largestPalindrome(1000));
