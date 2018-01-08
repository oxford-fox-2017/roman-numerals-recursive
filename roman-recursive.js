'use strict'

let arabicRoman = {
  1   : 'I',
  4   : 'IV',
  5   : 'V',
  9   : 'IX',
  10  : 'X',
  40  : 'XL',
  50  : 'L',
  90  : 'LC',
  100 : 'C',
  400 : 'CD',
  500 : 'D',
  900 : 'DM',
  1000: 'M',
}

let keyRoman = Object.keys(arabicRoman)

function to_roman(num) {
  let result = ''
  if (num == 0) {
    return result
  } else {
    for (let i = keyRoman.length - 1; i >= 0; i--) {
      while (num >= keyRoman[i]) {
        result += arabicRoman[keyRoman[i]]
        return result + to_roman(num - keyRoman[i])
      }
    }
  }
}

console.log('My totally sweet testing script\n');
console.log('input  |  expected  |  actual');
console.log('_______|____________|________');
console.log('4      | IV         |', to_roman(4));
console.log('9      | IX         |', to_roman(9));
console.log('23     | XXIII      |', to_roman(23));
console.log('1453   | MCDLIII    |', to_roman(1453));
console.log('1646   | MDCXLVI    |', to_roman(1646));
