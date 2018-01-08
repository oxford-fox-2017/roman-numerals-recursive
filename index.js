/*

Pseudocode

1. Buat variabel hasil dengan nama 'temp'
2. Buat array dalam kamus baik itu value dan pasangan arabics
3. Buat stopper untuk recrusif
4. Buat komputasi reksusif sampai kondisi stopper terpenuhi

*/


function to_roman(num) {

    let temp = '';
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let arabics = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];


    if (num === 0) {
        return '';
    } else {

        for (let i = 0; i < arabics.length; i++) {

            while (num >= values[i]) {
                return arabics[i] + to_roman(num - values[i]);
            }

        }
    }

}

console.log('My totally sweet testing sricpt');
console.log('input | expected | actual');
console.log('______|__________|_______|');
console.log('4     | IV       |', to_roman(4));
console.log('9     | IX       |', to_roman(9));
console.log('23    | XXIII    |', to_roman(23));
console.log('1453  | MCDLIII  |', to_roman(1453));
console.log('1646  | MDCXLVI  |', to_roman(1646));