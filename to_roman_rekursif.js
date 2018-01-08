/*PSEUDO CODE
1. Definisikan kamus simbol romawi. Pastikan simbol yang digunakan sebelum perubahan angka dimasukkan dalam kamus
2. Definisikan kamus angka arabic. Pastikan angka arabic menyesuaikan dengan simbol romawi
3. Buat variabel bernilai kosong untuk menampung huruf romawi yang akan ditampilkan
4. Buat kondisi yang menyatakan bahwa program ini hanya dibuat untuk input angka di bawah sama dengan 3000
5. Buat kondisi looping yang melakukan pengurangan antara angka input dengan angka pada kamus arabic, yang memiliki hasil terkecil
6. Indeks angka arabic yang menghasilkan pengurangan dengan hasil terkecil tersebut kemudian dimasukkan ke dalam variabel kosong
7. Lakukan pengulangan sampai angka input bernilai 0
*/

function to_roman(num) {
    let tampung = '';
    const rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const alfa = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    if (num > 3000) {
        return "MAAF ANGKA MAKSIMAL ADALAH 3000, MOHON REVISI ANGKA YANG ANDA MASUKKAN";
    } else if (num === 0) {
        return tampung
    } else {
        for (let i = 0; i < alfa.length - 1; i++) {
            if (num >= alfa[i]) {
                tampung += rom[i];
                return tampung + to_roman(num - alfa[i]);
            }
        }
    }
}

console.log(to_roman(125));