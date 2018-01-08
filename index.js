const romawi = [
                 ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                 ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
                 ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
                 ['', 'M', 'MM', 'MMM']
              ];


function to_roman(angka){
    var arrAngka = (String(angka)).split('');
    var totalLength = arrAngka.length;

    if(totalLength === 1){
        return romawi[0][arrAngka[0]];
    }
    else{
        var return1 = romawi[totalLength-1][arrAngka[0]];
        
        arrAngka.shift();
        var return2 = to_roman(parseInt(arrAngka.join(''))); 
        
        return return1+return2;
    }

}

console.log(to_roman(4));
console.log(to_roman(9));
console.log(to_roman(23));
console.log(to_roman(1453));
console.log(to_roman(1646));