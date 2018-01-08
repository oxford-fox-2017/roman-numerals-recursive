function to_roman (angka){
    
        var hasil = []
    
        var kamusRoman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        var kamusAngka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    
        var hasil = ""
    
    
        if(angka === 0){
            
            return hasil;
        } else{
            for(var x = 0; x<= kamusAngka.length - 1;x++){
                if(angka >= kamusAngka[x]){
                    hasil += kamusRoman[x]
                    angka -= kamusAngka[x]
                    return hasil + to_roman(angka)
                }
            }
        }
    
    }
    
    console.log(to_roman(4))
    console.log(to_roman(9))
    console.log(to_roman(23))
    console.log(to_roman(1453))
    console.log(to_roman(1646))