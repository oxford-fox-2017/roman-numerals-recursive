let to_roman = (num) => {
  let latin = [1, 4, 5, 9, 10, 40, 50, 100, 400, 500, 1000];
  let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'C', 'CD', 'D', 'M'];
  let result = '';
  if (num < 1) {
    return result;
  } else if (num <= 3000) {
    for (let i = roman.length - 1; i >= 0; i--) {
      if (num >= latin[i]) {
        result += roman[i];
        num -= latin[i];
      }
    }
  }
  return result + to_roman(num);
}

console.log(`My totally sweet testing script\n`);
console.log(`Input  |  Expected  | Actual`);
console.log(`_____  |  ________  | ______`);
console.log(`4      |  IV        |`, to_roman(4));
console.log(`9      |  IX        |`, to_roman(9));
console.log(`23     |  XXIII     |`, to_roman(23));
console.log(`1453   |  MCDLIII   |`, to_roman(1453));
console.log(`1646   |  MDCXLVI   |`, to_roman(1646));
