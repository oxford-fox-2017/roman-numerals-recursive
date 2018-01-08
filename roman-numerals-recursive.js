//

// 1. Membuat karakter hasil dengan result
// 2. Membuat array dalam kamus baik itu number dan pasangan roman
// 3. Melakukan perulangan sebanyak panjang number / roman
// 4. Dalam proses perulangan, lakukan perulangan lagi untuk check dan melakukan hitungan dengan number yg mendekati dan menambah variable 'result' dengan roman sampai looping selesai

//

function toRoman(num) {

    let result = '';
    let number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];


    if(num === 0) {
      return '';
    } else {

      for (let i = 0; i < roman.length; i++) {
  
          while (num >= number[i]) {
              return (roman[i]) + toRoman(num - number[i]);
          }
  
      }
    }
    
}

console.log('My totally sweet testing sricpt');
console.log('input | expected | actual');
console.log('______|__________|_______|');
console.log('4     | IV       |', toRoman(4));
console.log('9     | IX       |', toRoman(9));
console.log('23    | XXIII    |', toRoman(23));
console.log('1453  | MCDLIII  |', toRoman(1453));
console.log('1646  | MDCXLVI  |', toRoman(1646));