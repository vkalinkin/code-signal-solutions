function centuryFromYear(year) {
  var div = year / 100;
  div = Math.floor(div);
  var rem = year % 100;
  console.log('div', div);
  console.log('rem', rem);

  var division = div + rem;
  console.log('division', division)

  if (division === div) {
    return division;
  } else {
    return div + 1;
  }
}
