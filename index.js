function to_roman(input) {
  var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'XL', 'L', 'X', 'IX', 'V', 'IV', 'I'];
  var res = '';

  if (input <= 0) {
    return res;
  } else {
    for (var i = 0; i < arabic.length; i++) {
      if (input % arabic[i] < input) {
        res += roman[i];
        input -= arabic[i];
        return res + to_roman(input);
      }
    }
  }
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
