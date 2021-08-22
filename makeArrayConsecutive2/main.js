function makeArrayConsecutive2(statues) {
  let max = statues[0];
  for (let a = 1; a < statues.length; a++) {
    const current = statues[a];
    if (current > max) {
      max = current;
    }
  }
  let min = statues[0];
  for (let b = 1; b < statues.length; b++) {
    const currentL = statues[b];
    if (currentL < min) {
      min = currentL;
    }
  }
  const length = max - min + 1;
  const output = length - statues.length;
  return output;
}
