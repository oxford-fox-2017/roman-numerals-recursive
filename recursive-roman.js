var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var ara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function convert(num) {
    if (num <= 0 || num >= 4000) {
        return num;
    } else {
        var romanNumeral = "";
        for (var i = 0; i < roman.length; i++) {
            while (num >= ara[i]) {
                num -= ara[i];
                romanNumeral += roman[i];
            }
        }
    }
    return romanNumeral;
}

console.log(convert(4));
console.log(convert(9));
console.log(convert(23));
console.log(convert(1453));
console.log(convert(1646));