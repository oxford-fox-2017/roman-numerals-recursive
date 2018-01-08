function roman_recursive(input){
    var number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    for(var i=0; i<number.length; i++){
        if(input < 1){
            return "";
        }else if(input >= number[i]){
            return roman[i] + roman_recursive(input - number[i]);
        }
    }
}
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('1646  | MDCXLVI  | ', roman_recursive(1646))
console.log('4     | IV       | ', roman_recursive(4))
console.log('9     | IX       | ', roman_recursive(9))
console.log('13    | XIII     | ', roman_recursive(13))
console.log('1453  | MCDLIII  | ', roman_recursive(1453))
