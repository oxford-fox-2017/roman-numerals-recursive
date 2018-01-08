var roman = [ 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M' ];
var angka = [ 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000 ];

function to_roman(num, result = []){
    if(num <= 0){
        return result.join('')
    } else {
        var sortir = angka.filter(arr => arr <= num);
        var index = angka.indexOf(sortir[sortir.length-1]);        
        var printRoman = roman[index];

        result.push(printRoman);
        num = num - angka[index];
        return to_roman(num,result)
    }
}




console.log('input | expected | actual');
console.log('----- | -------- | ------');
console.log('4     |  IV      |', to_roman(4));
console.log('9     |  IX      |', to_roman(9));
console.log('23    |  XXIII   |', to_roman(23));
console.log('1453  |  MCDLIII |', to_roman(1453));
console.log('1646  |  MDCXLVI |', to_roman(1646));
