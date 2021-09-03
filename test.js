const a = ' 5 ';

console.log(Number('00500'));

function isDigit(s) {
  return s == parseFloat(s);
}

console.log(isDigit(a));
