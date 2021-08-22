function shapeArea(n) {
  if (n === 1) {
    return 1;
  } else {
    var area = 1;
    for (var a = 2; a <= n; a++) {
      var currentPerimeter = (a * 4) - 4;
      area += currentPerimeter;
    }
    return area;
  }
}
