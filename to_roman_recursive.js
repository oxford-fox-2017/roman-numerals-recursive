function to_roman(input) {
  let result = ''
  let num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  for (let i = 0; i < num.length; i++) {
    if (input === 0) {
      return ''
    }
    if (input % num[i] < input) {
      input -= num[i]
      return roman[i] + to_roman(input);
    }
  }

}

console.log('My totally sweet teting script\n')
console.log('| input | expected | actual    |')
console.log('|_______|__________|___________|')
console.log('| 1     | IV       | ', to_roman(1), '       |')
console.log('| 23    | XXIII    | ', to_roman(23), '   |')
console.log('| 1453  | MCDLIII  | ', to_roman(1453), ' |')
console.log('| 1646  | MDCXLVI  | ', to_roman(1646), ' |')