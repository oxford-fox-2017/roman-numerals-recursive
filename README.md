# roman-numerals-recursive

/*

Bikin array 2D dengan angka dan romawinya
For berulang untuk mencari angka yg kurang dari angka romawi
Return romawi
Angka awal dikurangi angka yg digunakan untuk romawi sampai 0

*/

function romanNumerals(number){
  
    var roman = [
      [1000, 'M'],
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
      [1, 'I']
    ];
    
    if(number === 0){
      return '';
    }
    
    for(let i=0; i<roman.length; i++){
      if(roman[i][0]<=number){
        return roman[i][1] + romanNumerals(number-roman[i][0]);
      }
    }
    
  }
  
  console.log(romanNumerals(476));