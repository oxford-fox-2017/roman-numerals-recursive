function to_roman(angka){
    let roman = ['M', 'CM', 'CD', 'D', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let arabic = [1000, 900, 400, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let temp = '';
    if ( angka === 0 ){
        return '';
    }else{
        for ( var i = 0; i < arabic.length; i++){
            if( angka >= arabic[i]){
                return roman[i] + to_roman(angka - arabic[i]);
            }
        }
    }
}

console.log(to_roman(125));