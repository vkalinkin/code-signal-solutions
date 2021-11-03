function almostIncreasingSequence(sequence) {
  let output = false;
  let count = 0;
  for (let a = 0; a < sequence.length; a++) {
    if (sequence[a] <= sequence[a - 1]) {
      count++;
      if (sequence[a] <= sequence[a - 2] && sequence[a + 1] <= sequence[a - 1]) {
        count++;
      }
    }
  }
  if (count <= 1) {
    output = true;
  }
  return output;
}
