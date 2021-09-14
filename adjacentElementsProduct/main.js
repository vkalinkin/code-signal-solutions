function adjacentElementsProduct(inputArray) {
  var largestProduct = inputArray[0] * inputArray[1]
  for (var a = 1; a < (inputArray.length - 1); a++) {
    var currentProduct = inputArray[a] * inputArray[a + 1];
    if (currentProduct > largestProduct) {
      largestProduct = currentProduct;
    }
  }
  return largestProduct;
}
