function to_roman(number) {
  let roman = [[1000 , 'M'],
              [900, 'CM'],
              [500, 'D'],
              [400, 'CD'],
              [100, 'C'],
              [90, 'XC'],
              [50, 'L'],
              [40, 'XL'],
              [10, 'X'],
              [9, 'IX'],
              [5, 'V'],
              [4, 'IV'],
              [1, 'I']]

    if (number === 0) {
      return ''
    }
    for (let i = 0; i < roman.length; i++) {
      if (number >= roman[i][0]) {
        return roman[i][1] + to_roman(number-roman[i][0])
      }

  }
}

console.log(to_roman(512));
