const to_roman = num => {
    const dictionary = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC : 90,
        L : 50,
        XL: 40,
        X :10,
        IX :9,
        V :5,
        IV :4,
        I : 1,
    }
    if (num > 3000) return 'Angka yang kamu masukkan terlalu besar, angka maksimal adalah 3000';

    else {
        if (num === 0) return '';
        else {
            for (let i in dictionary) {
            if (num >= dictionary[i]) {
                return i + to_roman(num-dictionary[i]);
            }
        }
    }
    }
    return roman;
}


console.log(to_roman(4)); // IV
console.log(to_roman(9)); // IX
console.log(to_roman(23)); // XXIII
console.log(to_roman(1453)); // MCDLIII
console.log(to_roman(1646)); // MDCXLVI