function to_roman(num){
  let result = ''
  let obj = {
    4 : 'IV',
    5 : 'V',
    9 : 'IX',
    10 : 'X',
    40 : 'XL',
    50 : 'L',
    90 : 'LC',
    100 : 'C',
    400 : 'CD',
    500 : 'D',
    900 : 'DM',
    1000 : 'M'
  }
  if(num < 4){
    return result + 'I'.repeat(num)
  } else {
        for (var i = Object.keys(obj).length-1; i >= 0; i--) {
            if(num >= Object.keys(obj)[i]){
              result += obj[Object.keys(obj)[i]];
              return result + to_roman(num-= Object.keys(obj)[i])
            }
        }
    }
}

console.log(to_roman(27));
