function matrixElementsSum(matrix) {
  let count = 0;

  let workingColumns = [];
  for (let a = 0; a < matrix[0].length; a++) {
    workingColumns.push(a);
  }
  for (let row = 0; row < matrix.length; row++) {
    let currentRow = matrix[row];

    for (let b = 0; b < workingColumns.length; b++) {
      let currentColumn = workingColumns[b];
      let currentRoom = currentRow[currentColumn];
      if (currentRoom === 0) {
        workingColumns.splice(b, 1)
        b--;
      } else {
        count += currentRoom;
      }
    }

  }
  return count;
}
