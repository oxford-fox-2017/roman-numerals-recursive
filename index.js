function romanNumerals(input) {
    let output = ''
    var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
    var numeral = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]

    if(input ==  1 ){
        return output += roman[0]
    }else {
            for (let i = roman.length-1; i >= 0; i--) {
                
                while(input >= numeral[i]){
                    output += roman[i]
                    return output +  romanNumerals(input-numeral[i])
                }
            }
    }
    return output
}

// romanNumerals()
console.log('My Totally sweet Testing Script \n')
console.log('input | expected | actual')
console.log('------ | ---------- | --------')
console.log('4      | IV         | ', romanNumerals(4))
console.log('9      | IX         | ', romanNumerals(9))
console.log('23     | XXIII      | ', romanNumerals(23))
console.log('1453   | MCDLIII    | ', romanNumerals(1453))
console.log('1646   | MDCXLVI    | ', romanNumerals(1646))