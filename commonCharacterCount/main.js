function solution(s1, s2) {
  let count = 0;
  let string2 = s2;
  for (let a = 0; a < s1.length; a++) {
    for (let b = 0; b < string2.length; b++) {
      if (s1[a] === string2[b]) {
        count++;
        string2 = string2.slice(0, b) + string2.slice(b + 1);
        b--;
        break;
      }
    }
  }
  return count;
}
