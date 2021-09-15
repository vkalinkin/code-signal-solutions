function checkPalindrome(inputString) {
  var length = Math.floor(inputString.length / 2);
  var palin = true;
  for (var a = 0; a < length; a++) {
    var currentChar = inputString[a];
    var backChar = inputString[inputString.length - a - 1];
    if (currentChar !== backChar) {
      palin = false;
    }
  }
  return palin;
}
